import styled from "@emotion/styled";

const Header = () => {

    return <Wrapper>
        <img className="header-icon"></img>
        <div className="header-title"></div>
    </Wrapper>
}

const Wrapper = styled.header`
    width: 100%;
    height: 60px;

    // 위에 고정시키고, 스크롤해도 문제없도록 함.
    position: fixed;
    z-index: 100;

    img.header-icon {

    }

    div.header-title {
        font-size: 18px;
        font-weight: 500;

        color: #000000
    }
`

export default Header;