import { useBlock } from "@dopt/react";

export function SelectChannelsOrganic() {
  const [block, transition] = useBlock<['complete']>('YOUR_STEP_2_BLOCK_ID');

  const handleSubmit = () => {
    // Do something with the form data

    // Transition the state of the block
    transition('complete');
  }

  if (!block.state.active) return null;

  return (
    <div id="select-channels-organic">
      <h1>Step 2 of 4: Select your organic platforms</h1>
      <form>
        <p>Some form elements here</p>
      </form>
      <button onClick={handleSubmit}>Continue</button>
    </div>
  )
}