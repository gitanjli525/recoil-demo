import React, { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

const reposState = atom({
  key: "repos",
  default: [],
});

function App() {
  const [repos, setRepos] = useRecoilState(reposState);
  useEffect(() => {
    const getRepos = async () => {
      const url = "";
      const resp = await fetch(url);
      const body = await resp.json();
      setRepos(body);
    };
    getRepos();
  }, []);
  return repos.map((repo) => <div key={repo.url}></div>);
}

export default App;
