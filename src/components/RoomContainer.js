import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loadding";

const RoomContainer = ({ context }) => {
  const { Loading, sortedRooms, rooms } = context;

  if (Loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../context";
// import Loading from "./Loadding";
// const RoomContainer = () => {
//   return (
//     <RoomConsumer>
//       {/* value => is a function */}
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             hello from rooms Rooms Container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomContainer;
