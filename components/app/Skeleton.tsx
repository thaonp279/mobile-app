import { View, ScrollView } from "react-native";
import { Skeleton as SK } from "@rneui/base";
export function Skeleton() {
  return (
    <ScrollView
      contentContainerStyle={{ flexDirection: "column", gap: 10 }}
      style={{ backgroundColor: "white", padding: 25 }}
    >
      <SK
        animation="pulse"
        skeletonStyle={{
          backgroundColor: "#D3D3D3",
        }}
        height={200}
      />
      <SK
        animation="pulse"
        skeletonStyle={{
          backgroundColor: "#D3D3D3",
        }}
        height={30}
      />
      <SK
        animation="pulse"
        skeletonStyle={{
          backgroundColor: "#D3D3D3",
        }}
        height={50}
      />
    </ScrollView>
  );
}
