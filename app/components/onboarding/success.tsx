import { useBlock } from "@dopt/react";

export function Success() {
  const [block, transition] = useBlock<['complete']>('YOUR_STEP_4_BLOCK_ID');

  if (!block.state.active) return null;

  return (
    <div id="success">
      <h1>Step 4 of 4: Looks good</h1>

      <p>Some content here</p>
      
      <button onClick={() => transition('complete')}>Get started</button>
    </div>
  )
}