import React, {Component} from 'react'
import Spinner from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styled from 'styled-components';

const SpinnerContainer = styled.div`
display: flex;
justify-content: center;
align-item: center;
`;

export default class Loader extends Component {
  
  render() {
    return (
      <SpinnerContainer>
          <Spinner
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} 
      />
      </SpinnerContainer>
    );
  }
}

