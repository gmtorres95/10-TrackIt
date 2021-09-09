import Loader from "react-loader-spinner";

export default function Loading({ height, width }) {
    return (
        <Loader 
            type="ThreeDots"
            color="#FFF"
            height={height}
            width={width}
        />
    );
}