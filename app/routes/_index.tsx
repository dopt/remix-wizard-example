import { useEffect } from "react";
import { type V2_MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";

import { useFlow, useFlowStatus } from "@dopt/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const navigate = useNavigate();
  const [flow, intent] = useFlow('YOUR_FLOW_ID');
  const flowStatus = useFlowStatus('YOUR_FLOW_ID');

  const USER_IS_LOGGED_IN = true;

  useEffect(() => {
    if (USER_IS_LOGGED_IN && !flowStatus.failed && flow.state.started && !flow.state.finished) {
      navigate('/welcome');
    }
  }, [navigate, USER_IS_LOGGED_IN, flow, flowStatus]);

  if (flowStatus.pending) {
    return 'Loading...';
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>

      <button onClick={intent.reset}>Reset</button>
    </div>
  );
}
