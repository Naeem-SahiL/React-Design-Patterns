import { SplitScreen } from "./SplitScreen";

const LeftComponent = () => <h1>Left</h1>;
const RightComponent = () => <h1>Right</h1>;

export default function SplitScreenView() {
  return (
    <SplitScreen leftWeight={1} rightWeight={2}>
      <LeftComponent />
      <RightComponent />
    </SplitScreen>
  );
}
