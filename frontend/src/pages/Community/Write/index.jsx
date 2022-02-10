import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../../../layout';

import Wrapper from './styles';
import Axios from 'axios';

import { CommonContext } from '../../../context/CommonContext';
import { useSelector, useDispatch } from 'react-redux';

import Swal from 'sweetalert2';

import {
  Grid,
  Button,
  FormControl,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputBase,
  Container,
  Box,
} from '@mui/material';

const CommunityWrite = () => {
  let history = useHistory();

  const { serverUrlBase } = useContext(CommonContext);
  const user = useSelector(state => state.Auth.user);

  const [code, setCode] = React.useState('C01');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCategoryChange = e => {
    setCode(e.target.value);
  };

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleTextChange = e => {
    setContent(e.target.value);
  };

  const onClickCommunityWriteHandler = () => {
    if (!user.status) {
      alert('회원정보 오류! 로그인을 확인해주세요');
      history.push('/Community');
      return;
    }

    Axios.post(serverUrlBase + `/community/regi`, {
      community_title: title,
      community_author: user.user_nickName,
      community_content: content,
      community_code: code,
      community_user_id: user.user_id,
    })
      .then(data => {
        if (data.status === 200) {
          Swal.fire({
            icon: 'success',
            title: '글이 성공적으로 등록되었습니다.',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: '에러',
          });
        }
        history.push('/Community');
      })
      .catch(function(error) {
        console.log('community regi error:' + error);

        Swal.fire({
          icon: 'error',
          title: '에러',
        });
      });
  };

  return (
    <Layout>
      <Wrapper>
        <Grid container>
          <h2>커뮤니티 글쓰기</h2>
        </Grid>

        <Grid container className="root-box" direction="column">
          <Grid item className="body-box">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className="category-box"
            >
              <Grid item className="body-header">
                분류
              </Grid>
              <Grid item className="body-content">
                <FormControl>
                  {/* <Select
                    value={category}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value={'C01'}>자유 게시판</MenuItem>
                    <MenuItem value={'C02'}>멘토 게시판</MenuItem>
                  </Select> */}
                  <RadioGroup
                    row
                    value={code}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={handleCategoryChange}
                    defaultValue="C01"
                  >
                    <FormControlLabel
                      value="C01"
                      control={<Radio />}
                      label="자유 게시판"
                    />
                    <FormControlLabel
                      value="C02"
                      control={<Radio />}
                      label="멘토링 게시판"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className="title-box"
            >
              <Grid item className="body-header">
                제목
              </Grid>
              <Grid item className="body-content">
                <InputBase
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="제목을 입력하세요"
                  className="body-content-input"
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className="text-box"
            >
              <Grid item className="body-header">
                내용
              </Grid>
              <div className="body-content-text">
                <Grid item className="body-content">
                  <InputBase
                    value={content}
                    onChange={handleTextChange}
                    placeholder="내용을 입력하세요"
                    multiline={true}
                    className="body-content-input"
                  />
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="column" alignItems="flex-end">
          <Grid item>
            <Button
              className="write-button"
              onClick={onClickCommunityWriteHandler}
            >
              등록
            </Button>
          </Grid>
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default CommunityWrite;
