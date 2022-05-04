const Ex01 = () => {
    return (
      <div>
        <div><span>Hello World !</span></div>
        {false && <span>This is not showing up !</span>}
        <div><button>My bouton</button></div>
        {false && <a>My link</a>}
        <div data-testid="test1">Test1</div>
        {false && <div data-testid="test2">Test2</div>}
      </div>
    );
  };
  
  export { Ex01 };
  