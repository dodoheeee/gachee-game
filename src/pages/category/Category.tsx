import styled from "styled-components";
import React, { useState, useEffect } from "react";
import * as Images from "assets/image";
import Question from "assets/icon/question_icon.svg";
import Button from "assets/icon/main_button_icon.svg";
import RightArrow from "assets/icon/arrow_right_icon.svg";
import LeftArrow from "assets/icon/arrow_left_icon.svg";
import { useNavigate } from "react-router-dom";
import * as VM from "./CategoryViewModel";

const Category: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {}, []);

    return (
        <CategoryViewLayout>
            <ContentLayout>
                <Header>
                    <Question />
                    <HeaderText> 게임 메뉴얼</HeaderText>
                </Header>

                <Content>
                    <ContentText>원하는 테스트를 선택해주세요.</ContentText>

                    <CoupleLayout>
                        <RightArrow /> <CoupleDiscatIcon src={Images.CoupleDiscat} />
                        <LeftArrow />
                    </CoupleLayout>
                    <MarryLayout>
                        <MarryDiscatIcon src={Images.MarryDiscat} />
                    </MarryLayout>

                    <ButtonIconLayout onClick={() => navigate(`/category`)}>
                        <ButtonText>OK</ButtonText>
                        <Button />
                    </ButtonIconLayout>
                </Content>
            </ContentLayout>
        </CategoryViewLayout>
    );
};

export default Category;

const CategoryViewLayout = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentLayout = styled.div`
    width: 740px;
    height: 100%;
    background: #171a5f;
    padding: 21px 20px;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
`;
const HeaderText = styled.div`
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    margin-left: 8px;
`;

const Content = styled.div`
    width: 100%;
    margin-top: 114px;
    text-align: center;
`;

const ContentText = styled.div`
    color: #fff;
    font-size: 16px;
    font-weight: 700;
`;

const CoupleLayout = styled.div``;

const MarryLayout = styled.div``;

const CoupleDiscatIcon = styled.img`
    width: 126px;
    height: 126px;
`;

const MarryDiscatIcon = styled.img`
    width: 126px;
    height: 126px;
    opacity: 0.3; //선택사항으로 풀리면 0.5로 변경
`;

const ButtonIconLayout = styled.div``;

const ButtonText = styled.div`
    font-size: 16px;
    font-weight: 700;
`;
