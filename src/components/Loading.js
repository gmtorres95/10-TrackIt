import Loader from "react-loader-spinner";
import styled from "styled-components";

export default function Loading() {
    return (
        <Loader 
            type="ThreeDots"
            color="#FFF"
            height={43}
            width={80}
        />
    );
}