/* eslint-disable react/prop-types */
import React from "react";
import { fireEvent, getByTestId } from "@testing-library/react";
import { curry, flow } from "lodash/fp";
import { Component, createElement, forwardRef, ReactNode } from "react";
import { Provider } from "react-redux";
import { MemoryRouter, MemoryRouterProps } from "react-router";
import configureStore, {
  MockStoreCreator,
  MockStoreEnhanced,
} from "redux-mock-store";
import thunk from "redux-thunk";

let _mockStore: MockStoreCreator<any, {}>;
let seed: number = 0;

export const mockFlow = flow;

export function mockStore<S = any>(state: S) {
  if (!_mockStore) {
    _mockStore = configureStore<S>([thunk]);
  }
  return _mockStore(state);
}

function mockProviderFunc<S = any>(state: S, children: ReactNode) {
  return <Provider store={mockStore(state)}>{children}</Provider>;
}

function mockProviderWithStoreFunc<S = any>(
  state: S,
  children: ReactNode
): [JSX.Element, MockStoreEnhanced<any, {}>] {
  const store = mockStore(state);
  const provider = <Provider store={store}>{children}</Provider>;
  return [provider, store];
}

export const mockProvider = curry<
  Parameters<typeof mockProviderFunc>[0],
  Parameters<typeof mockProviderFunc>[1],
  ReturnType<typeof mockProviderFunc>
>(mockProviderFunc);

export const mockProviderWithStore = curry<
  Parameters<typeof mockProviderFunc>[0],
  Parameters<typeof mockProviderFunc>[1],
  ReturnType<typeof mockProviderWithStoreFunc>
>(mockProviderWithStoreFunc);

export const mockRouter = curry(
  (props: MemoryRouterProps, children: ReactNode) => (
    <MemoryRouter {...props}>{children}</MemoryRouter>
  )
);

export const clearMocks = (...mocks: Function[]) => {
  for (const mock of mocks) {
    (mock as jest.Mock).mockClear();
  }
};

export const resetMocks = (...mocks: Function[]) => {
  for (const mock of mocks) {
    (mock as jest.Mock).mockReset();
  }
};

const customEventsTestid = (id: string, uniqueId: number | string) =>
  `${id}-custom-events-target-${uniqueId}`;

export const fireEventOnMock = (
  element: HTMLElement,
  customEvent: string,
  ...customArgs: any[]
) => {
  const elem = getByTestId(
    element.parentElement as HTMLElement,
    customEventsTestid(
      element.getAttribute("data-testid") as string,
      element.getAttribute("data-customEventsId") as string
    )
  );
  fireEvent.click(elem, { target: { data: { customEvent, customArgs } } });
};

export const mockComponent = (
  id: string | ((props: any) => string) = "Component",
  {
    forwardRef: _forwardRef = false,
    asClass = false,
    childrenAsFunc = false,
    childrenProps = {},
    withCustomEvents = false,
  } = {}
) => {
  const _createElement = ({ children, ...props }: any = {}, ref?: any) => {
    const localId = typeof id === "function" ? id(props) : id;
    let customEventsUuid: number | null = null;
    let customEvents: ReactNode = null;
    if (withCustomEvents) {
      customEventsUuid = ++seed;
      customEvents = createElement("mock-custom-events-target", {
        "data-testid": customEventsTestid(localId, customEventsUuid),
        onClick: (event: any) => {
          const { customEvent, customArgs } = event.target.data;
          const matcher = new RegExp(`^(on)?${customEvent}$`, "i");
          const [, callback] =
            Object.entries<Function>(props).find(([key]) =>
              matcher.test(key)
            ) || [];
          if (callback) {
            callback(...customArgs);
          }
        },
      });
    }
    return (
      <>
        {createElement(
          `mock-${localId}`,
          {
            ...props,
            "data-testid": localId,
            ...(ref ? { ref } : {}),
            ...(withCustomEvents
              ? { "data-customEventsId": customEventsUuid }
              : {}),
          },
          childrenAsFunc ? children(childrenProps) : children
        )}
        {customEvents}
      </>
    );
  };
  if (_forwardRef) {
    return forwardRef((props, ref) => _createElement(props, ref));
  } else if (asClass) {
    class ComponentMock extends Component {
      name = typeof id === "string" ? id : "ComponentMock";
      render() {
        return _createElement(this.props);
      }
    }
    return ComponentMock;
  }
  const componentFunc = function (props: any) {
    return _createElement(props);
  };
  Object.defineProperty(componentFunc, "name", {
    value: `mock-${id}`,
    writable: false,
  });
  return componentFunc;
};

export const asMock = (mock: any) => mock as jest.Mock;
