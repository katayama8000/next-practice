import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { NextPage } from 'next';
import { useState } from 'react';

const Sample23: NextPage = () => {
  const {
    myConfirm, // 確認ダイアログを起動するための関数
    renderConfirmDialog, // 確認ダイアログ描画関数
  } = useConfirm();

  // 登録ボタンを押すと実行される関数
  const onSubmit = async () => {
    // 確認ダイアログを表示し、
    // ユーザーが「OK」か「キャンセル」を押すまで待機する。
    const bool = await myConfirm();

    // ユーザーが「OK」か「キャンセル」を押すと、以下が実行される。
    if (bool) {
      //   window.alert('ここで登録処理を実行。');
    } else {
      //   window.alert('キャンセルなので何もしない。');
    }
  };

  return (
    <section>
      <h1>登録ページ</h1>
      <p>登録したい方は、登録ボタンを押してください。</p>
      <button onClick={onSubmit}>登録</button>
      {/* 確認ダイアログ */}
      {renderConfirmDialog()}
    </section>
  );
};

export default Sample23;

// このカスタムフックで管理する状態を表す型
type State = {
  // ダイアログの開閉状態
  isOpen: boolean;
  // resolve格納用
  resolve: (bool: boolean) => void;
};

// 状態の初期値
const initialState: State = {
  // ダイアログは閉じている
  isOpen: false,
  // 何もしない関数
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  resolve: () => {},
};

export const useConfirm = () => {
  // 状態を管理
  const [state, setState] = useState<State>(initialState);
  const [opened, { close }] = useDisclosure(false);

  // 確認ダイアログを起動するための関数
  const myConfirm = () => {
    const promise: Promise<boolean> = new Promise((resolve) => {
      // 新しい状態を定義。
      const newState: State = {
        isOpen: true, // ダイアログを開いた状態に。
        resolve,
      };

      // 状態を更新。
      setState(newState);
    });
    return promise;
  };

  // 「OK」ボタン用の関数
  const ok = () => {
    // resolveしてあげる
    state.resolve(true);
    // 状態は初期化。
    setState(initialState);
  };

  // 「キャンセル」ボタン用の関数
  const cancel = () => {
    // resolveしてあげる
    state.resolve(false);
    // 状態は初期化。
    setState(initialState);
  };

  // 確認ダイアログ描画関数
  const renderConfirmDialog = () => {
    return (
      <Modal opened={state.isOpen} onClose={close}>
        <p>登録してよろしいですか？</p>
        <div>
          <button onClick={cancel}>キャンセル</button>
          <button onClick={ok}>OK</button>
        </div>
      </Modal>
    );
  };

  return {
    myConfirm, // 確認ダイアログを起動するための関数
    renderConfirmDialog, // 確認ダイアログ描画関数
  };
};
