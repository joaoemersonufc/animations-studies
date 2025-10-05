import StyledWithoutDrag from "@/animations/appstore-animations/appstore-game-card-expansible";
import SharedLayout from "@/animations/appstore-animations/appstore-games-cards";
import ClipPathButton from "@/animations/buttons/hold-button";
import DragExample from "@/animations/drag-and-drop/drag-and-drop-ball";
import FeedbackComponentCSS from "@/animations/feedback/feedback";
import MultiStepComponent from "@/animations/feedback/multistep-feedback";
import Graph from "@/animations/graph/graph";
import MotionValueBasics from "@/animations/hooks/hooks";
import { TrashAnimation } from "@/animations/trash-animation/trash-animation";

export default function Home() {
  return (
    <>
      <ClipPathButton />
      <DragExample/>
      <SharedLayout />
      <StyledWithoutDrag/>
      <FeedbackComponentCSS/>
      <MultiStepComponent />
      <TrashAnimation />
      <MotionValueBasics />
      <Graph />
    </>
  );
}
