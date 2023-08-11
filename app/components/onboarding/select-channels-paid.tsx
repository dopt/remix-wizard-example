import { useBlock } from "@dopt/react";

export function SelectChannelsPaid() {
  const [block, transition] = useBlock<['complete']>('YOUR_STEP_3_BLOCK_ID');

  const handleSubmit = () => {
    // Do something with the form data

    // Transition the state of the block
    transition('complete');
  }

  if (!block.state.active) return null;

  return (
    <div id="select-channels-paid">
      <h1>Step 3 of 4: Select your paid platforms</h1>
      <form>
        <p>Some form elements here</p>
      </form>
      <button onClick={handleSubmit}>Continue</button>
    </div>
  )
}