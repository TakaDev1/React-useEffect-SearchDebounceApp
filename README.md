# React-useEffect-SearchDebounceApp

Reactの `useEffect` を使って、検索入力のデバウンス処理を実装する練習用アプリです。

## 📌 概要

検索キーワードが入力されるたびにタイマーを開始し、一定時間入力がなければ検索処理を実行します。

入力中に新しい文字が入力された場合は、前のタイマーを `clearTimeout` で解除してから新しいタイマーを開始します。

## 🛠 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS
* useState
* useEffect
* setTimeout
* clearTimeout

## 📂 コンポーネント構成

```text
src/
├── components/
│   ├── HandleDebounce.tsx
│   └── SearchInput.tsx
├── App.tsx
└── main.tsx
```

### HandleDebounce.tsx

デバウンス処理と検索キーワードの状態管理を担当します。

* `useState` で `query` を管理
* `useEffect` でデバウンス処理を実行
* `setTimeout` で一定時間後に検索処理を実行
* `clearTimeout` で古いタイマーを解除
* `SearchInput` に `query` と `setQuery` をPropsとして渡す

### SearchInput.tsx

検索キーワードの入力欄を担当します。

* `query` を入力値として表示
* `setQuery` で入力された文字列を更新
* Tailwind CSSで入力欄を装飾

## 🔄 処理の流れ

```text
ユーザーが入力
      ↓
queryを更新
      ↓
useEffect実行
      ↓
setTimeout開始
      ↓
入力が続いた場合
      ↓
前のタイマーをclearTimeoutで解除
      ↓
新しいタイマーを開始
      ↓
入力が一定時間止まる
      ↓
検索処理を実行
```

## ⏱ デバウンス処理

```tsx
useEffect(() => {
  const id = setTimeout(() => {
    console.log(`検索: ${query}`);
  }, 1000);

  return () => {
    clearTimeout(id);
  };
}, [query]);
```

`query` が変更されるたびに `useEffect` が実行されます。

新しい入力によって `query` が変更されると、前回の `useEffect` のクリーンアップが実行され、以前のタイマーが解除されます。

そのため、ユーザーが入力を止めてから一定時間経過した場合のみ検索処理が実行されます。

## 🎯 学習ポイント

* `useState` による入力値の状態管理
* `useEffect` の依存配列
* `setTimeout` による遅延処理
* `clearTimeout` によるタイマー解除
* `useEffect` のクリーンアップ
* デバウンス処理の仕組み
* Propsによるコンポーネント間のデータ受け渡し
* React.ChangeEventによるイベント型付け

## 🚀 起動方法

```bash
npm install
npm run dev
```

ブラウザでアプリを開き、検索欄に文字を入力してください。

入力を止めて一定時間経過すると、ブラウザのコンソールに検索キーワードが表示されます。
