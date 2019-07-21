import React from "react";
import { Text, View } from "react-native";
import styled, { css } from "styled-components/native";

/* --- Styles -------------------------------------- */

const Page = styled.View`
  flex: 1;
  background-color: #fff;
`;

const S = { Page };

/* --- <ProblemPage/> -------------------------------------- */

const ProblemPage = () => {
  return (
    <S.Page>
      <View>
        <Text>The problem:</Text>
      </View>
    </S.Page>
  );
};

/* --- Export ProblemPage -------------------------------------- */

export default ProblemPage;
