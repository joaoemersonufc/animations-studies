import StyledWithoutDrag from "@/animations/appstore-animations/appstore-game-card-expansible";
import SharedLayout from "@/animations/appstore-animations/appstore-games-cards";
import ClipPathButton from "@/animations/buttons/hold-button";
import DragExample from "@/animations/drag-and-drop-ball";

export default function Home() {
  return (
    <>
      <ClipPathButton />
      <DragExample/>
      <SharedLayout />
      <StyledWithoutDrag/>
    </>
  );
}
