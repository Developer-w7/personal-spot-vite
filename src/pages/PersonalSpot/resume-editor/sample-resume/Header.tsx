import React from "react";
import { Link, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#112131",
    borderBottomStyle: "solid",
    alignItems: "stretch",
  },
  detailColumn: {
    flexDirection: "column",
    flexGrow: 9,
    textTransform: "uppercase",
  },
  linkColumn: {
    flexDirection: "column",
    flexGrow: 2,
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
  name: {
    fontSize: 24,
    fontFamily: "Lato Bold",
  },
  subtitle: {
    fontSize: 10,
    justifySelf: "flex-end",
    fontFamily: "Lato",
  },
  link: {
    fontFamily: "Lato",
    fontSize: 10,
    color: "black",
    textDecoration: "none",
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
});
type ResumeProps = {
  size?: "A4" | "A5" | "LETTER";
  formData: {
    title: string;
    size: string;
    keywords: string;
    subject: string;
    name: string;
    email: string;
    aboutYou: string;
    experience: string;
    phoneNumber: string;
    skills: string;
    education: string;
    address: string;
  };
};
const Header = (props: ResumeProps) => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{props.formData.name}</Text>
      <Text style={styles.subtitle}>Jedi Master</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link href={`mailto:${props.formData.email}`} style={styles.link}>
        {props.formData.email}
      </Link>
    </View>
  </View>
);

export default Header;
