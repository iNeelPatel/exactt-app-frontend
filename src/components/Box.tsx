import styled from "styled-components";
import { elevation as AkElevations } from "@atlaskit/theme";
import { Elevation } from "@atlaskit/theme/types";

const elevations = { ...AkElevations };

const Box = styled.div<{ elevation: Elevation }>`
   ${({ elevation }) => elevations[elevation]}
   background-color: #ffffff;
   border-radius: 3px;
   min-width: 300px;
   padding: 16px 15px;
   text-align: center;
`;

export default Box;
