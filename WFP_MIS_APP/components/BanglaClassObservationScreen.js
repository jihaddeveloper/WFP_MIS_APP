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
        <Text style={{ fontSize: 20 }}>বাংলা ক্লাস পর্যবেক্ষণ ফরম</Text>

        <ScrollView>
          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>সাধারণ তথ্য:</Text>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ flex: 1 }}>
                <Text>বিদ্যালয়ের নাম </Text>
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
                      placeholder="দিন/মাস/বছর"
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
                <Text>পদবী</Text>
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
                <Text>জেন্ডার</Text>
                <TextInput
                  placeholder="..............."
                  style={{ justifyContent: "flex-start" }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  সংশ্লিষ্ট বিষয়ে প্রশিক্ষণপ্রাপ্ত শিক্ষক পাঠ পরিচালনা করছেন
                </Text>
                <TextInput
                  placeholder="..............."
                  style={{ justifyContent: "flex-end" }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text>শ্রেণী</Text>
                    <TextInput
                      placeholder="..............."
                      style={{ justifyContent: "flex-start" }}
                    />
                    <Text>শাখা</Text>
                    <TextInput
                      placeholder="..............."
                      style={{ justifyContent: "flex-start" }}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text>ক্লাস শুরুর সময়</Text>
                    <TextInput
                      placeholder="..............."
                      style={{ justifyContent: "flex-start" }}
                    />
                    <Text>ক্লাস শেষের সময়</Text>
                    <TextInput
                      placeholder="..............."
                      style={{ justifyContent: "flex-start" }}
                    />
                  </View>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <Text>পাঠ নং/ পাঠের নাম</Text>
                <TextInput
                  placeholder="..............."
                  style={{ justifyContent: "flex-end" }}
                />
                <Text>দিন</Text>
                <TextInput
                  placeholder="..............."
                  style={{ justifyContent: "flex-end" }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ flex: 1 }}>
                <Text>ভর্তিকৃত শিশুর সংখ্যা :</Text>
                <TextInput
                  placeholder="মেয়ে"
                  style={{ justifyContent: "flex-start" }}
                />
                <TextInput
                  placeholder="ছেলে"
                  style={{ justifyContent: "flex-start" }}
                />
                <TextInput
                  placeholder="মোট"
                  style={{ justifyContent: "flex-start" }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text>উপস্থিত শিশুর সংখ্যা :</Text>
                <TextInput
                  placeholder="মেয়ে"
                  style={{ justifyContent: "flex-start" }}
                />
                <TextInput
                  placeholder="ছেলে"
                  style={{ justifyContent: "flex-start" }}
                />
                <TextInput
                  placeholder="মোট"
                  style={{ justifyContent: "flex-start" }}
                />
              </View>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>নির্দেশনা </Text>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ padding: 5 }}>
                  ১। সংশ্লিষ্ট বিষয়ে প্রশিক্ষণপ্রাপ্ত শিক্ষক কত্রিক পাঠ পরিচালিত
                  হলেই কেবল সম্পূর্ণ পাঠ পর্যবেক্ষণ করুন ।
                </Text>
                <Text style={{ padding: 5 }}>
                  ২। সম্পূর্ণ পাঠ পর্যবেক্ষণ করুন তবে অগ্রাধিকার এরিয়ার ভিত্তিতে
                  ভালো দিক ও সহায়তার ক্ষেত্রগুলা চিহ্নিত করুন ।
                </Text>
                <Text style={{ padding: 5 }}>
                  ৩। বাংলা পাঠ উপস্থাপন সংক্রান্ত 2-3 টি ভালো দিক উল্লেখ করুন।
                </Text>
                <Text style={{ padding: 5 }}>
                  ৪। অগ্রাধিকার এরিয়ার ভিত্তিতে উপর ভিত্তিতে যে ১-২ টি
                  ইনডিকেটরের উত্তর "না বা আংশিক" হয়েছে তার আলোকে সহায়তার জন্য
                  অগ্রাধিকারভিত্তিক ইনডিকেটর উল্লেখ করুন
                </Text>
                <Text style={{ padding: 5 }}>
                  ৫। বাংলা পাঠ উন্নতির জন্য শিক্ষকের সাথে 2-3 সূচক আলোচনা করুন।
                </Text>
                <Text style={{ padding: 5 }}>
                  ৬। রুমটোরিড থেকে কোনো পদক্ষেপ গ্রহণের প্রয়োজন হলে উল্লেখ করুন
                  ।
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ justifyContent: "flex-end" }}>
                  ফলো-আপ করার জন্য গত পরিদর্শন থেকে প্রাপ্ত ১-২ টি বিষয় উল্লেখ
                  করুন যেখানে উন্নতি প্রয়োজন ছিল ঃ
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <View style={{ padding: 5 }}>
                      <Text>1.</Text>
                      <TextInput
                        style={{ height: 40, padding: 5 }}
                        placeholder=".........."
                      ></TextInput>
                    </View>
                    <View style={{ padding: 5 }}>
                      <Text>2.</Text>
                      <TextInput
                        style={{ height: 40, padding: 5 }}
                        placeholder=".........."
                      ></TextInput>
                    </View>
                    <View style={{ padding: 5 }}>
                      <Text>3.</Text>
                      <TextInput
                        style={{ height: 40, padding: 5 }}
                        placeholder=".........."
                      ></TextInput>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ padding: 10 }}>
            <Text style={styles.bigRedText}>ইনডিকেটর</Text>
            <View style={{ padding: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>ক্রমিক নং</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>ইনডিকেটর</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>অগ্রাধিকার এরিয়া</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>হ্যা</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>না</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>আংশিক</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>মন্তব্য</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text>
                  পাঠ চলাকালীন (পাঠ উপস্থাপনের শুরু থেকে দেখতে হবে এবং সার্বিক
                  অংশের সূচকগুলা শেষে দেখতে হবে ।)
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>1.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক ধ্বনি সচেতনাতার কাজে ব্যবহৃত সকল বর্ণ ও শব্দের ধ্বনি
                    সঠিকভাবে উচ্চারণ করেছেন এবং শিক্ষাত্রিদের চর্চা করার সুযোগ
                    দিয়েছেন ।
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>2</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>2.</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>
                    শিক্ষক সঠিকভাবে বর্ণ পড়া বা বর্ণ ও শব্দাংশ মিলিয়ে শব্দ পড়া
                    শিখিয়েছেন এবং শিখাত্রিদের চর্চা করার সুযোগ দিয়েছেন ।
                    (প্রযোজ্য ক্ষেত্রে)
                  </Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <Text>1</Text>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
                  ></TextInput>
                </View>
                <View style={{ flex: 1, padding: 2 }}>
                  <TextInput
                    style={{ height: 40, padding: 5 }}
                    placeholder="........."
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
