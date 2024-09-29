import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 160px;
`;

export const Inter = styled.div`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Wiscom = styled.div`
  color: #fff;
  text-align: center;
  font-family: 'Playfair Display SC';
  font-size: 105px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Pretendard = styled.div`
  color: #fff;
  text-align: justify;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 55px;
  margin-top: 70px;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  margin-top: 107px;
  margin-bottom: 117px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 9px;
`;

export const MenuText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const MenuLine = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 50px;
`;

export const Inter2 = styled(Inter)`
  font-size: 45px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 14px;
`;

export const Identity = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  margin-bottom: 128px;
`;

export const Poster = styled.img`
  width: 419px;
  height: 603px;
  flex-shrink: 0;
`;

export const Text = styled.div`
  color: #fff;
  text-align: justify;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 55px;
`;

export const Inter3 = styled(Inter)`
  width: 100%;
  text-align: left;
`;

export const Part = styled.div`
  width: 20%;
  text-align: left;
  color: #fff;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PeopleWrap = styled.div`
  width: 100%;
  margin-top: 36px;
`;

export const People = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;
