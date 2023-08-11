import { useBlock } from "@dopt/react";

export function AboutYou() {
  const [block, transition] = useBlock<['complete']>('YOUR_STEP_1_BLOCK_ID');

  const handleSubmit = () => {
    // Do something with the form data

    // Transition the state of the block
    transition('complete');
  }

  if (!block.state.active) return null;

  return (
    <div id="about-you">
      <h1>Step 1 of 4: About you</h1>
      <form>
        <p>Some form elements here</p>
      </form>
      <button onClick={handleSubmit}>Continue</button>
    </div>
  )
}