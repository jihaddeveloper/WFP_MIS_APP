import React, { Component } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Picker,
} from "react-native";
import { color } from "react-native-reanimated";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

export default class BanglaClassObservationScreen extends Component {
  state = {
    choosenIndex: 0,
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoMain}
          source={require("../assets/rtr.png")}
        ></Image>
        <Text
          style={{
            color: "blue",
            fontWeight: "bold",
            fontSize: 20,
            padding: 25,
          }}
        >
          McGovern-Dole International Food for Education and Child Nutrition
          Program
        </Text>
        <Text style={{ fontSize: 20 }}>Bangla Class Observation Form</Text>

        <ScrollView>
          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>সাধারণ তথ্য:</Text>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ flex: 1 }}>
                <Text>স্কুলের নাম</Text>
                <TextInput
                  placeholder="..............."
                  style={{ justifyContent: "flex-start" }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text>উপজেলা</Text>
                    <TextInput
                      placeholder="..............."
                      style={{ justifyContent: "flex-start" }}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text>তারিখ</Text>
                    <TextInput
                      placeholder="DD/MM/YYYY"
                      style={{ justifyContent: "flex-end" }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ flex: 1 }}>
                <Text>পরিদর্শক এর নাম</Text>
                <TextInput
                  placeholder="..............."
                  style={{ justifyContent: "flex-start" }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text>উপাধি</Text>
                <TextInput
                  placeholder="..............."
                  style={{ justifyContent: "flex-end" }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ flex: 1 }}>
                <Text>শ্রেণি শিক্ষকের নাম</Text>
                <TextInput
                  placeholder="..............."
                  style={{ justifyContent: "flex-start" }}
                />
                <Text>লিঙ্গ</Text>
                <TextInput
                  placeholder="..............."
                  style={{ justifyContent: "flex-start" }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  placeholder="Is the trained Teacher teaching specific subject ?"
                  style={{ justifyContent: "flex-end" }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <TextInput
                      placeholder="Class"
                      style={{ justifyContent: "flex-start" }}
                    />
                    <TextInput
                      placeholder="Section"
                      style={{ justifyContent: "flex-start" }}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <TextInput
                      placeholder="Start time"
                      style={{ justifyContent: "flex-start" }}
                    />
                    <TextInput
                      placeholder="End time"
                      style={{ justifyContent: "flex-start" }}
                    />
                  </View>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  placeholder="Topic name or number"
                  style={{ justifyContent: "flex-end" }}
                />
                <TextInput
                  placeholder="Name of the Day"
                  style={{ justifyContent: "flex-end" }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ flex: 1 }}>
                <Text>Admitted Children:</Text>
                <TextInput
                  placeholder="Girl"
                  style={{ justifyContent: "flex-start" }}
                />
                <TextInput
                  placeholder="Boy"
                  style={{ justifyContent: "flex-start" }}
                />
                <TextInput
                  placeholder="Total"
                  style={{ justifyContent: "flex-start" }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text>Present Children:</Text>
                <TextInput
                  placeholder="Girl"
                  style={{ justifyContent: "flex-start" }}
                />
                <TextInput
                  placeholder="Boy"
                  style={{ justifyContent: "flex-start" }}
                />
                <TextInput
                  placeholder="Total"
                  style={{ justifyContent: "flex-start" }}
                />
              </View>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>Notice</Text>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ padding: 5 }}>
                  1. If the teacher is trained, then observe.
                </Text>
                <Text style={{ padding: 5 }}>
                  2. Observe the total teaching, but pick priority.
                </Text>
                <Text style={{ padding: 5 }}>
                  2. Observe the total teaching, but pick priority.
                </Text>
                <Text style={{ padding: 5 }}>
                  3. Mention 2-3 better way for Bangla reading.
                </Text>
                <Text style={{ padding: 5 }}>
                  4. Based on priority area, mention indicator for no or partial
                  no.
                </Text>
                <Text style={{ padding: 5 }}>
                  5. Discuss 2-3 indicator with teacher to improve Bangla
                  reading.
                </Text>
                <Text style={{ padding: 5 }}>
                  6. Mention RoomToRead action, if needed.3. Mention 2-3 better
                  way for Bangla reading.
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ justifyContent: "flex-end" }}>
                  Mention 1-2 points from last visit, to be improved
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <View style={{ padding: 5 }}>
                      <TextInput
                        style={{ height: 40, padding: 5 }}
                        placeholder="1."
                      ></TextInput>
                    </View>
                    <View style={{ padding: 5 }}>
                      <TextInput
                        style={{ height: 40, padding: 5 }}
                        placeholder="2."
                      ></TextInput>
                    </View>
                    <View style={{ padding: 5 }}>
                      <TextInput
                        style={{ height: 40, padding: 5 }}
                        placeholder="3."
                      ></TextInput>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>Indicator Information</Text>
            <View style={{ padding: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>Number</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>Indicator</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>Priority Area</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>Yes</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>No</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>Partial</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>Comment</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text>
                  Teaching Period(Obseve from starting and overall point to be
                  observe at last.)
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>1.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    Teacher pronuntuation is correct for all letter and word,
                    also allowing student for practice
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>2</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>2.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    Teacher reading is correct for all letter, letter and parts
                    of word, also allowing student for practice.(if applicable)
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>1</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>3.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    Teacher teaches vocabulary with meaning, allow student
                    making new sentences with these word.(if applicable)
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>3</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>4.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    The teacher teaches fluent reading(correct speed, correct
                    pronuntuation and action), and allow student to practice.(if
                    applicable)
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>2</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>5.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    The teacher ask suplimentory question for correct answer or
                    teaches to find answer.(if applicable)
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>3</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>6.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    The teacher teaches to write letter/joint
                    letter/word/sentence as trained.(if applicable)
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>2</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text>Allover(all topics related.)</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>7.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    The teacher follows learn-teach, I Do - We Do - You Do
                    method.(if applicable)
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>1</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>8.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    The teacher allows student to read in single or team.(if
                    applicable)
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>1</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>9.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    The teacher complete all topic sequnetually in time.
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>3</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>10.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    The teacher uses tool(by RoomToRead) in learning-teaching
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>2</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>11.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    Students book, workbook work justify the periodic progress
                    from last visit.
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>2</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>12.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    The teacher involves all boy-girl, physically challaged and
                    weak student in learning and testing.
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>1</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder=""
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>
              Important points to be discussed with Class Teacher
            </Text>
            <View style={{ padding: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    Mention 2-3 indicators(priority area number) in where
                    teacher was good
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="1. ......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="2. ......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="3. ......"
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    Pervileged teacher pick 1-2 indicator(area number) to self
                    improvement and how to do.
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="1. ......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="2. ......"
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>How to do.</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 80, padding: 5 }}
                    placeholder="1. .............................."
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 80, padding: 5 }}
                    placeholder="2. .............................."
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>Class teacher aim to do activities</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 60, padding: 5 }}
                    placeholder="1. .............................."
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 60, padding: 5 }}
                    placeholder="2. .............................."
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>Assessment</Text>
            <View style={{ padding: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text style={{ backgroundColor: "green" }}>
                    Select 5 students randomly and assess them
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>Letter, Word or Sentence for assessment</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 120, padding: 5 }}
                    placeholder=" .............................."
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>Name of student</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>Correct answer</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>Wrong answer</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>Total number</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 20, padding: 5 }}
                    placeholder="......"
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text>Hello World</Text>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>Visitor Detail</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, padding: 2 }}>
                <View style={{ padding: 5 }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>Name of LF</Text>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <TextInput
                        style={{ height: 40, padding: 5 }}
                        placeholder=" ......"
                      ></TextInput>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>Sign</Text>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <TextInput
                        style={{ height: 40, padding: 5 }}
                        placeholder=" ......"
                      ></TextInput>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>Date</Text>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <TextInput
                        style={{ height: 40, padding: 5 }}
                        placeholder=" ......"
                      ></TextInput>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, padding: 2 }}>
                <View style={{ padding: 5 }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>Name of LPO</Text>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <TextInput
                        style={{ height: 40, padding: 5 }}
                        placeholder=" ......"
                      ></TextInput>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>Sign</Text>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <TextInput
                        style={{ height: 40, padding: 5 }}
                        placeholder=" ......"
                      ></TextInput>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, padding: 2 }}>
                      <Text>Date</Text>
                    </View>
                    <View style={{ flex: 1, padding: 2 }}>
                      <TextInput
                        style={{ height: 40, padding: 5 }}
                        placeholder=" ......"
                      ></TextInput>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
  },
  logoMain: {
    height: 80,
    width: 80,
    resizeMode: "contain",
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  bigBlueText: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
  },
  bigRedText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
  },
  pickerStyle: {
    height: 150,
    width: "80%",
    color: "#344953",
    justifyContent: "center",
  },
});
