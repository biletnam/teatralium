import styled from "styled-components";
import { phone } from "../../utils/media";
import FillCover from "../FillCover";

const Attention = styled(FillCover)`
  margin: 5rem 0;
  padding: 2rem;
  font-size: 1.5rem;
  display: block;
  ${phone(`font-size: 1.2rem; margin-top: 2rem;`)};
`;

export default Attention;
