/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-10 23:35
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-28 23:27
 * @desc       :
 */

import styled from 'styled-components';

export const AppWrapper = styled.div`
  .line {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      flex: 1;
    }

    .right {
      display: flex;
      flex: 2;
      align-items: center;
    }

    .operator {
      /* margin-right: 10px; */
    }

    .value {
      flex: 1;
      margin: 0 5px;
      display: flex;
    }

    .delete {
      cursor: pointer;

      svg {
        padding: 2px;
        border-radius: 6px;
        &:hover {
          background-color: #ededee;
        }
      }
    }
  }

  .add {
    display: inline-block;
    padding: 4px;
    border-radius: 6px;

    &:hover {
      cursor: pointer;
      background-color: #ededee;
    }
  }

  .filterConjunction {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 14px;

    .conjunctionSelect {
      margin: 0 5px;
    }
  }

  .fieldIcon {
    display: flex;
    align-items: center;
    height: 100%;
    img {
      height: 100%;
    }
  }
`;
