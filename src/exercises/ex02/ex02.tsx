import { useEffect, useState } from "react";

const Ex02 = ({ onButtonClick = ({ name, password }: any) => {} }) => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loadedName, setLoadedName] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div data-testid="ex02">
          <div>
            <span>Log in :</span>
          </div>
          <div>
            <input
              value={name}
              type="text"
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button
              onClick={() => {
                onButtonClick({ name, password });
                setLoginLoading(true);
                setTimeout(() => {
                  setLoginLoading(false);
                }, 800);
                setLoadedName(name);
              }}
            >
              Log in
            </button>
          </div>
          {loadedName && !loginLoading && (
            <span>Welcome back {loadedName}</span>
          )}
        </div>
      )}
    </div>
  );
};

export { Ex02 };
