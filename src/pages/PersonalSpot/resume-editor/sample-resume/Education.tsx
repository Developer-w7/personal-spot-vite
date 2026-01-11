import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import Title from "./Title";

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontFamily: "Lato Bold",
    fontSize: 10,
  },
  degree: {
    fontFamily: "Lato",
    fontSize: 10,
  },
  candidate: {
    fontFamily: "Lato Italic",
    fontSize: 10,
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
const Education = (props: ResumeProps) => (
  <View style={styles.container}>
    <Title>Education</Title>
    <Text style={styles.school}>{props.formData.education}</Text>
    <Text style={styles.degree}>Jedi Master</Text>
    <Text style={styles.candidate}>A long, long time ago</Text>
  </View>
);

export default Education;
