import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  SectionList,
} from "react-native";
import PokemanCard from "./components/PokemanCard";
import pokemonData from "./data.json";
import groupedData from "./group-data.json";

export default function App() {
  const emmptyImage = require("./assets/bulbasaur.png");
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      {/* <PokemanCard {...charmanderData}></PokemanCard>
        <PokemanCard {...squirtleData}></PokemanCard>
        <PokemanCard {...bulbasaurData}></PokemanCard>
        <PokemanCard {...pikachuData}></PokemanCard> */}
      {/* {pokemonData.map((pokemon) => {
          return <PokemanCard {...pokemon} key={pokemon.id}></PokemanCard>;
        })} */}
      {/* </ScrollView> */}

      {/* <FlatList
        data={pokemonData}
        renderItem={({ item }) => {
          return <PokemanCard {...item} key={item.id}></PokemanCard>;
        }}
        keyExtractor={(item, index) => item.id.toString()}
        // horizontal={true}
        // ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Pokémon found!</Text>
          </View>
        }
        ListHeaderComponent={
          <Text style={styles.listHeaderText}>Pokemon List</Text>
        }
        ListFooterComponent={
          <Text style={styles.listFooterText}>End of the list</Text>
        }
      /> */}
      {/* we can set the title on group of data */}
      <SectionList
        sections={groupedData}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => {
          return (
            <View>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                {section.type}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
        SectionSeparatorComponent={() => <View style={{ height: 16 }}></View>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    // paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingTop: StatusBar.currentHeight,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF4500", // Fire-like theme color
  },
  listHeaderText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "green",
  },
  listFooterText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
    marginBottom: 16,
  },
  card: {
    padding: 16,
    borderRadius: 4,
    borderWidth: 1,
    marginHorizontal: 16,
  },
  cardText: {
    fontSize: 20,
  },
});
