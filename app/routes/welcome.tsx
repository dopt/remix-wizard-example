import { useEffect } from "react";
import { type V2_MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";

import {
  AboutYou,
  SelectChannelsOrganic,
  SelectChannelsPaid,
  Success,
} from "~/components/onboarding";

import { useFlow } from "@dopt/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Welcome" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Welcome() {
  const [flow, intent] = useFlow("YOUR_FLOW_ID");

  const navigate = useNavigate();

  useEffect(() => {
    if (flow.state.finished) {
      navigate('/');
    }
  }, [navigate, flow]);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <button onClick={intent.reset}>Reset</button>
      <AboutYou />
      <SelectChannelsOrganic />
      <SelectChannelsPaid />
      <Success />
    </div>
  );
}
