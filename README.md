# Gjallarhorn Corporate Website

株式会社Gjallarhornのコーポレートサイトです。

**URL**: https://gjallarhorn.jp

> **インフラ・DNS・運用情報**（ホスティング、ドメイン設定、SEO等）は [Notion 構成・運用ガイド](https://www.notion.so/3064fafd667380db822dd9f446a44e09) を参照してください。

## 構成

```
gjallarhorn-website/
├── index.html          # トップページ
├── 404.html            # エラーページ
├── robots.txt          # 検索エンジン設定
├── sitemap.xml         # サイトマップ
├── CNAME               # カスタムドメイン設定
├── pages/
│   ├── about.html      # 会社概要
│   ├── services.html   # 事業内容
│   ├── philosophy.html # 経営理念
│   ├── news.html       # お知らせ一覧
│   └── contact.html    # お問い合わせ
├── css/
│   ├── reset.css       # リセットCSS
│   └── style.css       # メインスタイル
├── js/
│   └── main.js         # JavaScript
└── images/
    ├── logo/           # 会社ロゴ（ファビコン兼用）
    └── services/       # 事業内容アイコン
```

## 技術スタック

- HTML5 / CSS3 / JavaScript（フレームワーク不使用）
- Google Fonts（Inter, Noto Sans JP）
- レスポンシブ対応
- GitHub Pages + カスタムドメイン（gjallarhorn.jp）
- HTTPS（GitHub Pages自動SSL証明書）

## 機能

- 固定ヘッダー（スクロール追従）
- モバイルメニュー（ハンバーガー）
- スクロールアニメーション（Intersection Observer）
- 幾何学模様のヒーロー背景（CSS生成）
- クリップボードコピーボタン（メールアドレス・住所）

## お知らせの追加方法

`pages/news.html` の `.news-list` 内に以下を追加:

```html
<div class="news-item">
  <time class="news-item__date" datetime="2026-01-01">2026.01.01</time>
  <p class="news-item__title">お知らせタイトル</p>
</div>
```

トップページ（`index.html`）の News セクションも同様に更新してください。

## お問い合わせ

メールアドレス: info@gjallarhorn.jp

## ライセンス

Copyright 2025 Gjallarhorn Inc.
