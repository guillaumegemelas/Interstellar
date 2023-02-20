import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";

//package qui fournit des infos sur l'appareil
import Constants from "expo-constants";

import logo from "./assets/logo.png";
import film from "./assets/film.jpg";
import matthew from "./assets/matthew.jpg";
import anne from "./assets/anne.jpg";
import jessica from "./assets/jessica.jpg";
import matt from "./assets/matt.jpeg";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
        }}
      >
        {/* logo Itmb */}
        <View style={styles.headerContainer}>
          <Image source={logo} style={{ width: 100, height: 49 }} />
        </View>

        {/* Titre Interstellar */}
        <View>
          <Text style={styles.titleTxt}>Interstellar</Text>
        </View>

        {/* Titre 2 date.. */}
        <View style={styles.description}>
          <Text style={styles.title2Txt}>2014</Text>
          <Text style={styles.title2Txt}>PG-13</Text>
          <Text style={styles.title2Txt}>2h49min</Text>
          <Text style={styles.title2Txt}>Adventure, Drame, Sci-Fi</Text>
        </View>

        {/* view avec photo et description */}
        <View style={styles.viewRow}>
          <Image
            source={film}
            style={{ width: 100, height: 150, marginLeft: 15 }}
          />
          <View>
            <View>
              <Text style={styles.descriptionTxt}>
                Une équipe d'explorateurs voyage à travers un trou noir dans
                l'espace dans le but de sauver l'humanité de l'extinction
              </Text>
            </View>
            <TouchableOpacity activeOpacity="0.8" style={styles.watchView}>
              <Text style={{ color: "white" }}>+ AJOUTER A LA LISTE</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* view avec notations et icones */}
        <View style={styles.rate}>
          <View style={styles.rateDetail}>
            <MaterialCommunityIcons name="star" size={24} color="#E6B91F" />
            <Text style={{ color: "white" }}>
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>8,6</Text>
              <Text>/10</Text>
            </Text>
            <Text style={{ color: "#393939", fontSize: 12 }}> 1.1M</Text>
          </View>
          <View style={styles.rateDetail}>
            <MaterialCommunityIcons
              name="star-outline"
              size={24}
              color="white"
            />
            <Text style={{ color: "white" }}>
              <Text style={{ fontSize: 15 }}>RATE THIS</Text>
            </Text>
            <Text></Text>
          </View>

          <View style={styles.rateDetail}>
            <View
              style={{
                height: 35,
                width: 35,
                backgroundColor: "#61C750",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>94</Text>
            </View>
            <Text style={{ color: "white" }}>
              <Text>Metascore</Text>
            </Text>
            <Text style={{ color: "#393939", fontSize: 12 }}>
              46 critics reviews
            </Text>
          </View>
        </View>
        <View style={{ height: 20, backgroundColor: "#191919" }}></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <Text
            style={{
              fontSize: 21,
              color: "white",
              marginLeft: 15,
              marginTop: 25,
            }}
          >
            Top Billed Cast
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#0177BD",
              marginRight: 15,
              marginTop: 30,
            }}
          >
            SEE ALL
          </Text>
        </View>
        {/* carroussel de photos */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row", marginLeft: 15 }}
        >
          <View style={styles.carrousselCard}>
            <Image
              source={matthew}
              style={{ width: 140, height: 190, borderRadius: 5 }}
            />
            <Text
              numberOfLines={1}
              style={{
                color: "white",
                fontSize: 12,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}
            >
              Matthew McConaughey
            </Text>
            <Text
              style={{
                color: "#A7A7A7",
                fontSize: 11,
                marginLeft: 10,
                marginTop: 3,
              }}
            >
              Cooper
            </Text>
          </View>
          <View style={styles.carrousselCard}>
            <Image
              source={anne}
              style={{ width: 140, height: 190, borderRadius: 5 }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 12,
                marginLeft: 10,
                marginTop: 10,
              }}
            >
              Anne Hattaway
            </Text>
            <Text
              style={{
                color: "#A7A7A7",
                fontSize: 11,
                marginLeft: 10,
                marginTop: 3,
              }}
            >
              Brand
            </Text>
          </View>
          <View style={styles.carrousselCard}>
            <Image
              source={jessica}
              style={{ width: 140, height: 190, borderRadius: 5 }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 12,
                marginLeft: 10,
                marginTop: 10,
              }}
            >
              Jessica Chastaing
            </Text>
            <Text
              style={{
                color: "#A7A7A7",
                fontSize: 11,
                marginLeft: 10,
                marginTop: 3,
              }}
            >
              Murph
            </Text>
          </View>

          <View style={styles.carrousselCard}>
            <Image
              source={matt}
              style={{ width: 140, height: 190, borderRadius: 5 }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 12,
                marginLeft: 10,
                marginTop: 10,
              }}
            >
              Matt Demon
            </Text>
            <Text
              style={{
                color: "#A7A7A7",
                fontSize: 11,
                marginLeft: 10,
                marginTop: 3,
              }}
            >
              Dr Mann
            </Text>
          </View>
        </ScrollView>

        <View>
          <Text style={styles.firstText}>Director</Text>
          <Text style={styles.secondText}>Christopher Nolan</Text>
        </View>
        <View>
          <Text style={styles.firstText}>Writers</Text>
          <Text style={styles.secondText}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
          <View style={{ marginBottom: 50 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "#393939",
    height: 70,
    justifyContent: "center",
    paddingLeft: 15,
    marginBottom: 10,
  },
  titleTxt: {
    fontSize: 30,
    color: "white",
    marginLeft: 15,
    marginBottom: 15,
  },
  title2Txt: {
    fontSize: 15,
    color: "#A7A7A7",
    marginLeft: 15,
    marginBottom: 20,
  },
  description: {
    flexDirection: "row",
    marginBottom: 20,
  },
  descriptionTxt: {
    color: "white",
    width: 240,
    marginLeft: 20,
  },
  viewRow: {
    flexDirection: "row",
  },
  watchView: {
    height: 30,
    width: 230,
    margin: 10,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0177BD",
    borderRadius: 4,
  },
  rate: {
    flexDirection: "row",
    flex: 1,
  },
  rateDetail: {
    flex: 1 / 3,
    justifyContent: "center",
    alignItems: "center",
    height: 120,
  },

  carrousselCard: {
    height: 250,
    width: 140,
    backgroundColor: "#2A2A2A",
    borderRadius: 5,
    marginRight: 8,
  },

  firstText: {
    color: "white",
    fontSize: 13,
    marginLeft: 10,
    marginTop: 15,
  },

  secondText: {
    color: "#A7A7A7",
    fontSize: 11,
    marginLeft: 10,
    marginTop: 3,
  },
});
