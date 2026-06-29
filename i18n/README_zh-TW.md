# 🎬 Awesome Gemini Omni 提示詞大全

![Awesome Gemini Omni Logo](./logo.png)

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Stars](https://img.shields.io/github/stars/AtlasCloudAI/Awesome-Gemini-Omni-API-Prompts?style=flat-square)](https://github.com/AtlasCloudAI/Awesome-Gemini-Omni-API-Prompts/stargazers)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/AtlasCloudAI/Awesome-Gemini-Omni-API-Prompts/pulls)
[![Prompts](https://img.shields.io/badge/prompts-392%2B-blue.svg)](https://github.com/AtlasCloudAI/Awesome-Gemini-Omni-API-Prompts)

收錄 Gemini Omni 官方示例與提示詞指南示例，內嵌 OSS 影片預覽。

這個倉庫整理了 Gemini Omni 的公開影片案例。每條資料都帶影片預覽，並提供本地化提示詞，方便直接複用。

- **目前:** 繁體中文
- **其他語言:** [English](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/README.md) | [简体中文](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_zh.md) | [日本語](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_ja-JP.md) | [한국어](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_ko-KR.md) | [ไทย](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_th-TH.md) | [Tiếng Việt](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_vi-VN.md) | [हिन्दी](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_hi-IN.md) | [Español](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_es-ES.md) | [Español (Latinoamérica)](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_es-419.md) | [Deutsch](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_de-DE.md) | [Français](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_fr-FR.md) | [Italiano](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_it-IT.md) | [Português (Brasil)](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_pt-BR.md) | [Português](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_pt-PT.md) | [Türkçe](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_tr-TR.md)

## 🤔 什么是 Gemini Omni？

Gemini Omni 是 Google 的多模态视频生成模型，支持文生视频、图生视频、参考生视频，并原生音画同步。在 Atlas Cloud 上通过 `google/gemini-omni-flash/*` 调用。下面每条 prompt 的预览都由 Atlas Cloud 实际跑出。

## 📊 統計資料

| 指標 | 數量 |
| --- | ---: |
| 提示詞總數 | 392 |
| 分類數 | 8 |
| 預覽影片數 | 154 |
| 最後更新 | 2026/06/29 |

### 🧩 Supported Models

- 🎬 **Video** — Seedance 2.5 · Seedance 2.0 · Seedance 2.0 Mini · Kling 3 · Sora 2 · Veo 3.1 · HappyHorse 1 · Grok Imagine 1.5 · Wan 2.7
- 🎨 **Image** — Seedream 5.0 Pro · Nano Banana 2/Pro · GPT Image 2 · Flux 2 · Seedream 5
- 🧊 **3D** — Seed3D 2.0 · Hunyuan 3D Pro · Hunyuan 3D Rapid
- 💬 **LLM** — Claude · GPT · DeepSeek · MiniMax · Kimi · GLM · Qwen
- 🔊 **Audio** — Grok TTS
- 📚 **Explore more** — [300+ models »](https://www.atlascloud.ai/models?utm_source=github&utm_campaign=awesome-gemini-omni-prompts)

## ▶ Run any prompt via Atlas Cloud

**Skill (recommended):** Install [atlas-cloud-skills](https://github.com/AtlasCloudAI/atlas-cloud-skills) in Claude Code, Codex, or Gemini CLI, then just ask it to generate any prompt from this collection.

**CLI:** Prefer the terminal? Use [atlascloud-cli](https://github.com/AtlasCloudAI/cli) to run prompts directly.

**[→ Get your free Atlas Cloud API key](https://www.atlascloud.ai/console/api-keys?utm_source=github&utm_campaign=awesome-gemini-omni-prompts)**

## 🏷️ 按分類瀏覽

- [变换与风格化](#category-1)
- [动作与运动](#category-2)
- [镜头与视角](#category-3)
- [文字与序列](#category-4)
- [多输入与参考](#category-5)
- [Atlas 生成案例 T2V](#category-6)
- [Atlas 生成案例 I2V](#category-7)
- [Twitter Community](#category-8)

## 全部提示詞

<a id="category-1"></a>

### 变换与风格化 (10)

### No. 1: 镜子：液态金属涟漪

- **分類:** `变换与风格化`
- **来源:** `DeepMind 官方`
- **作者:** omni_001
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/001_mirror_liquid_metal.webm)

<video src="https://static.atlascloud.ai/prompt/omni/001_mirror_liquid_metal.webm" controls muted playsinline width="720"></video>

#### 描述

触碰镜面后，镜子产生液态金属般的涟漪，手臂也变成反光镜面材质。

#### 提示詞

```text
当人物触碰镜子时，让镜面像液体一样优雅地泛起涟漪，并让人物的手臂变成反光镜面材质
```

### No. 2: 镜子：线稿风格变换

- **分類:** `变换与风格化`
- **来源:** `DeepMind 官方`
- **作者:** omni_002
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/002_mirror_line_art.webm)

<video src="https://static.atlascloud.ai/prompt/omni/002_mirror_line_art.webm" controls muted playsinline width="720"></video>

#### 描述

触碰镜面后，人物变成精细的黑白线稿绘画风格。

#### 提示詞

```text
当人物触碰镜子时，让人物变成一幅细致的黑白线稿绘画
```

### No. 3: 镜子：玩偶变换

- **分類:** `变换与风格化`
- **来源:** `DeepMind 官方`
- **作者:** omni_003
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/003_mirror_puppet.webm)

<video src="https://static.atlascloud.ai/prompt/omni/003_mirror_puppet.webm" controls muted playsinline width="720"></video>

#### 描述

触碰镜面后，人物突然变成带大眼珠和眼镜的可爱毛毡玩偶。

#### 提示詞

```text
当人物触碰镜子时，让人物突然变成一个可爱的毛毡布偶版本，拥有夸张的大眼珠和眼镜
```

### No. 4: 镜子：全息投影变换

- **分類:** `变换与风格化`
- **来源:** `DeepMind 官方`
- **作者:** omni_004
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/004_mirror_holograph.webm)

<video src="https://static.atlascloud.ai/prompt/omni/004_mirror_holograph.webm" controls muted playsinline width="720"></video>

#### 描述

触碰镜面后，人物和房间一起变成复古的单色透明全息空间。

#### 提示詞

```text
当人物触碰镜子时，让人物瞬间变成复古的单色透明 3D 线稿全息影像，并置于一个单色 3D 全息甲板空间中，同时保留房间和环境的结构与细节
```

### No. 5: 镜子：体素世界

- **分類:** `变换与风格化`
- **来源:** `DeepMind 官方`
- **作者:** omni_005
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/005_mirror_voxel_world.webm)

<video src="https://static.atlascloud.ai/prompt/omni/005_mirror_voxel_world.webm" controls muted playsinline width="720"></video>

#### 描述

触碰镜面后，整个环境都转成 3D 体素艺术效果。

#### 提示詞

```text
当人物触碰镜子时，让整个环境都变成 3D 体素艺术
```

### No. 6: 蝴蝶变蜜蜂

- **分類:** `变换与风格化`
- **来源:** `DeepMind 提示词指南`
- **作者:** omni_015
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/015_butterfly_to_bee.webm)

<video src="https://static.atlascloud.ai/prompt/omni/015_butterfly_to_bee.webm" controls muted playsinline width="720"></video>

#### 描述

把蝴蝶变成一只蜜蜂。

#### 提示詞

```text
把蝴蝶变成一只蜜蜂。
```

### No. 7: 蜜蜂变萤火虫

- **分類:** `变换与风格化`
- **来源:** `DeepMind 提示词指南`
- **作者:** omni_016
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/016_bee_to_fireflies.webm)

<video src="https://static.atlascloud.ai/prompt/omni/016_bee_to_fireflies.webm" controls muted playsinline width="720"></video>

#### 描述

把蜜蜂变成一小群萤火虫。

#### 提示詞

```text
把蜜蜂变成一小群萤火虫。
```

### No. 8: 飞船：白色折纸

- **分類:** `变换与风格化`
- **来源:** `DeepMind 提示词指南`
- **作者:** omni_023
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/023_spaceships_white_origami.webm)

<video src="https://static.atlascloud.ai/prompt/omni/023_spaceships_white_origami.webm" controls muted playsinline width="720"></video>

#### 描述

把飞船变成由白色折纸制成的质感。

#### 提示詞

```text
把飞船改成由白色折纸制成。
```

### No. 9: 宇航员变海葵

- **分類:** `变换与风格化`
- **来源:** `DeepMind 提示词指南`
- **作者:** omni_024
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/024_astronaut_sea_anemone.webm)

<video src="https://static.atlascloud.ai/prompt/omni/024_astronaut_sea_anemone.webm" controls muted playsinline width="720"></video>

#### 描述

把宇航员变成海葵。

#### 提示詞

```text
把宇航员变成海葵。
```

### No. 10: 小飞船变黄貂鱼

- **分類:** `变换与风格化`
- **来源:** `DeepMind 提示词指南`
- **作者:** omni_025
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/025_small_ships_to_stingrays.webm)

<video src="https://static.atlascloud.ai/prompt/omni/025_small_ships_to_stingrays.webm" controls muted playsinline width="720"></video>

#### 描述

把小飞船变成黄貂鱼。

#### 提示詞

```text
把小飞船变成黄貂鱼。
```

<a id="category-2"></a>

### 动作与运动 (6)

### No. 11: 手洞超级变焦

- **分類:** `动作与运动`
- **来源:** `DeepMind 官方`
- **作者:** omni_006
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/006_handhole_super_zoom.webm)

<video src="https://static.atlascloud.ai/prompt/omni/006_handhole_super_zoom.webm" controls muted playsinline width="720"></video>

#### 描述

让手掌形状的洞口变成超现实放大镜，对地面进行超级变焦和放大。

#### 提示詞

```text
让这个奇怪的手形洞口看起来像是在超级变焦，并把它所看到的地面以更清晰的质量放大出来。
```

### No. 12: 动物玩具声音互动

- **分類:** `动作与运动`
- **来源:** `DeepMind 官方`
- **作者:** omni_007
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/007_animal_toy_sound.webm)

<video src="https://static.atlascloud.ai/prompt/omni/007_animal_toy_sound.webm" controls muted playsinline width="720"></video>

#### 描述

当手指碰到不同动物玩具时，播放对应动物的叫声。

#### 提示詞

```text
当 <video> 中的手指碰到动物玩具时，播放该动物发出的声音
```

### No. 13: 公寓灯光跟随音乐同步亮起

- **分類:** `动作与运动`
- **来源:** `DeepMind 官方`
- **作者:** omni_008
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/008_apartments_lights_sync.webm)

<video src="https://static.atlascloud.ai/prompt/omni/008_apartments_lights_sync.webm" controls muted playsinline width="720"></video>

#### 描述

让公寓楼的灯光随着音乐节奏逐步亮起。

#### 提示詞

```text
让公寓的灯光随着音乐同步开始亮起。
```

### No. 14: 弹珠连锁反应

- **分類:** `动作与运动`
- **来源:** `DeepMind 官方`
- **作者:** omni_013
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/013_marble_chain_reaction.webm)

<video src="https://static.atlascloud.ai/prompt/omni/013_marble_chain_reaction.webm" controls muted playsinline width="720"></video>

#### 描述

一颗弹珠沿着连锁反应轨道高速滚动，镜头平滑连续。

#### 提示詞

```text
一颗弹珠在连锁反应风格的轨道上快速滚动，连续平滑镜头
```

### No. 15: 建筑灯光提示词指南版本

- **分類:** `动作与运动`
- **来源:** `DeepMind 提示词指南`
- **作者:** omni_017
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/017_prompt_guide_building_lights.webm)

<video src="https://static.atlascloud.ai/prompt/omni/017_prompt_guide_building_lights.webm" controls muted playsinline width="720"></video>

#### 描述

让建筑的灯光随配乐节奏闪动并逐步点亮。

#### 提示詞

```text
让建筑物的灯光随着音乐同步开始亮起。
```

### No. 16: 滑板运动特效

- **分類:** `动作与运动`
- **来源:** `DeepMind 提示词指南`
- **作者:** omni_019
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/019_skateboard_motion_effects.webm)

<video src="https://static.atlascloud.ai/prompt/omni/019_skateboard_motion_effects.webm" controls muted playsinline width="720"></video>

#### 描述

保持画面其它内容不变，仅为滑板加入运动特效拖尾。

#### 提示詞

```text
在保持其它一切都不变的前提下编辑这个视频。给滑板加上从板身发散出来的动态特效。
```

<a id="category-3"></a>

### 镜头与视角 (5)

### No. 17: 小提琴手输入基础镜头

- **分類:** `镜头与视角`
- **来源:** `Google Blog | DeepMind 序列示例`
- **作者:** omni_009
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/009_violinist_input.webm)

<video src="https://static.atlascloud.ai/prompt/omni/009_violinist_input.webm" controls muted playsinline width="720"></video>

#### 描述

一个小提琴手演奏歌曲的基础视频，可作为后续多轮编辑的起点。

#### 提示詞

```text
一段小提琴手演奏歌曲的视频。
```

### No. 18: 小提琴手：迁移到新环境

- **分類:** `镜头与视角`
- **来源:** `DeepMind 官方`
- **作者:** omni_010
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/010_violinist_transport_environment.webm)

<video src="https://static.atlascloud.ai/prompt/omni/010_violinist_transport_environment.webm" controls muted playsinline width="720"></video>

#### 描述

把小提琴手的表演迁移到新的参考图环境中。

#### 提示詞

```text
把这位小提琴手迁移到图片环境中
```

### No. 19: 小提琴手：让小提琴消失

- **分類:** `镜头与视角`
- **来源:** `DeepMind 官方`
- **作者:** omni_011
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/011_violinist_invisible_violin.webm)

<video src="https://static.atlascloud.ai/prompt/omni/011_violinist_invisible_violin.webm" controls muted playsinline width="720"></video>

#### 描述

保留演奏动作，但让小提琴完全消失。

#### 提示詞

```text
让小提琴变得不可见
```

### No. 20: 小提琴手：肩后视角

- **分類:** `镜头与视角`
- **来源:** `DeepMind 官方`
- **作者:** omni_012
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/012_violinist_over_shoulder.webm)

<video src="https://static.atlascloud.ai/prompt/omni/012_violinist_over_shoulder.webm" controls muted playsinline width="720"></video>

#### 描述

把镜头重新设定为小提琴手肩膀后方的视角。

#### 提示詞

```text
把镜头角度改成从小提琴手肩后拍摄。
```

### No. 21: 镜头倾斜：鞋子到中景

- **分類:** `镜头与视角`
- **来源:** `DeepMind 提示词指南`
- **作者:** omni_020
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/020_camera_tilt_boots.webm)

<video src="https://static.atlascloud.ai/prompt/omni/020_camera_tilt_boots.webm" controls muted playsinline width="720"></video>

#### 描述

从鞋子的近景快速上仰到中景，再进一步拉宽镜头。

#### 提示詞

```text
改变镜头角度，从他的鞋子特写开始，快速上仰到中景，然后再拉宽。
```

<a id="category-4"></a>

### 文字与序列 (2)

### No. 22: 字母物品序列

- **分類:** `文字与序列`
- **来源:** `Google Blog | DeepMind 序列示例`
- **作者:** omni_014
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/014_alphabet_items_sequence.webm)

<video src="https://static.atlascloud.ai/prompt/omni/014_alphabet_items_sequence.webm" controls muted playsinline width="720"></video>

#### 描述

用 26 个不寻常的桌面物品依次表现字母表，并配套逐个出现的字卡。

#### 提示詞

```text
视频展示字母表中的物品。每个字母都对应一个放在桌子上的非常规物品（例如 C 是水豚，D 是迪斯科球，L 是熔岩灯）。26 个字母必须全部由 26 个物品表示，并配有对应字母的下三分之一字幕。任意时刻只能出现一个物品和一个字幕。每个字幕都必须像是黑色马克笔写在左下角的一张纸条上。节奏要很快，按 24FPS 计算，每个物品大约 9 帧。最后一帧是一张写着“THE END”的纸条。整个视频配有平静顺滑的音乐。
```

### No. 23: 逐词文字同步

- **分類:** `文字与序列`
- **来源:** `DeepMind 提示词指南`
- **作者:** omni_018
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/018_word_by_word_text_sync.webm)

<video src="https://static.atlascloud.ai/prompt/omni/018_word_by_word_text_sync.webm" controls muted playsinline width="720"></video>

#### 描述

让单词一个接一个出现在屏幕上，并且每个词都有不同动画风格。

#### 提示詞

```text
逐词显示，每次屏幕上只出现一个词：did, you, know, that, this, model, can, do, pretty, good, text!? 每个词都以不同的动画风格出现，节奏要和音乐完美贴合，整体像一支混剪展示片。
```

<a id="category-5"></a>

### 多输入与参考 (2)

### No. 24: 结合音频的鸟群造型

- **分類:** `多输入与参考`
- **来源:** `DeepMind 提示词指南`
- **作者:** omni_021
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/021_birds_shape_with_audio.webm)

<video src="https://static.atlascloud.ai/prompt/omni/021_birds_shape_with_audio.webm" controls muted playsinline width="720"></video>

#### 描述

让鸟群参考图片形成轮廓，并随着音乐移动、飞散。

#### 提示詞

```text
让 <video> 中的鸟群根据 <image> 松散地形成一个不完美的鸟形轮廓。它们随着 <audio> 中的音乐移动，并在飞行过程中逐渐散开
```

### No. 25: 故事板：把我放进这个故事

- **分類:** `多输入与参考`
- **来源:** `DeepMind 提示词指南`
- **作者:** omni_022
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/022_storyboard_show_me.webm)

<video src="https://static.atlascloud.ai/prompt/omni/022_storyboard_show_me.webm" controls muted playsinline width="720"></video>

#### 描述

严格按故事板顺序，把画面转换成一支 10 秒的电影感短片。

#### 提示詞

```text
把我放进这个故事里。严格按照从左上开始的顺序依次遵循整个故事。整支视频时长 10 秒。电影感。
```

<a id="category-6"></a>

### Atlas 生成案例 T2V (33)

### No. 26: Golden Deer

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 026
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/026_generated_01_t2v-01-golden-deer.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/026_generated_01_t2v-01-golden-deer.mp4" controls muted playsinline width="720"></video>

#### 描述

Ultra-realistic macro forest cinematography, shallow depth of field, 4K mood lighting. A weathered porcelain white deer statue stands frozen in a damp mossy forest. A single dro...

#### 提示詞

```text
Ultra-realistic macro forest cinematography, shallow depth of field, 4K mood lighting. A weathered porcelain white deer statue stands frozen in a damp mossy forest. A single drop of glowing golden honey falls into the deer eye. The porcelain cracks outward and transforms into warm living fur and muscle. The deer exhales cold mist, lowers its head, then leaps through the forest, scattering glowing particles. Rich cinematic sound design, restrained camera push-in, emotionally epic.
```

### No. 27: Perfume Ice

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 027
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/027_generated_02_t2v-02-perfume-ice.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/027_generated_02_t2v-02-perfume-ice.mp4" controls muted playsinline width="720"></video>

#### 描述

Luxury commercial cinematography, polished glass reflections, slow motion, 100mm macro lens. A black crystal perfume bottle sits on a frozen lake at blue hour. Hairline fracture...

#### 提示詞

```text
Luxury commercial cinematography, polished glass reflections, slow motion, 100mm macro lens. A black crystal perfume bottle sits on a frozen lake at blue hour. Hairline fractures spread across the ice in sync with a low bass pulse. The bottle rotates elegantly as silver vapor blooms around it. On the final beat, the ice bursts into suspended glittering shards and the logo lockup appears in clean light.
```

### No. 28: Mini Chef Ramen

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 028
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/028_generated_04_t2v-04-mini-chef-ramen.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/028_generated_04_t2v-04-mini-chef-ramen.mp4" controls muted playsinline width="720"></video>

#### 描述

Playful food commercial with cinematic miniature photography. A tiny chef runs along the rim of a steaming ramen bowl, leaps onto springy noodles, and surfs a wave of rich broth...

#### 提示詞

```text
Playful food commercial with cinematic miniature photography. A tiny chef runs along the rim of a steaming ramen bowl, leaps onto springy noodles, and surfs a wave of rich broth toward a glowing soft-boiled egg. Steam rolls through the frame, sesame seeds fall in slow motion, and the final shot lands on a perfect hero angle.
```

### No. 29: Aurora Astronaut

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 029
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/029_generated_05_t2v-05-aurora-astronaut.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/029_generated_05_t2v-05-aurora-astronaut.mp4" controls muted playsinline width="720"></video>

#### 描述

Epic sci-fi landscape, IMAX-style wide shot, crisp atmosphere. An astronaut walks alone across mirror-like salt flats beneath a vivid green aurora. The reflection doubles the sc...

#### 提示詞

```text
Epic sci-fi landscape, IMAX-style wide shot, crisp atmosphere. An astronaut walks alone across mirror-like salt flats beneath a vivid green aurora. The reflection doubles the scene perfectly. The camera begins low behind the boots, then rises into a graceful orbit as the aurora twists into ribbon-like spirals overhead. Finish on a contemplative wide frame.
```

### No. 30: Opera Stage Transformation

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 034
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/034_generated_01_cs_002_opera-stage-transformation.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/034_generated_01_cs_002_opera-stage-transformation.mp4" controls muted playsinline width="720"></video>

#### 描述

Replace the girl in @video1 with a Chinese opera actress (Huadan), set the scene on an exquisite stage, reference the camera movements and transition effects of @video1, use cam...

#### 提示詞

```text
Replace the girl in @video1 with a Chinese opera actress (Huadan), set the scene on an exquisite stage, reference the camera movements and transition effects of @video1, use camera work to match the character's movements, ultimate stage aesthetics, enhance visual impact.
```

### No. 31: One-Take Seamless Transition

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 035
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/035_generated_02_cs_003_one-take-seamless-transition.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/035_generated_02_cs_003_one-take-seamless-transition.mp4" controls muted playsinline width="720"></video>

#### 描述

Reference all transitions and camera movements from @video1, one continuous take. The frame starts with a chess game, camera moves left, showing yellow sand on the floor, camera...

#### 提示詞

```text
Reference all transitions and camera movements from @video1, one continuous take. The frame starts with a chess game, camera moves left, showing yellow sand on the floor, camera moves up to a beach with footprints, a girl in white plain clothes walks away on the beach, camera cuts to aerial overhead view, seawater washing (no people appearing), seamless gradient transition, the washing waves become flowing curtains, camera pulls back, showing close-up of the girl's face, one continuous take.
```

### No. 32: Coffee Morning Campaign

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 036
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/036_generated_03_ne_006_coffee-morning-campaign.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/036_generated_03_ne_006_coffee-morning-campaign.mp4" controls muted playsinline width="720"></video>

#### 描述

Extend @video1 by 15 seconds. 1-5 seconds: Light and shadow slowly slide through the blinds onto the wooden table and cup body, branches sway with slight breathing-like movement...

#### 提示詞

```text
Extend @video1 by 15 seconds. 1-5 seconds: Light and shadow slowly slide through the blinds onto the wooden table and cup body, branches sway with slight breathing-like movement. 6-10 seconds: A coffee bean gently falls from the top of the screen, camera pushes toward the coffee bean until the screen goes black. 11-15 seconds: English text gradually appears first line 'Lucky Coffee', second line 'Breakfast', third line 'AM 7:00-10:00'.
```

### No. 33: Sunflower Skateboard Story

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 037
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/037_generated_04_ne_007_sunflower-skateboard-story.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/037_generated_04_ne_007_sunflower-skateboard-story.mp4" controls muted playsinline width="720"></video>

#### 描述

Extend forward by 10s. In warm afternoon light, camera starts from the row of awnings fluttering in the breeze at the street corner, slowly moves down to a few small daisies pok...

#### 提示詞

```text
Extend forward by 10s. In warm afternoon light, camera starts from the row of awnings fluttering in the breeze at the street corner, slowly moves down to a few small daisies poking out at the base of the wall. Then the protagonist's red skateboard shoes appear in the frame. He is crouching in front of a street flower stand, smiling and gathering a large bunch of sunflowers into his arms, petals brushing against his white T-shirt. As he turns to step on the skateboard, the flower stand owner laughingly shouts 'Watch out for flying petals!' He waves at the owner, then starts skating. A few golden petals have already broken free from the bouquet first, falling onto the skateboard deck.
```

### No. 34: Titanic Dark Twist

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 038
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/038_generated_06_ve_001_titanic-dark-twist.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/038_generated_06_ve_001_titanic-dark-twist.mp4" controls muted playsinline width="720"></video>

#### 描述

Subvert the plot in @video1. The man's eyes instantly change from gentle to cold and ruthless. In the moment when Rose has no defense, he violently pushes the female protagonist...

#### 提示詞

```text
Subvert the plot in @video1. The man's eyes instantly change from gentle to cold and ruthless. In the moment when Rose has no defense, he violently pushes the female protagonist off the bridge, pushing her into the water. The action is decisive and resolute, with long-premeditated determination, without any hesitation, completely subverting the original affectionate character setting. The moment the female protagonist falls into the water, there is no scream, only disbelieving eyes. She looks up and roars at the male protagonist: 'You've been lying to me from the beginning!' The male protagonist stands on the bridge, a cold smile on his face, saying in a low voice to the water: 'This is what you owe my family.'
```

### No. 35: Anime Chess Battle Storyboard

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 039
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/039_generated_08_ms_004_anime-chess-battle-storyboard.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/039_generated_08_ms_004_anime-chess-battle-storyboard.mp4" controls muted playsinline width="720"></video>

#### 描述

8-second intellectual battle-style anime combat segment, fitting revenge theme. 0-3 seconds: Female protagonist in storyboard image 1 turns and sits down, camera turns, female p...

#### 提示詞

```text
8-second intellectual battle-style anime combat segment, fitting revenge theme. 0-3 seconds: Female protagonist in storyboard image 1 turns and sits down, camera turns, female protagonist places a chess piece and says 'You lost', reference storyboard image 2. 3-4 seconds: Quick pan camera, turn to opposite man's face close-up, reference storyboard image 3, man gritting teeth, very dissatisfied with the result. 4-6 seconds: Cut camera, overhead shot, woman places a chess piece, people opposite are amazed, reference storyboard image 4. 6-8 seconds: Camera rapidly pans down, screen goes black for transition, then screen gradually brightens, dimly lit room, woman looks at the moonlight outside the window and quietly says 'We'll see', reference storyboard image 5.
```

### No. 36: 1-Minute Cinematic War Video in 5 Minutes, multi-shot structure

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 040
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/040_generated_09_tw_001_1-minute-cinematic-war-video-in-5-minutes-multi-shot-structu.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/040_generated_09_tw_001_1-minute-cinematic-war-video-in-5-minutes-multi-shot-structu.mp4" controls muted playsinline width="720"></video>

#### 描述

Consistent style guideline for all shots: realistic cinematic war footage in a modern Middle Eastern desert village; dominant sandy yellow and gray-brown palette; harsh noon sun...

#### 提示詞

```text
Consistent style guideline for all shots: realistic cinematic war footage in a modern Middle Eastern desert village; dominant sandy yellow and gray-brown palette; harsh noon sunlight with hard shadows; drifting dust and gunpowder smoke; subtle handheld vibration; low-angle and ground-level framing to maximize tension and realism; modern light infantry gear without visible national identifiers; restrained, tense, and brutal atmosphere. Shot 1 : A modern infantry squad advances through narrow alleys between low adobe houses and damaged concrete walls. The camera tracks from behind at knee level, pushing forward as soldiers hug the walls and aim toward an unseen corner. Wind, distant metal clinks, and suspended dust establish dread. Shot 2 : A sudden close-quarters firefight erupts at the alley corner. Soldiers drop and press against the wall as rounds impact masonry, kicking up debris. Fast lateral camera pan with controlled shake, intermittent muzzle flashes, and silhouettes in broken windows increase claustrophobia and urgency. Shot 3 : The squad regains formation and enters a half-collapsed building. Over-shoulder follow shot into dim interior where shafts of sunlight cut through breached walls. Dust particles float in the beams; hand signals replace speech; distant gunfire echoes. Tone shifts from chaos to hyper-alert silence. Shot 4 : From a damaged rooftop, the squad secures a high vantage point over the village grid. Slow pullback in backlight, soldiers in silhouette with rifles still trained on unknown threats. Dust swirls in warm light; no clear victory or defeat. End on unresolved tension.
```

### No. 37: Aerial Shot of Burning Military Vehicle in Urban Warfare

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 041
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/041_generated_10_tw_003_aerial-shot-of-burning-military-vehicle-in-urban-warfare.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/041_generated_10_tw_003_aerial-shot-of-burning-military-vehicle-in-urban-warfare.mp4" controls muted playsinline width="720"></video>

#### 描述

A cinematic drone sequence over a war-torn city intersection. At the center, a destroyed armored vehicle burns continuously, emitting thick black smoke that climbs into an overc...

#### 提示詞

```text
A cinematic drone sequence over a war-torn city intersection. At the center, a destroyed armored vehicle burns continuously, emitting thick black smoke that climbs into an overcast sky. Streets are littered with rubble, twisted metal, and shattered concrete; nearby buildings show blown-out windows, scorched facades, and structural damage. Start with a high establishing aerial shot, then descend slowly into a medium-high orbit while preserving spatial scale and destruction detail. Keep color grading desaturated with documentary realism, add subtle film grain, and ensure physically believable fire, smoke turbulence, heat distortion, and airborne dust.
```

### No. 38: Quick Test of Female Controlling Plane in Complex Action Scene

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 042
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/042_generated_12_tw_007_quick-test-of-female-controlling-plane-in-complex-action-sce.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/042_generated_12_tw_007_quick-test-of-female-controlling-plane-in-complex-action-sce.mp4" controls muted playsinline width="720"></video>

#### 描述

Create a high-pressure disaster-action sequence: during turbulent flight, a woman rushes toward the cockpit and discovers both pilots are gone. Shot 1: handheld tracking through...

#### 提示詞

```text
Create a high-pressure disaster-action sequence: during turbulent flight, a woman rushes toward the cockpit and discovers both pilots are gone. Shot 1: handheld tracking through a chaotic cabin with panicked passengers, swinging oxygen masks, and flashing emergency lights. Shot 2: cockpit close-up montage of shaking controls, warning indicators, and her focused expression as she takes command. Shot 3: exterior wide shot of the aircraft dipping through heavy clouds before recovery. Shot 4: back inside the cockpit, she stabilizes the plane with determined, precise movements. Keep pace fast, stakes clear, and editing tight.
```

### No. 39: IMAX-Style Desert Sandstorm Scene with Denis Villeneuve Aesthetic

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 043
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/043_generated_13_tw_008_imax-style-desert-sandstorm-scene-with-denis-villeneuve-aest.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/043_generated_13_tw_008_imax-style-desert-sandstorm-scene-with-denis-villeneuve-aest.mp4" controls muted playsinline width="720"></video>

#### 描述

Style: IMAX 70mm, Denis Villeneuve-inspired epic realism, high contrast, low saturation. Multi-shot structure. Extreme wide shot: a colossal sand wall consumes the horizon while...

#### 提示詞

```text
Style: IMAX 70mm, Denis Villeneuve-inspired epic realism, high contrast, low saturation. Multi-shot structure. Extreme wide shot: a colossal sand wall consumes the horizon while an armored convoy races across open desert. Emphasize terrifying scale and human fragility. Cockpit POV: violent vibration inside the lead vehicle, sand blasting the windshield, red warning lights pulsing, urgent shouted commands. Climax in slow motion: lead rover launches off a dune, silhouetted against a dark storm front; lightning flickers inside the dust cloud; debris streaks past lens; hard cut to black on impact. Keep transitions clean and escalation continuous.
```

### No. 40: Multi-Shot Fight Scene Generated with Only 3 Reference Images and Simple Prompt

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 044
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/044_generated_14_tw_009_multi-shot-fight-scene-generated-with-only-3-reference-image.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/044_generated_14_tw_009_multi-shot-fight-scene-generated-with-only-3-reference-image.mp4" controls muted playsinline width="720"></video>

#### 描述

A grounded martial arts duel between two women in a modern urban night setting. Build with clear shot variation: wide shot to establish spacing and intent, medium tracking shots...

#### 提示詞

```text
A grounded martial arts duel between two women in a modern urban night setting. Build with clear shot variation: wide shot to establish spacing and intent, medium tracking shots for exchange tempo, close-up inserts for impact, breathing, and footwork. Include low-angle circling moves, over-shoulder counters, and quick lateral camera motions to preserve directional clarity. Movements must follow realistic weight transfer, momentum, and recovery. Use practical street lighting, neon reflections, slight wet pavement sheen, and gritty cinematic texture.
```

### No. 41: One Punch Man Animation Surpassing Original Quality

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 045
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/045_generated_15_tw_016_one-punch-man-animation-surpassing-original-quality.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/045_generated_15_tw_016_one-punch-man-animation-surpassing-original-quality.mp4" controls muted playsinline width="720"></video>

#### 描述

Produce a premium anime battle sequence inspired by One Punch Man energy and staging. Require fluid high-frame animation, strong speed lines, impact frames, dramatic lens pulls,...

#### 提示詞

```text
Produce a premium anime battle sequence inspired by One Punch Man energy and staging. Require fluid high-frame animation, strong speed lines, impact frames, dramatic lens pulls, and explosive effect timing. Use progression: wide battlefield setup, mid-range combat exchanges, close-up finishing blow, then debris and dust settle. Background destruction should include cracking structures, flying fragments, smoke layers, and shockwave distortion. Character silhouettes remain crisp through motion blur, with strong light-shadow separation and theatrical composition.
```

### No. 42: Otter Entering Giant Mecha Animation Scene with Detailed Mechanical Shots

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 046
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/046_generated_16_tw_021_otter-entering-giant-mecha-animation-scene-with-detailed-mec.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/046_generated_16_tw_021_otter-entering-giant-mecha-animation-scene-with-detailed-mec.mp4" controls muted playsinline width="720"></video>

#### 描述

Mecha anime sequence: an anthropomorphic otter pilot prepares to board a giant combat mech. Shot 1: wide hangar reveal with backlit mech silhouette, steam, and warning beacons. ...

#### 提示詞

```text
Mecha anime sequence: an anthropomorphic otter pilot prepares to board a giant combat mech. Shot 1: wide hangar reveal with backlit mech silhouette, steam, and warning beacons. Shot 2: mechanical montage of gears rotating, hydraulics extending, power lines activating, and cockpit hatch unlocking. Shot 3: otter climbs into the cockpit, with close-ups on focused eyes and control gestures. Shot 4: hatch seals, HUD lights up, mech visor ignites, and otter gives a confident thumbs-up. Emphasize dense mechanical detail, coherent machine motion logic, and cinematic anime pacing.
```

### No. 43: South Indian Cinema Alien Scene Generated from Single Prompt

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 047
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/047_generated_17_tw_022_south-indian-cinema-alien-scene-generated-from-single-prompt.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/047_generated_17_tw_022_south-indian-cinema-alien-scene-generated-from-single-prompt.mp4" controls muted playsinline width="720"></video>

#### 描述

Create a South Indian commercial-cinema style alien invasion action scene. Visuals should feature saturated colors, dramatic backlight, stylized slow motion, and heroic framing....

#### 提示詞

```text
Create a South Indian commercial-cinema style alien invasion action scene. Visuals should feature saturated colors, dramatic backlight, stylized slow motion, and heroic framing. Open with a large-scale city plaza reveal as alien craft descend, then cut to low-angle hero entrance with wind-swept costume details. Move into multi-angle confrontation: wides for scale, mediums for combo choreography, close-ups for emotional intensity and impact peaks. Blend dust, sparks, smoke, and lens flares for high-energy theatrical presentation while keeping motion readable.
```

### No. 44: Ground Combat Shot of Soldiers Traversing Desert Terrain

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 048
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/048_generated_18_tw_024_ground-combat-shot-of-soldiers-traversing-desert-terrain.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/048_generated_18_tw_024_ground-combat-shot-of-soldiers-traversing-desert-terrain.mp4" controls muted playsinline width="720"></video>

#### 描述

Ground-level war footage with documentary realism: a soldier squad advances through a desert combat zone. Keep camera low and close to boots, gear sway, weapon details, and form...

#### 提示詞

```text
Ground-level war footage with documentary realism: a soldier squad advances through a desert combat zone. Keep camera low and close to boots, gear sway, weapon details, and formation changes while moving over loose sand and debris. Harsh sunlight, visible heat haze, suspended dust, and distant intermittent gunfire should shape the atmosphere. Use controlled handheld movement with shallow depth of field, foreground clarity, and slight background softening. Color palette stays sandy beige and muted brown, emphasizing tactical discipline and persistent tension.
```

### No. 45: Hyper-Energetic Japanese Promo Poster

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 049
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/049_generated_19_14269_hyper-energetic-japanese-promo-poster.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/049_generated_19_14269_hyper-energetic-japanese-promo-poster.mp4" controls muted playsinline width="720"></video>

#### 描述

Structured text-to-video prompt example for Hyper-Energetic Japanese Promo Poster.

#### 提示詞

```text
{ "type": "Japanese promotional landing page poster", "style": "hyper-energetic, explosive typography, vibrant colors, amusement park night festival aesthetic", "layout": { "top_section": { "background": "night sky, fireworks, ferris wheel, roller coaster", "subjects": "4 young adults cheering, raising fists, dynamic lighting", "typography": [ "{argument name=\"main headline\" default=\"究極の楽しい!!\"}", "{argument name=\"sub headline\" default=\"やばい!!共感してもらいたい!!\"}", "この一枚が、あなたの人生を最高に塗り替える!!" ], "badges": [ "累計販売枚数 {argument name=\"sales badge\" default=\"252,000\"} 枚突破!!!" ] }, "middle_section": { "title": "究極の楽しい体験を実現する5つの超快楽ポイント", "points_count": 5, "points": [ {"number": 1, "label": "爆笑覚醒", "image": "people laughing"}, {"number": 2, "label": "ドキドキMAX", "image": "roller coaster loop"}, {"number": 3, "label": "感動の渦", "image": "fireworks explosion"}, {"number": 4, "label": "超解放ゾーン", "image": "silhouettes jumping at sunset"}, {"number": 5, "label": "無限リピート", "image": "group of people cheering"} ] }, "bonus_section": { "title": "今だけ！超豪華 5大特典付き!!!", "items_count": 5, "items": [ "① 限定デザインポスター", "② 楽しい名言ブックレット(PDF)", "③ 超楽しいプレイリスト(MP3)", "④ スマホ壁紙セット", "⑤ 楽しいシークレット映像" ] }, "bottom_section": { "product_info": { "name": "究極の楽しいポスター", "variants_count": 3, "variants": ["全力全開ver.", "笑顔爆発ver.", "感動絶頂ver."] }, "pricing": { "label": "魂の価格", "amount": "{argument name=\"price\" default=\"¥2,980\"}", "shipping": "送料無料" } }, "footer": { "text": "{argument name=\"footer call to action\" default=\"人生を最高に楽しみ尽くせ!! さぁ、今すぐ手に入れろ!!\"}", "background_color": "magenta" } } }
```

### No. 46: 逼真的海岸跑车摄影

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 050
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/050_generated_20_14046_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/050_generated_20_14046_case.mp4" controls muted playsinline width="720"></video>

#### 描述

A photorealistic, high-resolution automotive shot of a {argument name="car color" default="bright red"} {argument name="car model" default="Ferrari F8 Tributo"} parked on a {arg...

#### 提示詞

```text
A photorealistic, high-resolution automotive shot of a {argument name="car color" default="bright red"} {argument name="car model" default="Ferrari F8 Tributo"} parked on a {argument name="setting" default="coastal road overlooking the ocean"}. The sports car is positioned at a slight angle, showcasing its sleek aerodynamic curves, aggressive front fascia, distinct LED headlights, and silver alloy wheels with yellow center caps. The iconic yellow shield logo is visible on the front fender. The background features a deep blue sea, a low stone guardrail, and a distant rocky coastline covered in lush green vegetation and scattered buildings under a clear blue sky. The lighting is a {argument name="lighting" default="bright sunny day"}, casting sharp, realistic shadows on the asphalt and creating brilliant reflections on the car's glossy paint.
```

### No. 47: 动漫风狐狸少女求抱抱

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 051
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/051_generated_21_13919_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/051_generated_21_13919_case.mp4" controls muted playsinline width="720"></video>

#### 描述

An anime-style illustration of a cute girl with {argument name="animal ears" default="fluffy dark brown fox ears"} and long flowing {argument name="hair color" default="dark bro...

#### 提示詞

```text
An anime-style illustration of a cute girl with {argument name="animal ears" default="fluffy dark brown fox ears"} and long flowing {argument name="hair color" default="dark brown"} hair. She is wearing a detailed {argument name="clothing" default="red and white floral kimono with fur trim"} and a floral hair accessory with red tassels. She has a {argument name="expression" default="bright happy smile with a slight blush"} and warm amber eyes, reaching both hands forward towards the viewer in a welcoming hug. The perspective features strong foreshortening on her hands, which are slightly out of focus. The scene is set with {argument name="environment" default="falling snow against a bright white background"}, illuminated by soft, warm, ethereal lighting.
```

### No. 48: 优雅酒吧咖啡桌旁的女性

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 052
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/052_generated_22_14569_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/052_generated_22_14569_case.mp4" controls muted playsinline width="720"></video>

#### 描述

A candid, photorealistic vertical photo of a woman seated at a rustic wooden table in an elegant upscale bar-cafe interior. She is centered in the foreground, leaning forward wi...

#### 提示詞

```text
A candid, photorealistic vertical photo of a woman seated at a rustic wooden table in an elegant upscale bar-cafe interior. She is centered in the foreground, leaning forward with one elbow on the table and her hand supporting her chin, giving a relaxed, intimate, editorial lifestyle feel. She has long, dark brown wavy hair parted near the middle, falling over both shoulders, and wears a fitted white ribbed long-sleeve scoop-neck top. On the table in front of her are exactly 3 visible objects: 1 peach-colored cocktail in a wide coupe glass on the left, 1 blue-and-white floral ceramic mug in the center-right, and 1 small clear glass bottle vase holding sparse dried stems on the far right. Behind her is a warmly lit, sophisticated bar with marble or stone finishes, ornate classical ceiling details, shelves of liquor bottles and glassware, glowing backbar lighting, and a bartender in a white shirt and dark apron working in soft focus. Include dark bar stools along the counter and a rich amber, cream, and brown color palette. Use shallow depth of field, soft natural indoor light mixed with warm bar lighting, realistic skin and fabric texture, subtle filmic tones, high-detail luxury hospitality photography, shot at eye level with a smartphone or portrait lens, vertical composition, cozy Parisian cafe meets hotel bar atmosphere.
```

### No. 49: 可爱的四格校园社团漫画

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 053
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/053_generated_23_14677_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/053_generated_23_14677_case.mp4" controls muted playsinline width="720"></video>

#### 描述

Structured text-to-video prompt example for 可爱的四格校园社团漫画.

#### 提示詞

```text
{"type":"4-panel manga comic page","style":"clean modern Japanese school-life anime, soft pastel colors, crisp line art, light cel shading, printed manga layout with white gutters and black panel borders, cute slice-of-life atmosphere","format":"vertical full page","theme":"high school club meeting about what activity to do next, ending with a cheerful compromise","text":{"title_top":"{argument name=\"headline text\" default=\"わたしたちの部活日和 🌸\"}","ending_note":"おしまい"},"characters":[{"id":"girl1","appearance":"short pink bob hair with a small ahoge, school uniform with cream cardigan and red ribbon, expressive and energetic"},{"id":"girl2","appearance":"long straight navy-blue hair, calm demeanor, school uniform"},{"id":"girl3","appearance":"short blonde bob, soft cheerful expression, school uniform with red ribbon"},{"id":"girl4","appearance":"long purple hair in a low ponytail, composed and thoughtful, school uniform with grayish top"}],"layout":{"panels":[{"position":"top","count":1,"setting":"club room table by a window, four girls seated with 4 small colorful mugs on the table","speech_bubbles":["部活ミーティング","お菓子作りはどうですか？","いいですね〜！","次の部活は何をするか決めましょうか"]},{"position":"upper-middle","count":1,"setting":"fantasy thought panel with pink sparkly background and floating desserts above the girls","items":{"count":5,"labels":["chocolate cake slice","round cookies","checker cookies","mont blanc cupcake","strawberry shortcake slice"]},"center_text":"わくわく…","speech_bubbles":["クッキーもいいですね！","ケーキとか作ってみたいですね〜"]},{"position":"lower-middle","count":1,"setting":"mood shifts to a dark blue vertical-line background showing practical concerns","speech_bubbles":["材料費もなかなかかかりそう…","時間もかかりそうですし…","部室にオーブンないですしね…","うーん…","はぁ〜"]},{"position":"bottom","count":1,"setting":"bright warm yellow resolution panel with celebratory flower marks","speech_bubbles":["それがいちばん楽しそうっ!!","じゃあ、みんなでお菓子を買ってお茶会にしましょう！","方向転換もきらら部の得意技です♪"]}],"character_count":4,"drink_count":4,"dessert_count":5,"panel_count":4},"composition":"all four girls appear in every panel, medium group shots, readable Japanese speech bubbles, comedic pacing from suggestion to excitement to hesitation to happy conclusion","quality":"polished manga page suitable for social media sharing or a sample of Japanese text rendering"}
```

### No. 50: 蒙娜丽莎审查版油画

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 054
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/054_generated_24_14596_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/054_generated_24_14596_case.mp4" controls muted playsinline width="720"></video>

#### 描述

A faithful oil-painting parody of the Mona Lisa in the style of a High Renaissance museum masterpiece, waist-up seated portrait with folded hands, dark brown dress, translucent ...

#### 提示詞

```text
A faithful oil-painting parody of the Mona Lisa in the style of a High Renaissance museum masterpiece, waist-up seated portrait with folded hands, dark brown dress, translucent veil, soft golden-brown sfumato lighting, and the classic hazy landscape with winding paths, water, and rocky hills in the background. Replace the entire face area with a single flat rectangular censor block in {argument name="censor color" default="medium brown"}, centered over the head and covering from forehead to chin, with clean hard edges that contrast against the painterly surface. Keep the hair visible around the block, including light brown hair parted at the top and falling over the shoulders. Preserve the aged varnish look, muted earthy palette, subtle craquelure-like texture, and solemn museum-quality composition. Vertical framing, centered subject, realistic proportions, old master brushwork, dramatic but soft shading.
```

### No. 51: 两位女性在复古商店购物

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 055
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/055_generated_25_14012_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/055_generated_25_14012_case.mp4" controls muted playsinline width="720"></video>

#### 描述

A photorealistic candid photograph of two Asian women shopping together inside a densely packed {argument name="store type" default="vintage clothing store"}. The woman on the l...

#### 提示詞

```text
A photorealistic candid photograph of two Asian women shopping together inside a densely packed {argument name="store type" default="vintage clothing store"}. The woman on the left has brown hair tied back and is wearing a {argument name="left woman outfit" default="white ribbed crop top and distressed denim shorts"}, carrying a cream shoulder bag. She is holding up a {argument name="item being examined" default="dark blue satin souvenir jacket with intricate gold embroidery"} on a wooden hanger. The woman on the right has her hair in a messy bun and is wearing a {argument name="right woman outfit" default="white graphic t-shirt tucked into high-waisted blue jeans"}, looking admiringly at the jacket. They are standing in a narrow aisle flanked by overflowing racks of colorful garments, with more clothes hanging from the ceiling. The scene features {argument name="lighting and atmosphere" default="warm, slightly dim ambient lighting with a shallow depth of field blurring the background"}.
```

### No. 52: 日语 AI 编程培训横幅

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 056
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/056_generated_26_14680_ai.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/056_generated_26_14680_ai.mp4" controls muted playsinline width="720"></video>

#### 描述

Create a clean Japanese corporate training banner in a wide horizontal web-header format with a white background and deep navy blue branding. The layout is a single unified prom...

#### 提示詞

```text
Create a clean Japanese corporate training banner in a wide horizontal web-header format with a white background and deep navy blue branding. The layout is a single unified promotional banner for an AI programming course. On the left, place a small headline in bold Japanese text reading "AIを使いこなす開発者へ" above a very large dominant title reading "{argument name="main title" default="ClaudeCode研修"}" in heavy sans-serif dark navy lettering, with "ClaudeCode" especially large and the final Japanese word attached on the right in the same style. Beneath the title, add a long horizontal blue gradient bar from medium blue to very light blue containing white bold Japanese text: "{argument name="subheadline text" default="AI時代の開発を、あなたの武器に。"}". Along the bottom left, arrange exactly 3 circular navy icon badges in a horizontal row, each with a short two-line caption in Japanese to the right of the icon. Badge 1 shows a code symbol </> and the text "Claude Codeの 基本から実践まで". Badge 2 shows a light bulb and the text "業務効率を高める AI活用スキル". Badge 3 shows an upward bar chart and the text "すぐに使える 実践的な内容". On the right half, place a confident Japanese businessman from the waist up with arms crossed, wearing a dark navy suit, white shirt, and blue striped tie, facing forward; his face is intentionally soft-focused or anonymized. Behind him, add layered geometric navy and blue diagonal shapes sweeping in from the top right and bottom right, plus a dark blue tech-themed panel with faint code lines and a glowing curly-braces symbol {}. Use a polished B2B seminar advertisement style, crisp typography, strong negative space, subtle gradients, high contrast, and a professional AI/engineering training atmosphere.
```

### No. 53: 动漫日落电影海报

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 057
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/057_generated_27_14472_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/057_generated_27_14472_case.mp4" controls muted playsinline width="720"></video>

#### 描述

A breathtaking anime movie poster at golden-hour sunset, vertical theatrical one-sheet composition, painted in the polished cinematic style of a Makoto Shinkai-inspired youth dr...

#### 提示詞

```text
A breathtaking anime movie poster at golden-hour sunset, vertical theatrical one-sheet composition, painted in the polished cinematic style of a Makoto Shinkai-inspired youth drama. The scene overlooks a Japanese coastal hillside town descending toward a glowing bay, with the sun low on the horizon and its reflection stretching across calm water. The sky dominates most of the image: a vast deep-blue to lavender twilight gradient filled with countless stars, wispy pink and peach clouds, and one especially bright star near the upper right. In the foreground on the right, a teenage schoolgirl stands in three-quarter side profile facing left toward the sea, shown from mid-thigh up, with shoulder-length dark hair blowing in the breeze, a short-sleeved white sailor-style school blouse, a red ribbon at the collar, and a navy pleated skirt; her expression is contemplative and wistful. Farther down the steep stone stair street in the center-left, a teenage schoolboy stands with his back to the viewer, wearing a short-sleeved white shirt and dark trousers, also looking toward the sunset and ocean. At the lower right, include 1 black cat sitting on a wall or rooftop edge in silhouette, looking toward the town. At the lower left, include 1 old-fashioned streetlamp and a dense cluster of blooming hydrangeas in blue and violet along a stone wall. The town below is packed with tiled rooftops, narrow streets, warm window lights, and layered houses, with distant mountains framing the bay. Use dramatic rim light, luminous atmospheric perspective, sparkling highlights, delicate cloud detail, and emotional, nostalgic color grading in indigo, ultramarine, pink, peach, and gold. Design it explicitly as a Japanese animated film poster with elegant typography integrated into the artwork: large hand-brushed Japanese title text across the upper-left to center reading {argument name="title text" default="星をつなぐ約束のうた"}, smaller English subtitle beneath it reading {argument name="English subtitle" default="The Song of Promises"}, a small award-laurel line in Japanese at the top left, 1 vertical Japanese tagline along the upper-right edge, 4 cast names in Japanese centered near the bottom, a release date at the lower left reading {argument name="release date" default="8.23"} with "ROADSHOW" below, 1 pink Japanese tagline across the lower center, and a website/social handle at the lower right. Ultra-detailed anime key visual, romantic and melancholic, premium feature-film poster finish.
```

### No. 54: 2x2 日式横幅广告网格

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 058
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/058_generated_28_13994_2x2.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/058_generated_28_13994_2x2.mp4" controls muted playsinline width="720"></video>

#### 描述

Structured text-to-video prompt example for 2x2 日式横幅广告网格.

#### 提示詞

```text
{ "type": "2x2 grid of Japanese banner advertisements", "quadrants": [ { "position": "top-left", "theme": "skincare product launch", "visuals": "portrait of a young Japanese woman with glowing skin touching her face, bright white background, 2 sleek silver and white cosmetic bottles", "text_elements": { "main_copy": "{argument name=\"skincare catchphrase\" default=\"透明感、満ちる。\"}", "sub_copy": "肌が変わると、毎日が変わる。", "brand_name": "SUIREN", "badge": "6.1 NEW Debut" } }, { "position": "top-right", "theme": "European summer travel campaign", "visuals": "back view of a woman in a straw hat looking at a scenic European lake town with mountains and a church steeple", "text_elements": { "english_copy": "Find your Journey", "main_copy": "{argument name=\"travel catchphrase\" default=\"心が動く旅へ。\"}", "badge": "yellow circle with '今だけ！最大20%OFF'", "footer": "blue banner with '初夏のヨーロッパキャンペーン'" } }, { "position": "bottom-left", "theme": "traditional Japanese soup stock", "visuals": "close-up of a bowl of white rice topped with bonito flakes and a raw egg yolk, dark soy sauce being poured, 1 brown paper package of dashi", "text_elements": { "main_copy": "{argument name=\"food catchphrase\" default=\"毎日のごはんを、もっと美味しく。\"}", "product_name": "日々のだし", "sub_copy": "素材のうまみを、まるごと。" } }, { "position": "bottom-right", "theme": "investment app", "visuals": "smartphone displaying a financial dashboard with a blue line chart and balance '¥1,485,606'", "text_elements": { "brand_name": "{argument name=\"finance app name\" default=\"MoneyPath\"}", "main_copy": "未来の自分のために、{argument name=\"finance catchphrase\" default=\"今はじめる資産形成\"}", "badge": "blue circle with '1,000円分のポイントプレゼント！'", "footer": "blue banner with 4 icons and feature text" } } ] }
```

### No. 55: 长条伸展虎斑猫

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 059
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/059_generated_29_14517_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/059_generated_29_14517_case.mp4" controls muted playsinline width="720"></video>

#### 描述

A whimsical minimalist illustration of a {argument name="cat breed" default="brown tabby kitten"} standing upright in the exact center of a very tall vertical canvas, with an ab...

#### 提示詞

```text
A whimsical minimalist illustration of a {argument name="cat breed" default="brown tabby kitten"} standing upright in the exact center of a very tall vertical canvas, with an absurdly elongated, noodle-like body stretched from near the top to near the bottom of the image. The cat has a small round face with large glossy eyes, a tiny open smiling mouth, upright ears, and both front paws raised straight overhead in a cheering pose, showing 2 visible pink paw pads. Its fur is soft and detailed, with a white muzzle, chest, belly, and inner legs, and brown-and-black tabby stripes along the sides, head, arms, and tail. The body is extremely thin and vertically extended, creating a comical exaggerated proportion, while the hind paws remain tiny and close together at the bottom. Add 1 curved striped tail extending to the lower right side. Above the head, place the playful hand-drawn text "{argument name="caption text" default="nyoooon~"}" in a rounded dark brown font, arched like a semicircle, with 6 short motion lines around the raised paws and text to emphasize stretching. Use a clean off-white or warm light beige background with no scenery, only a faint soft oval shadow beneath the feet. Cute, polished digital illustration style, centered composition, high detail in fur, humorous Japanese sticker or social-media mascot vibe, lots of negative space, extra-tall aspect ratio.
```

### No. 56: 照片级写实躺姿肖像

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 060
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/060_generated_30_13448_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/060_generated_30_13448_case.mp4" controls muted playsinline width="720"></video>

#### 描述

A highly detailed, photorealistic portrait of a {argument name="subject description" default="beautiful young Asian woman"} reclining gracefully on a {argument name="furniture" ...

#### 提示詞

```text
A highly detailed, photorealistic portrait of a {argument name="subject description" default="beautiful young Asian woman"} reclining gracefully on a {argument name="furniture" default="white modern sofa"}. She is wearing a {argument name="clothing" default="short white silk slip dress"} with thin straps, her {argument name="hair style" default="long wavy dark brown hair"} cascading softly over a white pillow. Her pose is relaxed and intimate, with one arm raised elegantly above her head and the other hand resting gently on her stomach, as she gazes directly at the camera with a soft, alluring expression. The scene is illuminated by {argument name="lighting style" default="soft natural sunlight streaming through a window"}, casting gentle, diffused shadows across her flawless skin and the pristine white upholstery. The aesthetic is bright, minimalist, and ethereal, captured with an 85mm lens for a cinematic, shallow depth of field and soft, glowing highlights.
```

### No. 57: Landscape Transition Music Video

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 082
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/082_generated_02_ms_003_landscape-transition-music-video.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/082_generated_02_ms_003_landscape-transition-music-video.mp4" controls muted playsinline width="720"></video>

#### 描述

@image1 @image2 @image3 @image4 @image5 @image6 landscape scene images, reference the screen rhythm, transition visual style and music rhythm of @video for beat synchronization.

#### 提示詞

```text
@image1 @image2 @image3 @image4 @image5 @image6 landscape scene images, reference the screen rhythm, transition visual style and music rhythm of @video for beat synchronization.
```

### No. 58: Parkour Chase Sequence

- **分類:** `Atlas 生成案例 T2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 083
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/083_generated_03_ot_001_parkour-chase-sequence.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/083_generated_03_ot_001_parkour-chase-sequence.mp4" controls muted playsinline width="720"></video>

#### 描述

@image1 @image2 @image3 @image4 @image5, one continuous take tracking shot, following the runner from the street up stairs, through corridors, entering rooftop, finally overlook...

#### 提示詞

```text
@image1 @image2 @image3 @image4 @image5, one continuous take tracking shot, following the runner from the street up stairs, through corridors, entering rooftop, finally overlooking the city.
```

<a id="category-7"></a>

### Atlas 生成案例 I2V (44)

### No. 59: Storyboard Cinematic

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 030
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/030_generated_01_i2v-01-storyboard-cinematic.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/030_generated_01_i2v-01-storyboard-cinematic.mp4" controls muted playsinline width="720"></video>

#### 描述

Show me in this story. Follow the story exactly in order starting top left. Entire story in 10 seconds. Cinematic.

#### 提示詞

```text
Show me in this story. Follow the story exactly in order starting top left. Entire story in 10 seconds. Cinematic.
```

### No. 60: Burger Assembly

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 031
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/031_generated_02_i2v-02-burger-assembly.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/031_generated_02_i2v-02-burger-assembly.mp4" controls muted playsinline width="720"></video>

#### 描述

Premium food ad with kinetic camera motion. Use the ingredient reference to build a gourmet burger in mid-air. Lettuce, tomato, onion, cheese, patty, and bun pieces levitate one...

#### 提示詞

```text
Premium food ad with kinetic camera motion. Use the ingredient reference to build a gourmet burger in mid-air. Lettuce, tomato, onion, cheese, patty, and bun pieces levitate one by one, rotate elegantly, then snap together into a perfect hero burger with floating crumbs and dramatic studio lighting.
```

### No. 61: Paper Typography

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 032
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/032_generated_03_i2v-03-paper-typography.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/032_generated_03_i2v-03-paper-typography.mp4" controls muted playsinline width="720"></video>

#### 描述

Motion graphics animation driven by the reference composition. Turn the reference text artwork into a handcrafted paper-cut title sequence. Letters pop in rhythmically, cast rea...

#### 提示詞

```text
Motion graphics animation driven by the reference composition. Turn the reference text artwork into a handcrafted paper-cut title sequence. Letters pop in rhythmically, cast realistic shadows, and slide across the screen with elegant camera parallax.
```

### No. 62: Logo Reveal

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 033
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/033_generated_05_i2v-05-logo-reveal.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/033_generated_05_i2v-05-logo-reveal.mp4" controls muted playsinline width="720"></video>

#### 描述

High-end product reveal animation. Use the reference logo as the core subject. The logo extrudes into glossy chrome, rotates slowly in a dark studio, then emits thin volumetric ...

#### 提示詞

```text
High-end product reveal animation. Use the reference logo as the core subject. The logo extrudes into glossy chrome, rotates slowly in a dark studio, then emits thin volumetric light beams while the camera pushes in for a polished technology brand reveal.
```

### No. 63: Elegant Laundry Scene

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 061
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/061_generated_01_ur_001_elegant-laundry-scene.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/061_generated_01_ur_001_elegant-laundry-scene.mp4" controls muted playsinline width="720"></video>

#### 描述

Fixed camera shot, a girl elegantly hanging clothes to dry, after finishing she takes out another piece from the basket and shakes the clothes vigorously.

#### 提示詞

```text
Fixed camera shot, a girl elegantly hanging clothes to dry, after finishing she takes out another piece from the basket and shakes the clothes vigorously.
```

### No. 64: Interactive Painting Character

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 062
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/062_generated_02_ur_002_interactive-painting-character.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/062_generated_02_ur_002_interactive-painting-character.mp4" controls muted playsinline width="720"></video>

#### 描述

The character in the painting has a guilty expression, eyes looking left and right, then peeks out of the frame, quickly extends their hand out of the frame to grab a cola and t...

#### 提示詞

```text
The character in the painting has a guilty expression, eyes looking left and right, then peeks out of the frame, quickly extends their hand out of the frame to grab a cola and takes a sip, then shows a satisfied expression. At this moment, footsteps are heard, and the character in the painting quickly puts the cola back in place. Then a Western cowboy picks up the cola from the cup and walks away. Finally, the camera pushes forward and the screen gradually becomes pure black background with only top lighting illuminating the canned cola. At the bottom of the screen, artistic subtitles and voiceover appear: 'Yikou Cola, a must-try!'
```

### No. 65: Victorian Street Scene

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 063
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/063_generated_03_ur_003_victorian-street-scene.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/063_generated_03_ur_003_victorian-street-scene.mp4" controls muted playsinline width="720"></video>

#### 描述

Camera slightly pulls back (revealing the full street view) and follows the female protagonist moving. The wind blows the hem of her dress as she walks on the streets of 19th ce...

#### 提示詞

```text
Camera slightly pulls back (revealing the full street view) and follows the female protagonist moving. The wind blows the hem of her dress as she walks on the streets of 19th century London. As she walks, a steam car drives by from the right side of the street, passing quickly by her side. The wind lifts the hem of her dress, and she looks shocked and quickly uses both hands to hold down her skirt. Background sound effects include footsteps, crowd sounds, car sounds, etc.
```

### No. 66: Magnetic Bow Product Showcase

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 064
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/064_generated_06_cs_004_magnetic-bow-product-showcase.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/064_generated_06_cs_004_magnetic-bow-product-showcase.mp4" controls muted playsinline width="720"></video>

#### 描述

0-2 seconds: Quick four-panel flash cut, red, pink, purple, leopard print four butterfly bows freeze in sequence, close-up of satin luster and 'chéri' brand lettering. Voiceover...

#### 提示詞

```text
0-2 seconds: Quick four-panel flash cut, red, pink, purple, leopard print four butterfly bows freeze in sequence, close-up of satin luster and 'chéri' brand lettering. Voiceover 'Chéri 자석 리본으로 무궁무진한 아름다움을 연출해 보세요!' 3-6 seconds: Close-up of silver magnetic clasp 'click' snapping together, then gently pulling apart, showing silky texture and convenience. Voiceover '단 1초 만에 잠그고, 최고의 스타일을 완성하세요!' 7-12 seconds: Quick scene switching: burgundy style pinned on coat collar, commuter vibe maxed out; pink style tied in ponytail, sweet girl going out; purple style tied on bag strap, niche and sophisticated; leopard print style hung on suit collar, spicy girl aura fully open. Voiceover '코트, 가방, 헤어 액세서리까지, 다재다능하고 개성 넘치는 스타일을 완성하세요!' 13-15 seconds: Four butterfly bows displayed side by side, brand name 'chéri, 당신에게 즉각적인 아름다움을 선사합니다!'
```

### No. 67: Horror First-Person Exploration

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 065
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/065_generated_08_cs_006_horror-first-person-exploration.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/065_generated_08_cs_006_horror-first-person-exploration.mp4" controls muted playsinline width="720"></video>

#### 描述

Use @image1 as the first frame of the screen, first-person perspective, reference the camera movement effect of @video1, upper scene references @image2, left scene references @i...

#### 提示詞

```text
Use @image1 as the first frame of the screen, first-person perspective, reference the camera movement effect of @video1, upper scene references @image2, left scene references @image3, right scene references @image4.
```

### No. 68: Martial Arts Combat Scene

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 066
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/066_generated_13_ac_005_martial-arts-combat-scene.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/066_generated_13_ac_005_martial-arts-combat-scene.mp4" controls muted playsinline width="720"></video>

#### 描述

Reference @image1 @image2 long spear character, @image3 @image4 dual sword character, imitate the movements of @video1, fighting in the maple forest of @image5.

#### 提示詞

```text
Reference @image1 @image2 long spear character, @image3 @image4 dual sword character, imitate the movements of @video1, fighting in the maple forest of @image5.
```

### No. 69: Car Commercial Cinematography

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 067
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/067_generated_15_ac_007_car-commercial-cinematography.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/067_generated_15_ac_007_car-commercial-cinematography.mp4" controls muted playsinline width="720"></video>

#### 描述

Reference the camera movements and scene transition rhythm of video 1, replicate using the red supercar from image 1.

#### 提示詞

```text
Reference the camera movements and scene transition rhythm of video 1, replicate using the red supercar from image 1.
```

### No. 70: Abstract Instant Noodles

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 068
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/068_generated_23_ce_008_abstract-instant-noodles.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/068_generated_23_ce_008_abstract-instant-noodles.mp4" controls muted playsinline width="720"></video>

#### 描述

The character from @image1 references the movements and facial expression changes in @video1, displaying abstract behavior of eating instant noodles.

#### 提示詞

```text
The character from @image1 references the movements and facial expression changes in @video1, displaying abstract behavior of eating instant noodles.
```

### No. 71: Childhood Seasons Documentary

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 069
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/069_generated_25_ne_002_childhood-seasons-documentary.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/069_generated_25_ne_002_childhood-seasons-documentary.mp4" controls muted playsinline width="720"></video>

#### 描述

Reference the storyboard script of the documentary from @image1, reference the shot divisions, shot types, camera movements, visuals and copy from @image1, create a 15-second he...

#### 提示詞

```text
Reference the storyboard script of the documentary from @image1, reference the shot divisions, shot types, camera movements, visuals and copy from @image1, create a 15-second healing opening about 'Childhood Four Seasons'.
```

### No. 72: Donkey Motorcycle Stunt Ad

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 070
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/070_generated_27_ne_004_donkey-motorcycle-stunt-ad.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/070_generated_27_ne_004_donkey-motorcycle-stunt-ad.mp4" controls muted playsinline width="720"></video>

#### 描述

Extend 15s video, reference the donkey riding motorcycle image from @image1 and @image2, supplement a creative advertisement. Scene 1: Side fixed camera, donkey rides motorcycle...

#### 提示詞

```text
Extend 15s video, reference the donkey riding motorcycle image from @image1 and @image2, supplement a creative advertisement. Scene 1: Side fixed camera, donkey rides motorcycle rushing out of the barn, chickens beside are startled. Scene 2: Donkey rides motorcycle circling in sandy ground, first close-up of motorcycle tire, then cut to mid-air overhead shot of donkey riding motorcycle doing circling stunts, raising smoke. Scene 3: Background is snowy mountain shot, donkey rides the bike leaping from the hillside, advertising slogan appears behind the subject, through masking form (when donkey and motorcycle fly past) 'Inspire Creativity, Enrich Life' appears in the middle, finally as the motorcycle flies past, raising a cloud of dust.
```

### No. 73: Office Building Documentary

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 071
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/071_generated_29_av_002_office-building-documentary.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/071_generated_29_av_002_office-building-documentary.mp4" controls muted playsinline width="720"></video>

#### 描述

Based on the provided office building promotional photos, generate a 15-second cinematic realistic style real estate documentary, using 2.35:1 widescreen, 24fps, delicate visual...

#### 提示詞

```text
Based on the provided office building promotional photos, generate a 15-second cinematic realistic style real estate documentary, using 2.35:1 widescreen, 24fps, delicate visual style. The narrator's voice tone references @video1, filming 'Office Building Ecology', presenting the operations of different enterprises in the building, combined with narration explaining how the office building becomes a vibrant commercial ecosystem.
```

### No. 74: 迦梨女神神话写实主义视频提示词，适用于 Seedance 2.0

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 072
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/072_generated_05_1128_seedance-2-0.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/072_generated_05_1128_seedance-2-0.mp4" controls muted playsinline width="720"></video>

#### 描述

夜晚，雾气弥漫的印度街道。 一位身着深红色纱丽的神秘女子平静地走着。 她的影子缓缓显露出两侧的多条手臂。 她的双眼发出微弱的光芒。 她经过时，狗和动物都俯首致敬。 一道闪电揭示了她正是伪装的迦梨女神。 极致电影化的神话现实主义，神秘的氛围。

#### 提示詞

```text
夜晚，雾气弥漫的印度街道。 一位身着深红色纱丽的神秘女子平静地走着。 她的影子缓缓显露出两侧的多条手臂。 她的双眼发出微弱的光芒。 她经过时，狗和动物都俯首致敬。 一道闪电揭示了她正是伪装的迦梨女神。 极致电影化的神话现实主义，神秘的氛围。
```

### No. 75: 高速魔法森林之旅

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 073
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/073_generated_08_1143_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/073_generated_08_1143_case.mp4" controls muted playsinline width="720"></video>

#### 描述

高速魔法森林之旅的高质量动态 3D 动画。一群身着华丽奇幻服装的骑手，骑乘着发光的魔法生物，包括一只发光的幽灵狼、一头闪烁的水晶雄鹿、一只巨大的幻影猫头鹰和一只幽灵豹。他们正在一个充满巨大发光水晶的迷人森林中飞驰。场景中弥漫着体积雾，光线戏剧化，魔法粒子轨迹缭绕。快速动态的摄像机运动营造出强烈的向前冲刺感。无缝视频过渡，15 秒的快节奏，以及动态的视觉序列。

#### 提示詞

```text
高速魔法森林之旅的高质量动态 3D 动画。一群身着华丽奇幻服装的骑手，骑乘着发光的魔法生物，包括一只发光的幽灵狼、一头闪烁的水晶雄鹿、一只巨大的幻影猫头鹰和一只幽灵豹。他们正在一个充满巨大发光水晶的迷人森林中飞驰。场景中弥漫着体积雾，光线戏剧化，魔法粒子轨迹缭绕。快速动态的摄像机运动营造出强烈的向前冲刺感。无缝视频过渡，15 秒的快节奏，以及动态的视觉序列。
```

### No. 76: 总监级运镜提示词

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 074
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/074_generated_11_121_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/074_generated_11_121_case.mp4" controls muted playsinline width="720"></video>

#### 描述

@Image1@Image2@Image3，一个连续的跟踪镜头，跟随一名跑者从街道跑上楼梯，穿过走廊，进入屋顶，最终俯瞰整个城市。

#### 提示詞

```text
@Image1@Image2@Image3，一个连续的跟踪镜头，跟随一名跑者从街道跑上楼梯，穿过走廊，进入屋顶，最终俯瞰整个城市。
```

### No. 77: 电影级拉力赛车场景

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 075
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/075_generated_12_123_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/075_generated_12_123_case.mp4" controls muted playsinline width="720"></video>

#### 描述

一场电影般的赛车场景。在 2000 年代初的欧洲，下着雪，电影般的动作，一辆老式拉力赛车。

#### 提示詞

```text
一场电影般的赛车场景。在 2000 年代初的欧洲，下着雪，电影般的动作，一辆老式拉力赛车。
```

### No. 78: 邵氏风格打斗场面

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 076
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/076_generated_14_1328_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/076_generated_14_1328_case.mp4" controls muted playsinline width="720"></video>

#### 描述

创作一场两人之间的打斗场景，力求呈现邵氏电影的风格。动作应流畅而激烈，同时保持角色的一致性。

#### 提示詞

```text
创作一场两人之间的打斗场景，力求呈现邵氏电影的风格。动作应流畅而激烈，同时保持角色的一致性。
```

### No. 79: 阿努比斯挠痒痒场景

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 077
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/077_generated_15_1329_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/077_generated_15_1329_case.mp4" controls muted playsinline width="720"></video>

#### 描述

在一个采用现代中国 3D 动画风格的场景中，强大的胡狼神阿努比斯 (Anubis) 坐在宝座上，双手抱头。一个人走向他。阿努比斯 (Anubis) 用一种随意而又无聊的语气告诉那个人，他需要让他发笑。那个人咧嘴一笑，伸手去挠阿努比斯 (Anubis) 的腋窝，这让阿努比斯 (Anubis) 看起来很困惑。镜头拉近，特写那个人在阿努比斯 (Anubis)...

#### 提示詞

```text
在一个采用现代中国 3D 动画风格的场景中，强大的胡狼神阿努比斯 (Anubis) 坐在宝座上，双手抱头。一个人走向他。阿努比斯 (Anubis) 用一种随意而又无聊的语气告诉那个人，他需要让他发笑。那个人咧嘴一笑，伸手去挠阿努比斯 (Anubis) 的腋窝，这让阿努比斯 (Anubis) 看起来很困惑。镜头拉近，特写那个人在阿努比斯 (Anubis) 腋窝里摆动的手指。阿努比斯 (Anubis) 立刻咧嘴一笑，闭上眼睛，发出一声低沉、压抑的笑声，因为他怕痒。那个人继续挠阿努比斯 (Anubis) 的腋窝，阿努比斯 (Anubis) 闭着眼睛不停地咯咯笑，然后抱住自己以保护腋窝。笑了好几声后，阿努比斯 (Anubis) 告诉那个人他做得很好，可以离开了。
```

### No. 80: Turbulent Sea Galleon 电影级提示词

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 078
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/078_generated_16_1336_turbulent-sea-galleon.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/078_generated_16_1336_turbulent-sea-galleon.mp4" controls muted playsinline width="720"></video>

#### 描述

一轮新月发出苍白的光芒，下方是波涛汹涌的翡翠色大海。一艘雄伟的 18 世纪大帆船乘风破浪，风帆鼓动。镜头像猎鹰一样从暴风云中俯冲而下，掠过波涛汹涌的海面。船只华丽的船尾变得巨大，精美的彩色玻璃窗框住了船长室。随着船只剧烈摇晃，镜头无缝地穿过一块玻璃，进入一个出奇地平静、烛光摇曳的船舱。一只色彩斑斓的金刚鹦鹉安静地睡在一个悬挂的黄铜栖木上，未受风暴的打扰...

#### 提示詞

```text
一轮新月发出苍白的光芒，下方是波涛汹涌的翡翠色大海。一艘雄伟的 18 世纪大帆船乘风破浪，风帆鼓动。镜头像猎鹰一样从暴风云中俯冲而下，掠过波涛汹涌的海面。船只华丽的船尾变得巨大，精美的彩色玻璃窗框住了船长室。随着船只剧烈摇晃，镜头无缝地穿过一块玻璃，进入一个出奇地平静、烛光摇曳的船舱。一只色彩斑斓的金刚鹦鹉安静地睡在一个悬挂的黄铜栖木上，未受风暴的打扰。镜头滑过这只鸟，然后无缝地穿过一个侧舷窗离开。它高高地掠过夜空，巨大的船只在水面上缩小成一个玩具。海浪拍打的声音逐渐消失，归于寂静。
```

### No. 81: 赛博朋克电影：夜间追逐与武士刀格斗

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 079
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/079_generated_17_134_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/079_generated_17_134_case.mp4" controls muted playsinline width="720"></video>

#### 描述

她施展着最令人惊叹的功夫。她用马其顿口音大喊：“这是 See dance 2.0，只用第一帧。”赛博朋克东京雨夜的电影式追逐：一辆哑光黑色的 Nissan GT-R Nismo 以 200 公里/小时的速度在湿漉漉的霓虹街道上疾驰，轮胎溅起水花，车头灯划破瓢泼大雨。Cherry Blackcloud（20 岁，马其顿人特征，乌黑的高马尾辫甩动，齐刘海，...

#### 提示詞

```text
她施展着最令人惊叹的功夫。她用马其顿口音大喊：“这是 See dance 2.0，只用第一帧。”赛博朋克东京雨夜的电影式追逐：一辆哑光黑色的 Nissan GT-R Nismo 以 200 公里/小时的速度在湿漉漉的霓虹街道上疾驰，轮胎溅起水花，车头灯划破瓢泼大雨。Cherry Blackcloud（20 岁，马其顿人特征，乌黑的高马尾辫甩动，齐刘海，赛博格冰蓝色右眼发光）驾驶风格激进——黑色 McQueen 皮夹克完全拉链，直接穿在裸露的皮肤上，短款黑色皮裙，银色拉链清晰可见，双腿裸露，脚踩厚重的黑色厚底靴，放在踏板上，武士刀绑在乘客座位上。镜头开始是 GT-R 旁边的广角跟踪镜头，然后快速推入，穿过雨水模糊的挡风玻璃，特写 Cherry 专注的脸（左眼深棕色燃烧，右眼发出青色光芒）。她瞥了一眼后视镜——追击的无人机带着红色激光逼近。Cherry（浓重的马其顿口音，低沉而威严，盖过引擎轰鸣声）：“他们以为能把我困住。”她猛地降档，GT-R 车尾甩动，然后完美地完成 180 度漂移——轮胎尖叫，水花四溅。武士刀刀柄在青色仪表盘的微光中闪烁。她伸手过去，在漂移中抓住武士刀，侧滑时打开驾驶员车门，探出身子进入雨中，划出一道精确的弧线——武士刀刀刃发出青色光芒，在火花和熔融金属的飞溅中将领头无人机一分为二。Cherry（嘲讽地笑，声音穿透风雨）：“今天不行。”她猛地关上车门，踩下油门——GT-R 疾驰向前，霓虹灯的倒影在湿漉漉的黑色车漆上划过。镜头快速拉回广角：汽车消失在雨夜中，无人机在身后爆炸成橙色火球。最后一帧：Cherry 的赛博眼闪烁了一下，她消失在拐角处。渐隐至黑。Seedance 2.0 的风格与技术说明：电影级写实好莱坞动作大片风格，ARRI Alexa 电影级画面，青橙色调，逼真的大雨，雨滴和黑色汽车及皮革上的湿润反光，高动态范围，60fps，霓虹灯和爆炸产生的戏剧性变形镜头光晕，细微的胶片颗粒，无伪影，激烈的实景特技编排，动态摄影（跟踪、推入、180 度漂移展示、快速拉回）。
```

### No. 82: 星际巡洋舰追逐与零重力内部场景

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 080
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/080_generated_18_1342_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/080_generated_18_1342_case.mp4" controls muted playsinline width="720"></video>

#### 描述

一片充满活力的星际全景，由旋转的紫色星云构成画框。一艘流线型的银色星际巡洋舰在宇宙虚空中悄无声息地航行。镜头以光速向前冲刺，迅速超越了飞船。巡洋舰发光的几何结构变得巨大，一扇全景观测窗映入眼帘。镜头与飞船的惊人速度同步，无缝穿过透明铝材。在宁静的零重力休息室里，一个小孩在半空中漂浮，在环境星光下用数字平板电脑轻轻描绘着。镜头飘过小孩，穿过对面的观景窗。...

#### 提示詞

```text
一片充满活力的星际全景，由旋转的紫色星云构成画框。一艘流线型的银色星际巡洋舰在宇宙虚空中悄无声息地航行。镜头以光速向前冲刺，迅速超越了飞船。巡洋舰发光的几何结构变得巨大，一扇全景观测窗映入眼帘。镜头与飞船的惊人速度同步，无缝穿过透明铝材。在宁静的零重力休息室里，一个小孩在半空中漂浮，在环境星光下用数字平板电脑轻轻描绘着。镜头飘过小孩，穿过对面的观景窗。它向上掠过，展现出飞船在群星映衬下逐渐缩小的宏伟规模。一声深沉的次低音嗡鸣声逐渐消失，归于寂静。
```

### No. 83: 多角色机舱对话场景

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 081
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/081_generated_19_138_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/081_generated_19_138_case.mp4" controls muted playsinline width="720"></video>

#### 描述

【@Image 1】中的数字代表行号。这些数字仅供参考，应在视频中删除。所有参考内容必须 100% 保留其艺术风格和角色特征。 不同艺术风格的角色走进来，各自就座。 【@Image 2】坐在第 1 排的左边座位上，她高兴地说：“我的座位是 1A。” 【@Image 3】坐在第 2 排的右边座位上，她用日语伤心地说：“我的座位是 2C。” 【@Image...

#### 提示詞

```text
【@Image 1】中的数字代表行号。这些数字仅供参考，应在视频中删除。所有参考内容必须 100% 保留其艺术风格和角色特征。 不同艺术风格的角色走进来，各自就座。 【@Image 2】坐在第 1 排的左边座位上，她高兴地说：“我的座位是 1A。” 【@Image 3】坐在第 2 排的右边座位上，她用日语伤心地说：“我的座位是 2C。” 【@Image 4】坐在第 3 排的右边座位上，她用普通话害怕地说：“我的座位是 3B。” 【@Image 5】坐在第 4 排的左边座位上，她用西班牙语生气地说：“我的座位是 4D。” 【@Image 6】坐在第 5 排的左边座位上，她用粤语厌恶地说：“我的座位是 5A。” 【@Image 7】坐在第 6 排的右边座位上，她用韩语疯狂地喊道：“我的座位是 6D。” 固定机位。一个连续镜头，角色们依次走进来并入座。
```

### No. 84: 高端商业广告：AURORA FIZZ

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 084
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/084_generated_01_1386_aurora-fizz.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/084_generated_01_1386_aurora-fizz.mp4" controls muted playsinline width="720"></video>

#### 描述

高端商业广告 — AURORA FIZZ 00: 00 – 00: 02 | 闪电登场 动作： AURORA FIZZ 罐身从上方飞入画面，沿垂直轴快速旋转。 视觉效果： 锐利的动态模糊。金色柑橘图案化作璀璨的光线。 罐身精准地停在画面中央 — 标签完美朝向镜头。 00: 02 – 00: 04 | 爆裂揭示 动作： 罐身分解成三个水平部分（顶部环、核...

#### 提示詞

```text
高端商业广告 — AURORA FIZZ 00: 00 – 00: 02 | 闪电登场 动作： AURORA FIZZ 罐身从上方飞入画面，沿垂直轴快速旋转。 视觉效果： 锐利的动态模糊。金色柑橘图案化作璀璨的光线。 罐身精准地停在画面中央 — 标签完美朝向镜头。 00: 02 – 00: 04 | 爆裂揭示 动作： 罐身分解成三个水平部分（顶部环、核心主体、底部环）。 视觉效果： 发出清脆的嘶嘶声。冰冷的蒸汽向外溢出。 在浮动的罐身段之间，鲜艳的柠檬和青柠切片凭空出现 — 伴随着凭空形成的闪亮气泡。 00: 04 – 00: 07 | 气泡升腾时刻 动作： 时间凝固 — 悬浮的优雅。 视觉效果： 柑橘切片在失重状态下缓慢旋转，气泡流在无形的液体空间中向上升腾。 镜头以流畅的电影运镜轨道滑过。 亮点在冷凝水珠上闪烁 — 每个气泡都像钻石一样捕捉着光线。 00: 07 – 00: 08 | 能量封存 动作： 罐身像磁铁般瞬间合拢。 视觉效果： 发出清脆的“噗嗤”声。 柑橘和气泡瞬间被封存在内。 一股清新的雾气脉冲向外散发。 00: 08 – 00: 10 | 清爽退场 动作： 罐身旋转至最高速度，向上飞出画面。 视觉效果： 背景变为明亮清爽的渐变色 — 准备无缝循环。
```

### No. 85: 惊涛骇浪中的沉船电影场景

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 085
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/085_generated_02_1390_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/085_generated_02_1390_case.mp4" controls muted playsinline width="720"></video>

#### 描述

第一人称视角：船只在波涛汹涌的海面上颠簸；切至：船长在舵前神情紧张的特写；切至：船长双手掌舵的特写；切至：船只独自在波涛汹涌的海面上航行的远景，航向正在缓慢改变。切至：甲板上惊恐的人们紧抓栏杆，尖叫着，中景镜头。切至：桅杆吱呀作响，随后突然一声脆响，猛地断裂；切至：船体撞上礁石，灾难性地断裂的侧视图。随着船只解体，船员们因惯性被抛向空中，坠入大海。

#### 提示詞

```text
第一人称视角：船只在波涛汹涌的海面上颠簸；切至：船长在舵前神情紧张的特写；切至：船长双手掌舵的特写；切至：船只独自在波涛汹涌的海面上航行的远景，航向正在缓慢改变。切至：甲板上惊恐的人们紧抓栏杆，尖叫着，中景镜头。切至：桅杆吱呀作响，随后突然一声脆响，猛地断裂；切至：船体撞上礁石，灾难性地断裂的侧视图。随着船只解体，船员们因惯性被抛向空中，坠入大海。
```

### No. 86: 贫民窟里的 BMX 骑手

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 086
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/086_generated_03_1391_bmx.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/086_generated_03_1391_bmx.mp4" controls muted playsinline width="720"></video>

#### 描述

一位二十多岁的巴西裔女性，深色卷发被一顶结构化的白色渔夫帽束起，身穿配套的超大黑色工装夹克、宽松的黑色长裤和厚实的白色靴子，骑着一辆亮铬色的 BMX 自行车穿梭于一个由狭窄石巷和彩绘墙壁构成的密集贫民窟式山坡社区。在 2 秒处，她骑上了一段楼梯，在十次连续的轮胎触地中爬上了六十级石阶，其节奏感通过摄像机抖动清晰可见，她的身体以熟练的轻松姿态吸收着冲击。...

#### 提示詞

```text
一位二十多岁的巴西裔女性，深色卷发被一顶结构化的白色渔夫帽束起，身穿配套的超大黑色工装夹克、宽松的黑色长裤和厚实的白色靴子，骑着一辆亮铬色的 BMX 自行车穿梭于一个由狭窄石巷和彩绘墙壁构成的密集贫民窟式山坡社区。在 2 秒处，她骑上了一段楼梯，在十次连续的轮胎触地中爬上了六十级石阶，其节奏感通过摄像机抖动清晰可见，她的身体以熟练的轻松姿态吸收着冲击。到达顶部后，她立即沿着彩绘墙面进行了一次贴墙骑行，车轮垂直地在壁画上运行，下方宽阔的镜头中可见楼梯。摄像机在攀爬过程中从下方追逐，然后切换到侧面固定角度拍摄贴墙骑行，壁画的色彩在高速中变得模糊。她从贴墙骑行过渡到两个屋顶之间的空隙，高速越过，并继续下降，摄像机从上方捕捉到铬色自行车穿梭于小巷几何结构中的画面。深勃艮第色、铬色 BMX、彩绘贫民窟墙壁、楼梯垂直攀爬、爬楼节奏、壁画贴墙骑行、屋顶间隙过渡、山坡下降航拍、电影颗粒感、4K。
```

### No. 87: 乐高探险家被北极熊追赶

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 087
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/087_generated_04_1392_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/087_generated_04_1392_case.mp4" controls muted playsinline width="720"></video>

#### 描述

乐高探险家小人仔驾驶迷你雪地摩托车，在冰天雪地中飞驰，身后一头巨大的咆哮北极熊紧追不舍，雪花戏剧性地飞溅，空气中弥漫着冰冷的薄雾，强烈的电影背光，动态倾斜的镜头，大片动作风格，夸张的漫画式动感，清晰的乐高塑料质感，戏剧性的冷色调。

#### 提示詞

```text
乐高探险家小人仔驾驶迷你雪地摩托车，在冰天雪地中飞驰，身后一头巨大的咆哮北极熊紧追不舍，雪花戏剧性地飞溅，空气中弥漫着冰冷的薄雾，强烈的电影背光，动态倾斜的镜头，大片动作风格，夸张的漫画式动感，清晰的乐高塑料质感，戏剧性的冷色调。
```

### No. 88: Seedance 2.0 提示词，用于幽默动漫场景

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 088
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/088_generated_05_1396_seedance-2-0.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/088_generated_05_1396_seedance-2-0.mp4" controls muted playsinline width="720"></video>

#### 描述

创作一个动漫场景：一条肌肉发达的巨龙高耸地立在人类骑士面前，威胁性地看着他。骑士掏出一把鸡毛掸子，挠巨龙的肚子。巨龙怕痒，立刻用低沉的声音大声咯咯笑起来。场景结束时，骑士正用鸡毛掸子挠着巨龙的肚子，巨龙则咧着傻傻的大嘴咯咯笑着。

#### 提示詞

```text
创作一个动漫场景：一条肌肉发达的巨龙高耸地立在人类骑士面前，威胁性地看着他。骑士掏出一把鸡毛掸子，挠巨龙的肚子。巨龙怕痒，立刻用低沉的声音大声咯咯笑起来。场景结束时，骑士正用鸡毛掸子挠着巨龙的肚子，巨龙则咧着傻傻的大嘴咯咯笑着。
```

### No. 89: 逃离巨型怪物（奥术风格）

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 089
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/089_generated_06_142_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/089_generated_06_142_case.mp4" controls muted playsinline width="720"></video>

#### 描述

生成一个关于跑步场景的视频，身后是一个像 100 层楼高的巨型怪物正在逼近，使用奥术风格。

#### 提示詞

```text
生成一个关于跑步场景的视频，身后是一个像 100 层楼高的巨型怪物正在逼近，使用奥术风格。
```

### No. 90: 未来感十足的兰博基尼组装商业广告提示

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 090
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/090_generated_07_1470_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/090_generated_07_1470_case.mp4" controls muted playsinline width="720"></video>

#### 描述

在一个黑暗、光亮的数字展厅内，上演着一场史诗般的未来汽车组装序列。一辆白色的高性能兰博基尼开始在一个反光的黑色舞台中央成形。环境极简、整洁且富有戏剧性，强劲的聚光灯穿透黑暗，映照在抛光的地面上。 序列始于发光的机械部件在空中漂浮的特写镜头。发动机部件首先出现，活塞和齿轮缓慢旋转，仿佛悬浮在零重力状态。每个部件都平稳地移动到位，发出精确的机械咔嗒声连接在...

#### 提示詞

```text
在一个黑暗、光亮的数字展厅内，上演着一场史诗般的未来汽车组装序列。一辆白色的高性能兰博基尼开始在一个反光的黑色舞台中央成形。环境极简、整洁且富有戏剧性，强劲的聚光灯穿透黑暗，映照在抛光的地面上。 序列始于发光的机械部件在空中漂浮的特写镜头。发动机部件首先出现，活塞和齿轮缓慢旋转，仿佛悬浮在零重力状态。每个部件都平稳地移动到位，发出精确的机械咔嗒声连接在一起。变速器部件滑入，电子设备亮起柔和的蓝色能量，发光的电缆穿过底盘。 随着更多部件的组装，摄像机缓慢地围绕着结构移动。碳纤维车身面板下降并与车架完美对齐。车轮轻轻旋转，然后锁定在车轴上。仪表盘灯亮起，显示出优雅的数字显示。 明亮的闪光标志着每个连接的完成。当车辆成形时，微妙的全息网格和 UI 线条短暂出现。灯光强调了光亮的白色表面和锐利的空气动力学曲线。 当最后一块面板锁定到位时，前灯发出强大的白色光芒。发动机启动，发出深沉、电影般的轰鸣声。 摄像机后拉，开始围绕已完成的兰博基尼进行平稳的 360 度环绕拍摄，在戏剧性的灯光下展现出整辆车。反射在地面上荡漾，光束扫过车身，突显出每一个轮廓。 电影级灯光，时尚的产品展示，高对比度反射，未来主义氛围，超详细的机械组装，史诗般的揭示，戏剧性的摄像机运动，高端汽车广告风格。
```

### No. 91: 巨龙围攻古堡

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 091
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/091_generated_08_1478_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/091_generated_08_1478_case.mp4" controls muted playsinline width="720"></video>

#### 描述

一座古老的石头城堡坐落在山崖上，乌云密布，一条巨龙在上方盘旋。 巨龙俯冲向城堡，喷吐着熊熊烈火，士兵们则万箭齐发，投石机也发射出燃烧的投射物。 从城堡的低角度拍摄。

#### 提示詞

```text
一座古老的石头城堡坐落在山崖上，乌云密布，一条巨龙在上方盘旋。 巨龙俯冲向城堡，喷吐着熊熊烈火，士兵们则万箭齐发，投石机也发射出燃烧的投射物。 从城堡的低角度拍摄。
```

### No. 92: Seedance 2.0 低空飞行器飞行视频提示

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 092
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/092_generated_09_1537_seedance-2-0.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/092_generated_09_1537_seedance-2-0.mp4" controls muted playsinline width="720"></video>

#### 描述

第一人称视角驾驶小型飞机低空飞行，掠过山脉、森林或海岸线——强烈的风噪声和沉浸式视觉体验，快速向前移动的镜头，动态的镜头运动，戏剧性的逆光金色光线，电影级的色彩分级，紧张刺激的氛围，超流畅的运动，4K 分辨率，高度细节，无文字叠加。

#### 提示詞

```text
第一人称视角驾驶小型飞机低空飞行，掠过山脉、森林或海岸线——强烈的风噪声和沉浸式视觉体验，快速向前移动的镜头，动态的镜头运动，戏剧性的逆光金色光线，电影级的色彩分级，紧张刺激的氛围，超流畅的运动，4K 分辨率，高度细节，无文字叠加。
```

### No. 93: 暖心森林喜剧视频提示

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 093
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/093_generated_10_1550_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/093_generated_10_1550_case.mp4" controls muted playsinline width="720"></video>

#### 描述

格式：15 秒 / 6 镜头 / 暖心森林喜剧 / 简短对话 风格：超现实电影级森林动画，温暖的金色夕阳透过树皮裂缝洒下，树洞内长满苔藓，温馨舒适

#### 提示詞

```text
格式：15 秒 / 6 镜头 / 暖心森林喜剧 / 简短对话 风格：超现实电影级森林动画，温暖的金色夕阳透过树皮裂缝洒下，树洞内长满苔藓，温馨舒适
```

### No. 94: 马赛村庄的混乱

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 094
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/094_generated_11_160_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/094_generated_11_160_case.mp4" controls muted playsinline width="720"></video>

#### 描述

一只身披盔甲的巨大狒狒冲过一个燃烧的马赛村庄，它抓起一名马赛战士，将其扔进一间着火的茅屋，马赛战士们在一片火海和废墟中惊恐地四散奔逃。

#### 提示詞

```text
一只身披盔甲的巨大狒狒冲过一个燃烧的马赛村庄，它抓起一名马赛战士，将其扔进一间着火的茅屋，马赛战士们在一片火海和废墟中惊恐地四散奔逃。
```

### No. 95: 重庆的哥斯拉巨型白虎斑猫

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 095
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/095_generated_12_1633_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/095_generated_12_1633_case.mp4" controls muted playsinline width="720"></video>

#### 描述

【风格】伪纪录片，手机 Vlog 视角，超现实 CG 结合真实场景，8K 画质，完美的毛发物理模拟。 【时长】15 秒 【场景】重庆洪崖洞或繁忙的立交桥路口（具有魔幻 8D 城市感）。 [00:00-00:05] 镜头 1：视觉奇观（揭示）。 画面显示一条熙熙攘攘的城市街道。镜头抬升，展现一只**哥斯拉大小的白色虎斑猫**卡在两栋摩天大楼之间。 动作：...

#### 提示詞

```text
【风格】伪纪录片，手机 Vlog 视角，超现实 CG 结合真实场景，8K 画质，完美的毛发物理模拟。 【时长】15 秒 【场景】重庆洪崖洞或繁忙的立交桥路口（具有魔幻 8D 城市感）。 [00:00-00:05] 镜头 1：视觉奇观（揭示）。 画面显示一条熙熙攘攘的城市街道。镜头抬升，展现一只**哥斯拉大小的白色虎斑猫**卡在两栋摩天大楼之间。 动作：巨猫因为太胖被卡住，可怜地挥舞着巨大的爪子，试图把自己拔出来。 细节：阳光下猫的毛发清晰可见，巨大的肉垫压在玻璃幕墙上，使玻璃变形。 [000:05-00:10] 镜头 2：荒诞互动（互动）。 镜头切换到地面视角。街道上车流不息，红绿灯闪烁。巨猫低下头，巨大的猫脸凑近地面，好奇地嗅着一辆等红灯的公交车。 动作：公交车司机平静地伸出手，抚摸着巨猫的鼻子。猫打了个喷嚏，瞬间吹走了路边的树叶和行人的帽子（风力效果）。 [00:10-00:15] 镜头 3：模因式结局（点睛之笔）。 巨猫终于挤过建筑物，坐到一座跨江大桥上，导致桥面轻微下沉（物理反馈）。 叙事感：它懒洋洋地躺下，开始梳理毛发，堵塞了整个晚高峰交通。镜头最终定格在它无辜的大眼睛上。
```

### No. 96: 持续一镜到底的灾难片写实主义

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 096
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/096_generated_13_1707_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/096_generated_13_1707_case.mp4" controls muted playsinline width="720"></video>

#### 描述

一位身穿橙色救生衣的孤独急救技术员，站在被洪水淹没的欧洲首都一座博物馆的破碎屋顶上，头顶乌云密布，下方是破碎的雕像和漂浮的碎片，冷峻的蓝灰色调，电影般的灾难写实主义，湿漉漉的表面，强烈的比例感，35 毫米胶片质感。灾难片写实主义，一镜到底。镜头从被洪水淹没的首都上空狂暴的风暴天气中开始，然后俯冲向站在被洪水淹没的博物馆破碎屋顶上的孤独急救技术员。他看到...

#### 提示詞

```text
一位身穿橙色救生衣的孤独急救技术员，站在被洪水淹没的欧洲首都一座博物馆的破碎屋顶上，头顶乌云密布，下方是破碎的雕像和漂浮的碎片，冷峻的蓝灰色调，电影般的灾难写实主义，湿漉漉的表面，强烈的比例感，35 毫米胶片质感。灾难片写实主义，一镜到底。镜头从被洪水淹没的首都上空狂暴的风暴天气中开始，然后俯冲向站在被洪水淹没的博物馆破碎屋顶上的孤独急救技术员。他看到远处有一枚救援信号弹，然后开始奔跑。镜头紧随其后，他冲过坍塌的屋顶，跳过破碎的天窗，滑下一个倾斜的玻璃穹顶，抓住一根摇晃的缆绳。下方，黑暗的洪水在布满漂浮汽车和雕像的街道中汹涌。他落在部分被淹没的有轨电车车顶上，继续前进，就在一个巨浪在他身后拍打而过时，他到达了一个救援信标平台。冷峻的灰蓝色末日色调，超现实的水物理效果，风，水花，手持镜头的紧迫感，一镜到底，无剪辑。
```

### No. 97: 充满活力的橙味汽水广告拍摄

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 097
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/097_generated_14_1709_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/097_generated_14_1709_case.mp4" controls muted playsinline width="720"></video>

#### 描述

一个充满活力的橙色汽水罐，周围环绕着飞溅的柑橘切片和闪闪发光的水滴，慢动作呈现，明亮而充满活力的灯光，高细节商业摄影。

#### 提示詞

```text
一个充满活力的橙色汽水罐，周围环绕着飞溅的柑橘切片和闪闪发光的水滴，慢动作呈现，明亮而充满活力的灯光，高细节商业摄影。
```

### No. 98: Seedance 2.0 全球女性通用机甲变身视频提示词

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 098
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/098_generated_15_1720_seedance-2-0.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/098_generated_15_1720_seedance-2-0.mp4" controls muted playsinline width="720"></video>

#### 描述

核心场景提示词 @94d74b42-17ec-45d3-ab60-487c3a1700cb 12 秒内完成 10 套全球女性盔甲变身。全程无眼镜，全盔甲头盔 + 武器，纯女性将军造型。所有转场均包含发光粒子特效。风格统一为高端、写实、震撼。按时间段划分的场景： 0-1 秒：中国红金明光铠 + 鎏金战盔，手持鎏金长矛，抬手抚摸肩上神兽，金色铠甲流光溢彩，...

#### 提示詞

```text
核心场景提示词 @94d74b42-17ec-45d3-ab60-487c3a1700cb 12 秒内完成 10 套全球女性盔甲变身。全程无眼镜，全盔甲头盔 + 武器，纯女性将军造型。所有转场均包含发光粒子特效。风格统一为高端、写实、震撼。按时间段划分的场景： 0-1 秒：中国红金明光铠 + 鎏金战盔，手持鎏金长矛，抬手抚摸肩上神兽，金色铠甲流光溢彩，身姿挺拔，东方战神女将气场全开。 1-2 秒：日本战国女武士铠甲 + 鹿角胴丸头盔，手持武士刀，转身甩动披风扫过镜头，层叠铠甲片精致，冷冽锋芒，杀气十足。 2-3 秒：欧洲中世纪女骑士全身板甲 + 十字面罩头盔，手持骑士长剑，手掌遮挡镜头并移开完成变身，银色铠甲泛着冷光，庄严而有力。 3-4 秒：古罗马女指挥官肌肉胸甲 + 红色羽毛军团头盔，手持短剑和圆盾，双臂合拢完成变身，金属肩甲和披风飞扬，威武、果断、极具统帅力。 4-5 秒：北欧维京女战士毛皮与铁甲 + 符文战盔，手持战斧和圆盾，低头调整护腕后抬头完成变身，狂野、冷峻、气势逼人。 5-6 秒：波斯萨珊风格女将军鱼鳞甲 + 珠宝链甲王冠，手持弯刀，转身回正完成变身，铠甲表面细腻奢华，兼具异域王族与将军气质。 6-7 秒：蒙古草原女战士皮甲与铁片甲 + 羽毛战盔，手持复合弓箭，轻触额头盔甲完成变身，动作迅捷利落，英武而机动。 7-8 秒：印度王朝女战士鎏金纹饰铠甲 + 珠串王冠战盔，手持长矛，轻抚披风下摆完成变身，华丽而神秘，高贵却不失武者之魂。 8-9 秒：阿拉伯女指挥官月纹链甲 + 面纱金属头饰，手持新月弯刀，手掌遮挡镜头并移开完成变身，神秘、高贵、眼神锐利，异域史诗感极强。 9-10 秒：斯巴达女战士青铜铠甲 + 马鬃头盔，手持长矛和圆盾，甩动披风遮挡身体完成变身，身姿挺拔，力量感爆发，战场存在感十足。 10-11 秒：幻想帝国女王重甲 + 王冠式龙纹头盔，手持皇家巨剑，侧身遮挡镜头完成变身，黑金重甲层叠，如同终极女王降临。 11-12 秒：转身甩动披风，最终回到中国红金明光铠 + 鎏金战盔 + 鎏金长矛，金光爆发中定格，镜头凝固，东方战神女将最终封神。
```

### No. 99: 办公室神龙

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 099
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/099_generated_16_1768_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/099_generated_16_1768_case.mp4" controls muted playsinline width="720"></video>

#### 描述

快速剪辑：一条超逼真的“办公室巨龙”在多个办公室房间里高速飞过，穿梭于人群之间、越过办公桌、绕着人们，在一个繁忙的格子间办公室里。它降落在一个人面前的桌子上，向那名男子喷射火焰。巨龙说：“你被解雇了。”

#### 提示詞

```text
快速剪辑：一条超逼真的“办公室巨龙”在多个办公室房间里高速飞过，穿梭于人群之间、越过办公桌、绕着人们，在一个繁忙的格子间办公室里。它降落在一个人面前的桌子上，向那名男子喷射火焰。巨龙说：“你被解雇了。”
```

### No. 100: 斋月至开斋节无限缩放超延时摄影

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 100
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/100_generated_17_1775_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/100_generated_17_1775_case.mp4" controls muted playsinline width="720"></video>

#### 描述

通过高度精细的剪纸艺术，无缝无限变焦超延时摄影，捕捉从斋月到开斋节庆祝的旅程。场景始于封斋饭时间，宁静的街区上空悬挂着一轮皎洁的弯月，柔和的灯笼光影摇曳。镜头拉近一扇屋窗，一家人正在准备封斋饭，随后平稳过渡到快节奏的日常斋戒时刻超延时摄影——人们工作、祈祷，等待开斋。 镜头继续拉近，日落时分，街道上挤满了小吃摊贩和人群，随后过渡到混乱的开斋节返乡车流（...

#### 提示詞

```text
通过高度精细的剪纸艺术，无缝无限变焦超延时摄影，捕捉从斋月到开斋节庆祝的旅程。场景始于封斋饭时间，宁静的街区上空悬挂着一轮皎洁的弯月，柔和的灯笼光影摇曳。镜头拉近一扇屋窗，一家人正在准备封斋饭，随后平稳过渡到快节奏的日常斋戒时刻超延时摄影——人们工作、祈祷，等待开斋。 镜头继续拉近，日落时分，街道上挤满了小吃摊贩和人群，随后过渡到混乱的开斋节返乡车流（mudik），拥挤的汽车和摩托车以动态超延时摄影的方式移动。 镜头拉近一扇车窗，过渡到宁静的乡村景象（kampung），孩子们玩耍，人们为开斋节做准备。镜头继续拉近一座清真寺，人们在日出时分在开阔的田野上进行开斋节祈祷（sholat Ied）。 镜头无缝拉近握手瞬间，过渡到充满情感的家庭团聚，伴随着“maaf-maafan”（互相请求原谅）。镜头继续拉近一张摆满了马来粽（ketupat）、椰浆鸡（opor ayam）和传统菜肴的餐桌，大家庭欢聚一堂，其乐融融地用餐。 最后，镜头拉近一个马来粽，然后过渡回天空中的弯月，完成整个循环。手剪纸纹理、分层深度、柔和阴影、鲜艳的节日色彩、流畅的无限过渡、电影级灯光、超高细节，15 秒。
```

### No. 101: 怒海狂龙

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 101
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/101_generated_18_1776_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/101_generated_18_1776_case.mp4" controls muted playsinline width="720"></video>

#### 描述

一头狂暴的红色巨龙（元素）从海中腾空而起，以极快的速度在船上方盘旋飞舞，激起巨大的海浪。 动态镜头跟随巨龙穿过风暴，在巨浪中翻腾远去。

#### 提示詞

```text
一头狂暴的红色巨龙（元素）从海中腾空而起，以极快的速度在船上方盘旋飞舞，激起巨大的海浪。 动态镜头跟随巨龙穿过风暴，在巨浪中翻腾远去。
```

### No. 102: 女性角色装甲组装与飞行

- **分類:** `Atlas 生成案例 I2V`
- **来源:** `Gemini Omni Flash | prompts-hub generated`
- **作者:** Atlas Generated 102
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/generated/102_generated_19_1777_case.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/generated/102_generated_19_1777_case.mp4" controls muted playsinline width="720"></video>

#### 描述

镜头 1（8 秒）一位强大的女性角色。电影级广角镜头，她翱翔在金黄色云海之上，夕阳的暖橙色光线映照着薄雾，场面壮观而富有戏剧性。风吹拂着她的头发和衣物，展现出高度的物理真实感。来自四面八方的未来感十足的流线型机械装甲部件——胸甲、肩甲、臂铠、腿甲和一顶发光的头盔——高速飞来，拖曳着鲜艳的光迹和青色的引擎尾气。每个部件都以令人满意的机械精度和可见的惯性，...

#### 提示詞

```text
镜头 1（8 秒）一位强大的女性角色。电影级广角镜头，她翱翔在金黄色云海之上，夕阳的暖橙色光线映照着薄雾，场面壮观而富有戏剧性。风吹拂着她的头发和衣物，展现出高度的物理真实感。来自四面八方的未来感十足的流线型机械装甲部件——胸甲、肩甲、臂铠、腿甲和一顶发光的头盔——高速飞来，拖曳着鲜艳的光迹和青色的引擎尾气。每个部件都以令人满意的机械精度和可见的惯性，逐一磁性吸附并锁定在她的身体上，镀铬和哑光碳纤维表面反射着金色的阳光。随着组装完成，摄像机动态地围绕她旋转，最终以特写镜头结束，一个数字面罩在她脸上滑下，她的眼睛闪烁着蓝色能量，蓄势待发，释放出一道光波，将周围的云层冲散。高保真纹理、金属上的微小划痕、逼真的运动模糊和电影般的镜头光晕。 镜头 2（4 秒）角色继续飞行，穿梭于云层之中，她全新的未来战衣散发着内在的能量光芒。摄像机保持低角度的英雄视角，捕捉装甲板之间复杂的接触阴影。她突破音障时，冰晶和尘埃粒子在她身后拖曳，天空从金色变为深邃的暮光紫色。风阻对战衣坚硬表面的真实物理效果清晰可见。最后一个镜头是她的手伸向太阳，能量涟漪在臂铠上荡漾。
```

<a id="category-8"></a>

### Twitter Community (290)

### No. 103: 浪漫自然肖像編輯攝影

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個現代田園風格的精緻藝術肖像提示，強調柔美女性氣質與自然。

#### 提示詞

```text
{
  "image_analysis": {
    "genre": "editorial portrait photography",
    "subcategory": "romantic nature portrait",
    "visual_style": "modern cottagecore meets fine-art portraiture",
    "overall_theme": "soft femininity, nature, youth, simplicity"
  }
}
```

### No. 104: 伊隆·馬斯克生日慶祝

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** coloringany.com
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

伊隆·馬斯克站在一個裝飾著鮮花和氣球的數字54內，慶祝他的生日。

#### 提示詞

```text
Elon Musk sitting inside a large decorative number 54 filled with white roses, gold and silver balloons, and geometric ornaments, bright studio lighting, celebratory birthday theme
```

### No. 105: 夜市慶典中歡樂的女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張充滿活力的中近景照片，捕捉一位微笑的金髮女子，她帶有紫色挑染髮，身處戶外夜市之中。

#### 提示詞

```text
A vibrant, medium close-up shot of a cheerful young woman with long, curly blonde hair streaked with subtle hints of purple, smiling broadly at an outdoor festival evening market.
```

### No. 106: 窗邊的金髮女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pinodi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位金髮女子身穿白襯衫，優雅地坐在窗邊座位上，沐浴在柔和的自然光中。

#### 提示詞

```text
a beautiful blonde woman sitting on a window seat, wearing a white oversized shirt and sheer white socks, natural light from the window, soft focus background, elegant and serene pose
```

### No. 107: 角色參考身份轉換提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lore
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個 JSON 格式的提示，用於轉換角色身份，同時保留面部特徵、髮型、眼型與膚色。

#### 提示詞

```text
{
  "character_reference": {
    "source": "reference character image",
    "identity_transfer": true,
    "preserve": [
      "face",
      "hair",
      "eye shape",
      "skin tone"
    ]
  }
}
```

### No. 108: AI 足球圖像生成比較

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alpha Mom
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065002571148779843.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065002571148779843.mp4" controls muted playsinline width="720"></video>

#### 描述

四種 AI 模型生成寫實足球比賽場景的並排比較圖。

#### 提示詞

```text
four panels comparing AI-generated soccer game graphics from Kling 3.0, Gemini Omni Flash, Grok Imagine, and Seedance 2.0, each showing a different player in action on a stadium field with crowd and lighting effects
```

### No. 109: 粉紅夢境中的公主

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位身穿淡紫色禮服、頭戴皇冠的女子，坐在粉紅色棉花糖之中，置身於夢幻、粉彩色的工作室環境裡。

#### 提示詞

```text
a woman with long blonde hair wearing a silver tiara and a lavender dress, sitting on a pink floor surrounded by fluffy pink cotton candy, soft lighting, studio photography
```

### No. 110: 夢幻奇幻工作室場景提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個結構化的提示，用於生成一個異想天開、粉彩粉紅色的奇幻工作室場景。

#### 提示詞

```text
{
  "scene": {
    "setting": "dreamlike fantasy studio",
    "background": "soft pastel pink studio environment filled with fluffy cloud-like formations surrounding the subject, seamless pink floor and backdrop blending together, whimsical fairytale"
```

### No. 111: 帶有友善文字的極簡蜜蜂線條藝術

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heather Green
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成極簡連續線條藝術插圖的提示，描繪一隻蜜蜂與花朵，並附有草書文字。

#### 提示詞

```text
minimalist, elegant single continuous line art illustration of a bee surrounded by delicate flowers, centered on a clean white background; below the bee, the word 'Kind' in flowing cursive script, balanced composition, thin
```

### No. 112: 大地色調的立體派海盜畫作

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ash
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成紋理豐富的油畫提示：以畢卡索立體派風格描繪三名海盜，運用幾何形狀與深色大地色調。

#### 提示詞

```text
Textured oil painting in the Cubist style of Pablo Picasso of 3 pirares, using interlocking geometric shapes. Dark earthy shades.
```

### No. 113: 時尚編輯 AI 應用程式

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Vladilsav
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

MIU AI 應用程式的宣傳圖片，展示其時尚編輯功能與使用者介面。

#### 提示詞

```text
A sleek black background with a smartphone displaying the MIU AI app interface, featuring fashion editorial content, K-pop trends, and a 'Content Lab' section. The left side shows the app's logo, tagline 'A fashion editorial in your pocket,' and an App Store listing for 'MIU AI: Photo Video Generator.' The design uses pink and white text on a dark theme, with a modern, high-tech aesthetic. The overall look is clean, sophisticated, and focused on AI-generated fashion content.
```

### No. 114: 奧爾德里克在雨林面對黑暗生物

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Cortex Visual ・ AI Movies
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成戲劇性場景的提示：一名戰士在泥濘的死寂森林中，於雨中對抗一隻衝鋒的怪物。

#### 提示詞

```text
Aldric standing his ground in a rain-soaked dead forest, sword held firmly with both hands, feet planted in the mud, facing a massive dark humanoid creature charging directly toward him at full speed, monstrous
```

### No. 115: 身穿紅色泳衣的豐滿女子倚靠梯子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Justice Studio 2.0
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張自然風格的全景照片，捕捉一位身穿深紅色泳衣的女子，倚靠著木製圖書館梯子擺姿勢。

#### 提示詞

```text
Candid full-body iPhone photo of a busty mid-30s woman with large heavy breasts in a tiny crimson red one-piece swimsuit, leaning against an old wooden library ladder, one leg raised, hand gripping it. Wet messy dark
```

### No. 116: 超寫實 Y2K 閃光燈人像提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** simply
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成寫實、自然風格的美麗人像的提示，帶有 Y2K 閃光攝影的能量感。

#### 提示詞

```text
Ultra-realistic candid beauty portrait of a glamorous woman captured indoors at night. The atmosphere feels spontaneous, luxurious, and natural, with authentic Y2K flash-photography energy. Photographed at close range using a premium
```

### No. 117: 現代豪華公寓衣帽間場景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成影片場景的提示，場景設定在現代豪華公寓的衣帽間，擁有簡潔、當代的室內設計。

#### 提示詞

```text
{
  "scene": {
    "setting": "modern luxury apartment dressing room",
    "background": "clean contemporary interior with wardrobe shelves and clothing storage softly blurred in the distance, minimalist modern decor, large feature wall covered with a
```

### No. 118: 兩位足球巨星的寓言式壁畫海報

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅細節豐富、對稱的寓言式壁畫，採用垂直海報格式，帶有仿舊紙張紋理，旨在頌揚兩位傳奇足球生涯。

#### 提示詞

```text
A striking vertical art poster rendered in the style of a detailed, symmetrical allegorical mural with an aged paper texture, paying tribute to the unique and parallel careers of two
```

### No. 119: 世界盃國家獎盃

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** TechieSA
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅創意拼貼畫，呈現代表英格蘭、阿根廷、巴西和法國的世界盃獎盃，並融合國家標誌與口號。

#### 提示詞

```text
Four World Cup trophy designs made of national symbols, flags, and cultural elements for England, Argentina, Brazil, and France, each with confetti and vibrant backgrounds, in a 2x2 grid layout
```

### No. 120: 帶有唇印的女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位身穿紅色洋裝的女子對著鏡頭眨眼，肩上有個口紅唇印，背景是風景優美的海岸。

#### 提示詞

```text
a woman in a red dress winking with a lipstick kiss mark on her shoulder, standing on a cliff overlooking the ocean, sunny day, golden hour lighting, realistic photography
```

### No. 121: 戶外山坡俯瞰海岸景觀

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個結構化的提示，用於生成從山坡視角眺望的陽光海岸景觀。

#### 提示詞

```text
{
  "scene": {
    "setting": "outdoor hillside overlook",
    "background": "sunlit coastal landscape with distant ocean horizon, rolling green hills, scattered vegetation and clear blue sky stretching across the frame",
    "lighting": "natural golden"
  }
}
```

### No. 122: 直視鏡頭的成年男性，目光銳利

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個描述男性的提示：表情嚴肅、膚色黝黑、蓄有深色鬍鬚，正對著鏡頭。

#### 提示詞

```text
An adult male stands squarely facing the camera with level shoulders and a centered stance, his intense, serious direct gaze piercing through the frame. He has a warm tan complexion, a full dark beard, and heavily
```

### No. 123: 文字轉影片排名

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Steren
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一份展示文字轉影片AI模型排名、分數與投票數的排行榜。

#### 提示詞

```text
A screenshot of a text-to-video model ranking leaderboard with a clean, modern UI, white background, and a table listing models like gemini-omni-flash, dreamina-seedance, and happyhorse-1.0, showing rank, score, and votes, with a 'View all' button at the bottom.
```

### No. 124: 文字轉影片模型排名

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Yash Bhalgat
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一份深色主題的排行榜，展示頂尖文字轉影片AI模型的分數、投票數與排名。

#### 提示詞

```text
dark theme interface showing a ranked list of text-to-video AI models with scores and votes
```

### No. 125: 線框貓咪喝茶

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** TechieSA
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一隻幾何線框貓咪在桌邊享用一杯茶，桌上擺有茶壺與茶碟。

#### 提示詞

```text
a wireframe cat drinking tea, geometric low-poly style, blue and white, sitting at a table with teapot and saucer, digital art, 3D render
```

### No. 126: Gemini Omni Flash 排名第一

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alexandre Moufarek
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一份比較文字轉影片AI模型的排行榜，Gemini Omni Flash位居榜首。

#### 提示詞

```text
A bar chart ranking text-to-video AI models with Gemini Omni Flash at #1, featuring a clean, modern design with teal bars and a light background.
```

### No. 127: 陰影中的亞蘇卡

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ImPaul
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

亞蘇卡·譚諾的特寫，戲劇性的光影突顯了她的臉龐與兜帽下的輪廓。

#### 提示詞

```text
Ahsoka Tano, close-up portrait, dramatic lighting, white facial markings, striped hood, dark background, intense gaze, cinematic style
```

### No. 128: 文字轉影片基準測試

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mikel | AI Engineer
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張條形圖，比較多種文字轉影片模型在整體偏好與指令遵循方面的ELO分數。

#### 提示詞

```text
A bar chart comparing text-to-video models on overall preference and instruction following, with blue, black, dark gray, light gray, and white bars, labeled with ELO scores, set against a clean white background with a legend and title.
```

### No. 129: 洗衣機內視角照片

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成古怪而親密的生活風格照片的提示，從洗衣機內部視角看向雪梨·史威尼。

#### 提示詞

```text
A quirky and intimate POV lifestyle photograph taken from the inside of a washing machine looking out at Sydney Sweeney.
```

### No. 130: 鬼臉殺手萬聖節姿勢

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位身穿黑色洋裝的女子，在戲劇性的門口場景中手持鬼臉殺手面具。

#### 提示詞

```text
a woman in a black dress holding a Ghostface mask, standing in a doorway with a candle, wearing black lace gloves and stockings, dark background with star effects, cinematic lighting, horror theme
```

### No. 131: 超現實電影級巴基斯坦肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Salina
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成高解析度電影級肖像的提示，描繪一位身穿傳統巴基斯坦服飾的女子。

#### 提示詞

```text
Use uploaded photo to create AN ULTRA REALISTIC HIGH RESOLUTION CINEMATIC PORTRAIT. A beautiful woman with long brown hair, haf-updo, wearing a black traditional Pakistani dress (shalwar kameez) with bright maroon scalloped trim
```

### No. 132: 羅馬競技場前手持氣球的女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Maria Pratt
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065139364603277645.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065139364603277645.mp4" controls muted playsinline width="720"></video>

#### 描述

一位身穿薰衣草色長裙的女子，在日落時分的羅馬競技場前，手持一束紫色大理石紋氣球。

#### 提示詞

```text
a woman in a flowing lavender tulle gown holding a large cluster of purple marbled balloons, standing in front of the Colosseum at sunset, cinematic lighting, photorealistic, 8k
```

### No. 133: 《Ben 10》真人版電影概念

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Karan
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065141110071230593.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065141110071230593.mp4" controls muted playsinline width="720"></video>

#### 描述

一個探討《Ben 10》系列改編為真人版電影的提示。

#### 提示詞

```text
What if Ben 10 had a live action movie
```

### No. 134: Gemini Omni Flash 排名第一

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Tokens on Solana
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個顯示Gemini Omni Flash為排名第一的文字轉影片AI模型的長條圖。

#### 提示詞

```text
A bar chart comparing text-to-video AI models with scores, highlighting Gemini Omni Flash as ranked #1, clean modern design, light background, Arena AI branding
```

### No. 135: 文字轉影片基準測試

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** testtm
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個比較各AI影片生成模型在偏好度與指令遵循度表現的長條圖。

#### 提示詞

```text
A bar chart comparing text-to-video models on overall preference and instruction following, with blue bars for Gemini Omni Flash, black for Seedance 2.0, dark gray for HappyHorse, light gray for Kling v3 Pro, very light gray for Grok-Imagine-Video, and white for Wan 2.7, showing ELO scores from 800 to 1150, with data labels on each bar, set against a clean white background with a title at the top and descriptive text below.
```

### No. 136: 城市景觀泳池中的女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成圖像的提示，描繪一位有雀斑的紅髮年輕女子，身處可俯瞰城市景觀的泳池中。

#### 提示詞

```text
A young woman with fair skin covered in light freckles, striking blue eyes, and long, wavy, wet auburn-red hair stands in the pool with breathtaking city views all around.
```

### No. 137: 未來移動指揮中心

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Artingent
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個描述配備可擴展模組與全像顯示器的精密戰場協調中心的提示。

#### 提示詞

```text
Futuristic Mobile Command Center
A futuristic mobile command center designed as a sophisticated battlefield coordination hub, featuring expandable operations modules, holographic strategic displays, autonomous communication drones,
```

### No. 138: 教師輔導學生

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位教師在明亮的教室環境中輔導學生學習。

#### 提示詞

```text
a woman in a red shirt and black pants leaning over a student's desk in a classroom, pointing at an open textbook, the student writing in a notebook, realistic lighting, detailed facial features, classroom setting with desks, windows, and educational posters on the wall
```

### No. 139: 現代教室場景提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成整潔、有序的現代教室環境影片的結構化提示。

#### 提示詞

```text
{
  "scene": {
    "setting": "modern classroom environment",
    "background": "clean and organized educational classroom with wooden student desks, notebooks, textbooks, educational posters, whiteboard and soft classroom decor, natural academic"
  }
}
```

### No. 140: 臉部轉移至豪華遊艇場景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jahan Zaib
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個將參考照片中的臉部，轉移至超寫實豪華遊艇圖像上，同時精確保留身份與特徵的提示。

#### 提示詞

```text
use my reference photo, transfer the face from the photo without changing it, preserve exact identity, facial features, body proportions and natural skin tone with 100% similarity. Ultra-realistic luxury yacht photo, vertical 3:4.
```

### No. 141: 火焰與煙霧中的戲劇性肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alex Prompts
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成戲劇性廣角肖像的提示，描繪主體坐在木地板上，被火焰與煙霧環繞。

#### 提示詞

```text
Dramatic wide portrait of IMAGE1 sitting casually on wooden floor completely  surrounded by large roaring flames and thick smoke, wearing a
```

### No. 142: 時尚編輯街頭服飾肖像提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 𝐊𝐢𝐧𝐳𝐚| 𝗔𝗜
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成女性奢華街頭服飾時尚編輯肖像的提示。

#### 提示詞

```text
Ultra-premium fashion editorial poster, luxury streetwear aesthetic, 4:5 portrait composition. A confident young woman sitting casually on a modern chrome chair, wearing an oversized black leather bomber jacket, black oversized
```

### No. 143: 謝赫·奧馬爾·汗個人檔案

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Natia Kurdadze
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065165520031141976.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065165520031141976.mp4" controls muted playsinline width="720"></video>

#### 描述

一個展示奢華生活方式與財富累積內容的社交媒體個人檔案。

#### 提示詞

```text
a screenshot of a social media profile page with a dark theme, showing a user named Sheikh Omar Khan, with posts, followers, and a dashboard displaying 8.4K views in the last 30 days, featuring images of a man in traditional Middle Eastern attire in luxurious settings like a private jet, yacht, and mansion, with app download links and promotional text about becoming wealthy
```

### No. 144: 能量飲料推廣

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dhairya
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個動態拼貼圖，展示一位女子在健身環境中推廣能量飲料。

#### 提示詞

```text
a collage of a woman in various workout outfits holding a can of Celius energy drink, posing energetically in a bright gym setting, social media style, vibrant lighting, high detail
```

### No. 145: 電梯中的亮片裙女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pinodi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位身著黑色亮片裙的女子，在光滑反光的電梯中自信擺姿，其身影在鏡中清晰可見。

#### 提示詞

```text
a woman with long black hair wearing a black sequined halter dress, standing in a modern elevator with reflective metallic walls, holding her hand to her neck, looking directly at the camera, a studded black handbag on the floor beside her, studio lighting, high fashion photography
```

### No. 146: 空蕩體育場內的寫實肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Justice Studio 2.0
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位橄欖色肌膚、深色頭髮的年輕女子，在空曠的體育場內，於戲劇性的天空下自信站立的寫實肖像。

#### 提示詞

```text
A photorealistic portrait of a beautiful young woman with olive skin, shoulder-length wavy dark brown hair, and subtle makeup, standing confidently in a large empty sports stadium under dramatic overcast skies. She wears a fitted
```

### No. 147: 朦朧模糊的業餘iPhone特寫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成類似業餘iPhone拍攝的、帶有細微模糊感和低畫質特寫鏡頭的提示。

#### 提示詞

```text
Subtle blurry low quality close-up amateur iPhone
```

### No. 148: 未來感影片編輯團隊

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Rabia Eddari
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個專業團隊在戲劇性燈光下的高科技影片編輯工作室中協作。

#### 提示詞

```text
a futuristic video editing studio with a large screen displaying colorful video clips, people in business attire collaborating around workstations, dramatic lighting with blue and purple hues, cinematic atmosphere, high detail, 8k
```

### No. 149: 蘇聯設計的藍寶堅尼 Countach

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Riccardo
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個描述一輛在 1950 年代由蘇聯設計的藍寶堅尼 Countach 跑車的提示。

#### 提示詞

```text
Lamborghini Countach zaprojektowane w ZSRR w latach 50
```

### No. 150: 俯視瑜伽平鋪擺拍自我照顧場景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個俯視的編輯風格平鋪擺拍畫面，一位女性在瑜伽墊上，旁邊放有冰咖啡和自我照顧道具。

#### 提示詞

```text
{
  "concept": "Top-down editorial flat lay: woman sitting cross-legged on a yoga mat looking up at camera, holding an iced coffee, surrounded by neatly arranged self-care props, cozy athletic aesthetic",
  "face_reference": "Keep the https://t.co/1MWWlnj5oA"
}
```

### No. 151: 東德 Trabant 科爾維特平行歷史

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Riccardo
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成影片的提示，描述一輛由東德 Trabant 工程師於 1957 年重新設計的雪佛蘭科爾維特跑車。

#### 提示詞

```text
Chevrolet Corvette designed in East Germany by Trabant engineers in 1957, retro GDR automotive design, socialist industrial aesthetics, realistic alternate history
```

### No. 152: 大教堂中的加冕儀式

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dalniery
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065184436929311017.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065184436929311017.mp4" controls muted playsinline width="720"></video>

#### 描述

一場莊嚴的時刻在宏偉的大教堂中展開，一場儀式活動中正在呈獻王冠。

#### 提示詞

```text
a dramatic scene in a medieval cathedral with a man in a red robe holding a crown, another man in a fur-lined robe standing nearby, and onlookers in period clothing, cinematic lighting, high detail
```

### No. 153: 高端時尚網球與冰淇淋編輯照提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個詳細提示，用於生成超寫實的高端時尚運動編輯照，畫面中一位運動型女性身處網球場。

#### 提示詞

```text
Ultra-photorealistic high-fashion sports editorial, vertical 4:5. A single athletic woman in her mid-20s stands centered on a professional outdoor tennis court, holding an oversized luxury gelato-style waffle cone at chest height
```

### No. 154: 瘦削青少年拾荒者角色提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kōda
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個描述瘦削青少年拾荒者角色的提示，該角色擁有青綠色的雙馬尾髮型。

#### 提示詞

```text
CHARACTER = skinny teenage scavenger with cyan twin-tail hair
```

### No. 155: 超寫實 Instagram 限時動態自拍拼貼

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作垂直 3x2 拼貼畫的提示，呈現一位年輕女性以灰姑娘風格的夜間外出美學。

#### 提示詞

```text
Ultra-photorealistic vertical Instagram Story style 3x2 selfie collage, six candid frames of the same beautiful young woman, consistent face and identity across every panel. Modern Cinderella-inspired night-out aesthetic, dreamy but
```

### No. 156: 陽光公園中的超真實 iPhone 自拍

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成超高角度、超真實 iPhone 自拍的提示，畫面中一位自信的女性在陽光普照的公園中行走。

#### 提示詞

```text
Preserve the woman’s face, selfie angle, skin texture, hairstyle, and overall confident sporty energy from the reference image. Create an ultra-realistic iPhone selfie taken from a high angle in a sunny park. She is walking on a park path
```

### No. 157: AI 影片編輯工具比較

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 🚨 AI News | TestingCatalog
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個長條圖，比較多種 AI 影片編輯工具在兩項指標上的表現。

#### 提示詞

```text
A bar chart comparing Elo scores of AI video editing tools, with categories 'Overall Preference' and 'Instruction Following', showing data for Gemini Omni Flash, Seadance 2.0, HappyHorse, Kling v3 Pro, and Wan 2.7, in a clean modern style with blue, black, gray, and white bars on a light background.
```

### No. 158: 可愛韓國女性肖像柔和光線

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個描述性提示，用於生成一位年輕韓國女性的特寫彩色肖像，她帶著溫柔的微笑和富有表現力的眼神。

#### 提示詞

```text
A vertical, close-up color portrait of a young Korean woman with a cute, endearing expression. She has a soft, gentle smile, large expressive brown eyes, and a hint of blush on her cheeks.
```

### No. 159: 床上閱讀的女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位年輕女子躺在光線柔和的臥室床上閱讀書籍，房間內掛有串燈。

#### 提示詞

```text
a young woman with dark wavy hair lying on a bed in a cozy bedroom, reading a book, soft lighting from string lights, blue bedding, intimate and serene atmosphere
```

### No. 160: Google Omni 標誌

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Divyanshu Divy
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個為 Google Omni 設計的鮮明現代標誌，帶有彩虹漸層和一顆閃爍的星星。

#### 提示詞

```text
Google Omni logo with colorful gradient text, modern design, white background, small star icon
```

### No. 161: 未來感女性戴頭盔的電影鏡頭

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Saki H. 咲希
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成電影感全身鏡頭的提示，描繪一位年輕女性側面手持飛行員頭盔的畫面。

#### 提示詞

```text
A cinematic, dutch angle, full body shot of a young woman as in <<<image_1>>> cooly walking in profile, one hand holding an off-white, mobile suit pilot helmet with metallic black visor. She wears a tight, detailed, futuristic
```

### No. 162: 微縮足球場地圖活靈活現

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alexandra Aisling
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成影片的提示，描述微縮體育場地圖轉變為生動比賽日場景的過程。

#### 提示詞

```text
A football stadium map of [STADIUM], [CITY] spread across a table, transformed into a living miniature world. Match day erupts from the blueprint as [TEAM] faces [OPPONENT] in [TOURNAMENT].
```

### No. 163: Gemini Omni Flash #1

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Leituras com Ravi 🍁
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個排行榜，列出文字轉影片AI模型的排名，Gemini Omni Flash位居榜首。

#### 提示詞

```text
A bar chart comparing text-to-video AI models with scores, highlighting Gemini Omni Flash as #1, clean modern design, light background, Arena AI branding
```

### No. 164: 寫實年輕女性：深棕色頭髮

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sadie 🥀
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成寫實圖像的提示，主角是一位皮膚白皙、擁有長直深棕色頭髮的年輕女性。

#### 提示詞

```text
A highly detailed, photorealistic image of a stunning young woman in her mid-20s with fair skin, long straight dark brown hair with a black
```

### No. 165: 超真實年輕女性肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成親密、真實肖像的提示，具有詳細的皮膚與眼睛特徵。

#### 提示詞

```text
Ultra-realistic intimate lifestyle portrait of a young woman with fair warm-toned skin, peach-beige undertones, natural skin texture, and a soft satin glow. She has large dark brown almond-shaped eyes with a calm, slightly wistful expression
```

### No. 166: AI影片編輯工具比較

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nitesh Kushwaha 🗞️🌎
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張長條圖，比較多種AI影片編輯工具基於Elo評分的表現。

#### 提示詞

```text
A bar chart comparing Elo scores of AI video editing tools, with blue, black, dark gray, light gray, and white bars for Gemini Omni Flash, Seadance 2.0, HappyHorse, Kling v3 Pro, and Wan 2.7, showing two categories: Overall Preference and Instruction Following, on a clean white background with a title 'Video Editing' and legend.
```

### No. 167: 東亞女性電影感肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** auqib
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成超寫實特寫肖像的提示，主角是一位表情平靜的年輕女性。

#### 提示詞

```text
A cinematic, hyper-realistic close-up portrait of a young East Asian woman with dark hair tied up in a loose, casual bun, with a few stray strands framing her face. She has clear skin, warm brown eyes, and a neutral, calm expression.
```

### No. 168: 超真實時尚肖像：紅色T恤

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** liana
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成時尚雜誌特寫肖像的提示，主角是一位身穿紅色「WHATEVER」T恤的女性，使用參考圖像來定義臉部與身體結構。

#### 提示詞

```text
Use 100% face and body structure from attached reference to create a Ultra-realistic fashion magazine close-up portrait of a beautiful young woman wearing an oversized premium red t-shirt featuring the bold white caption "WHATEVER" printed across
```

### No. 169: 超真實美感肖像與閃光燈

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** simply
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成超真實特寫肖像的提示，描繪一位女性在黑暗的室內環境中，使用iPhone風格閃光燈的效果。

#### 提示詞

```text
Ultra-realistic close-up beauty portrait of a stunning young woman, captured with an iPhone / digital camera aesthetic using direct on-camera flash in a dark indoor setting. Glamorous candid beauty shot with soft lens glow, subtle flash bloom
```

### No. 170: 超寫實工作室肖像：年輕男性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nexora
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個詳細的提示，用於生成一張超寫實、全身的工作室肖像，主角是一位自信的年輕男性，坐在設計師凳上。

#### 提示詞

```text
Hyper-realistic luxury studio full-body portrait of a confident young man seated on a premium matte-black designer stool. He has neatly styled brown hair, a well-groomed beard and mustache, and is looking directly into the camera with a
```

### No. 171: 墨中書法家

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ぴょんきち
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位老人在昏暗的房間裡，用大毛筆書寫書法，周圍佈滿墨汁與紙張。

#### 提示詞

```text
an elderly Japanese calligrapher with white hair, wearing a dark robe, kneeling on the floor and writing with a large brush, surrounded by ink-stained papers and lanterns, warm lighting, cinematic, highly detailed, 8k
```

### No. 172: 發光的綠色膠囊

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** RELOX Gamer
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065270532384100531.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065270532384100531.mp4" controls muted playsinline width="720"></video>

#### 描述

一個發光綠色膠囊的特寫，背景帶有柔焦效果。

#### 提示詞

```text
a glowing green capsule floating in a soft-focus green background, smooth and translucent with light reflections
```

### No. 173: 臉部鎖定鏡面自拍提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Salina
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成鏡面自拍的提示，嚴格保持臉部特徵，並具有現代手機攝影風格。

#### 提示詞

```text
Use uploaded reference face exactly, zero modification) FACE LOCK — ZERO MODIFICATION POLICY. Face must remain 100% identical. ASPECT RATIO • 3:4. STYLE: Ultra-Modern Mobile Photography. SCENE: Mirror selfie in a
```

### No. 174: 年輕女性電影感肖像條

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Wandering Corner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成五格垂直電影感肖像條的提示，主角是一位具有特定視覺細節的年輕東亞女性。

#### 提示詞

```text
5-panel vertical cinematic portrait strip of a beautiful young IEast Asian woman (20–24), warm wheatish skin, long silky dark hair flowing naturally, striking magenta-pink lips, subtle makeup, minimal accessories. She wears an
```

### No. 175: AI模型比較圖表

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** remix.camera
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張長條圖，比較五個AI圖像生成模型使用相同提示詞的接受率。

#### 提示詞

```text
A clean, modern bar chart comparing AI image generation models with green, red, black, blue, and purple bars, showing acceptance rates for Seedream 4.5, Seedream V5, Nano Banana 2, Grok, and GPT Image 2 Medium, with text labels and percentages, on a white background
```

### No. 176: 夜間水中攝影

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** remix.camera
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位身穿深色泳衣的女性，在藍色與粉紅色燈光映照的泳池邊擺出姿勢，呈現高級時尚攝影風格。

#### 提示詞

```text
A woman in a black swimsuit sitting by a pool at night, illuminated by blue light, with neon pink accents, high fashion photoshoot style, cinematic lighting, wet hair, elegant pose, close-up shot
```

### No. 177: 動漫風格角色靈感圖板：金莎

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 𝐊𝐢𝐧𝐳𝐚| 𝗔𝗜
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個詳細的提示，用於生成一張動漫風格的靈感圖板海報，主角是一位擁有黑色長髮的南亞女性。

#### 提示詞

```text
An ultra-detailed anime-inspired character moodboard poster of a beautiful young South Asian woman named "Kinza". She has long voluminous black hair flowing naturally, elegant facial features, expressive deep eyes, a soft confident
```

### No. 178: 夜間街頭女性肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Eesha
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張寫實風格的夜間街頭肖像，描繪一位年輕女性，具有細膩的膚質紋理與妝容細節。

#### 提示詞

```text
RAW photorealistic night street portrait of a beautiful young woman with long straight silky black hair (middle part), glowing natural skin texture with visible pores and imperfections, soft clean Douyin glam makeup, calm slightly intimidating
```

### No. 179: 我的 Hermes 個人助理設定

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Chris Tabasco - AI Evolution Polska
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名男子展示其配備人工智慧功能的個人助理設定，包含機器人與智慧型手機應用程式。

#### 提示詞

```text
A man in a black t-shirt with AI Evolution Labs logo stands in a futuristic tech lab, holding a smartphone displaying a messaging app called HERMES, next to a sleek black robot, with glowing blue lights and digital interfaces in the background, text overlay 'My Hermes Setup' and 'My personal assistant'
```

### No. 180: 夜晚陽台上的女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sophia | AI Artist ✨
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名女子在夜晚俯瞰著充滿活力的城市景觀的陽台上擺姿勢。

#### 提示詞

```text
a woman with blonde hair standing on a balcony at night, wearing a black crop top and gray shorts, looking back over her shoulder, city skyline with illuminated buildings in the background, warm lighting from the building interior, high detail, realistic, 4k
```

### No. 181: 復古影片刮痕

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Reese
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065463168277631272.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065463168277631272.mp4" controls muted playsinline width="720"></video>

#### 描述

一個顆粒感強烈的黑白畫面，顯示影片損傷和一條曲線，喚起老電影的美學風格。

#### 提示詞

```text
grainy black and white film frame with scratches and a curved line, vintage film effect
```

### No. 182: 天穹檔案圓廳

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** sayobonita
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一座懸浮在空中的宏偉圖書館，建築華麗，內部散發著光芒。

#### 提示詞

```text
a floating architectural marvel with a grand dome, intricate balconies, and a central library, surrounded by lush greenery, in a fantasy style, detailed, cinematic lighting
```

### No. 183: 超寫實攝影棚肖像拼貼

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sharon Riley
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅8K超寫實攝影棚肖像拼貼，描繪一位女性，妝容精緻，身穿有紋理的粗花呢洋裝。

#### 提示詞

```text
Ultra-photorealistic 8K studio portrait collage of a woman with long, voluminous loose waves, natural glass-skin makeup, flushed cheeks, glossy pink lips, and defined lashes. She wears a tight bodycon mini dress made of soft textured boucle
```

### No. 184: 根據參考圖像重現夜生活場景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** remix.camera
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個提示，要求使用參考圖像重現一個隨意的夜生活場景，且不改變臉部特徵。

#### 提示詞

```text
Using the person in the uploaded reference image (DO NOT TOUCH FACE), recreate this scene: candid nightlife photo of two women standing close together indoors in a dimly lit apartment or party setting, photographed with a direct
```

### No. 185: 復古遊戲室

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kris Kashtanova
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065468953846046924.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065468953846046924.mp4" controls muted playsinline width="720"></video>

#### 描述

一個舒適的復古遊戲室，配有老式電腦設備和一幅女性的黑白肖像畫。

#### 提示詞

```text
a retro gaming room with a vintage computer, lava lamp, posters, and a cat, with a black and white circular portrait of a woman on the right
```

### No. 186: 時裝模特兒快速換裝

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dheepan Ratnam
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065470220253135360.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065470220253135360.mp4" controls muted playsinline width="720"></video>

#### 描述

一個影片提示，描述一位時裝模特兒在10秒內透過俐落剪輯快速切換20種不同風格。

#### 提示詞

```text
A fashion model switches attires with a snap of a finger — 20 styles in 10 seconds, hard cuts
```

### No. 187: 面對鏡頭的運動型年輕男子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個提示，描述一位擁有運動體型、表情嚴肅、留著短髮的年輕成年男性。

#### 提示詞

```text
A young adult male with an athletic build stands on the left side of the frame, facing the camera with a calm, serious expression, a closed neutral mouth, and a direct gaze. His hair is short on the sides and about two
```

### No. 188: 2026年國際足總世界盃

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kaan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅充滿活力的數位藝術作品，描繪自由女神像在一個被各國國旗環繞的體育場中，手持國際足總世界盃獎盃。

#### 提示詞

```text
FIFA World Cup 2026 poster with Statue of Liberty holding the trophy, surrounded by national flags, in a stadium with a soccer ball, vibrant colors, digital art
```

### No. 189: 季風騎士故事板

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Adithya Thatipalli
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個故事板序列，展示一個男孩在季風季節，歡快地騎著紙船穿過雨後淹水的村莊。

#### 提示詞

```text
A young Indian boy makes a paper boat during heavy monsoon rain, rides it through flooded village lanes, with dynamic camera angles and detailed rain physics, in the style of Indian anime storyboard art
```

### No. 190: 男子低角度隨意肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aijaz
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個提示，描述在戶外強烈日光下拍攝一張銳利的低角度隨意男子照片。

#### 提示詞

```text
A sharp, low-angle candid photograph of a man use image for face reference outdoors under bright, harsh daylight, looking slightly to the left. He is wearing a sharp navy blue tailored blazer over a dark t-shirt, modern rimless
```

### No. 191: AI影片編輯工具比較

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Wes Roth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個長條圖，以ELO分數比較各AI影片編輯工具在整體偏好和指令遵循方面的表現。

#### 提示詞

```text
A bar chart comparing AI video editing tools with ELO scores, showing Gemini Omni Flash, Seadance 2.0, HappyHorse, Kling v3 Pro, and Wan 2.7, with categories for Overall Preference and Instruction Following, in a clean modern style with blue, black, gray, and white bars, labeled data points, and a legend at the top.
```

### No. 192: 復古相機肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Altair
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065481224114897095.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065481224114897095.mp4" controls muted playsinline width="720"></video>

#### 描述

一台古董木製相機的細節視圖，配有黃銅組件和皮腔，背景為中性色調。

#### 提示詞

```text
a vintage wooden large format camera with brass lens and bellows, mounted on a tripod, studio lighting, detailed texture, realistic rendering
```

### No. 193: Gemini Omni 影片工具

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Signal Lab
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065483057537204407.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065483057537204407.mp4" controls muted playsinline width="720"></video>

#### 描述

一個展示能將輸入內容轉換為影片的AI媒體工具的未來感數位介面。

#### 提示詞

```text
dark futuristic interface with grid overlay, glowing text 'Gemini Omni turns inputs into video', multiple screen panels showing AI media content, tech-themed design, neon green accents, sleek modern UI, digital display elements
```

### No. 194: 歷史歐洲廣場上的足球轉播

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個影片場景提示，描繪一場公共足球賽轉播，焦點集中在一對情侶身上。

#### 提示詞

```text
A vibrant outdoor public screening of a football match in a historic European city square, filled with a dense crowd of passionate spectators. The main focus is on a young Caucasian couple—a man
```

### No. 195: 跪著的穿絲襪女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pinodi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名身穿條紋上衣和黑色裙子的女子跪在木地板上，穿著帶有交叉綁帶的透明絲襪。

#### 提示詞

```text
a woman with long black hair kneeling on a wooden floor, wearing a white and black striped blouse, a black mini skirt, and black sheer stockings with crisscross straps, in front of white closet doors, studio lighting, photorealistic
```

### No. 196: 黑白攝影棚肖像提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alex Prompts
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作黑白攝影棚肖像的提示，要求腰部以上、視線高度的中景鏡頭。

#### 提示詞

```text
A stunning black and white studio portrait of [uploaded person]. Eye-level medium shot, framed from the waist up. The subject is standing with his
```

### No. 197: 街頭藝術家創作的梅西壁畫致敬

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hendry Lim
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅超逼真的電影感照片，展示一幅完成的梅西壁畫及其創作者，採用方形構圖。

#### 提示詞

```text
THE DEVOTED (Finished Messi Mural + Artist) Aspect ratio: 1:1 (square) A hyper-realistic cinematic photograph, shot on Canon EOS R5, RF 35mm f/1.4L
```

### No. 198: 超現實主義肖像畫與電影級寫實感

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Wandering Corner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成融合古典與奇幻元素的超精細超現實主義肖像畫的提示。

#### 提示詞

```text
Ultra-detailed surrealist portrait painting blending classical romanticism, dreamlike naturalism, and cinematic fantasy realism. Human subjects rendered with graceful realism and poetic elegance, featuring luminous skin,
```

### No. 199: 經典故事與漫畫的體素藝術網格

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gadgetify
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成 2x2 網格體素藝術場景的提示，場景取材自公共領域故事和著名漫畫。

#### 提示詞

```text
2x2 grid, 16:9, do this for Shahnameh and 3 other non-copyrited public space stories: 2x2 grid, do this for 4 famous manga scenes: Function Render_Voxel_Art ($ Subject)
```

### No. 200: 身著足球球衣的女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名身穿紅色西班牙足球球衣的女子，在白色背景下與足球一起擺姿勢。

#### 提示詞

```text
a woman in a red Spanish football jersey sitting on the floor with a soccer ball, blonde hair in a ponytail, looking at the camera, studio lighting, white background
```

### No. 201: 雨中拉弓的蒙面弓箭手

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ahmad Faraz
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張超逼真的電影感肖像，描繪一名蒙面弓箭手在雨中拉弓的瞬間。

#### 提示詞

```text
A hyper-realistic cinematic close-up portrait of a hooded archer in the rain, caught at the peak moment of drawing a bow. The composition is tight and intense — the taut bowstring runs vertically down the exact center of the frame, bisecting
```

### No. 202: 職業足球時尚攝影棚場景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個職業足球時尚攝影棚場景的提示，包含乾淨的白色背景和極簡運動編輯風格。

#### 提示詞

```text
{
  "scene": {
    "setting": "professional football fashion studio",
    "background": "clean seamless white backdrop with minimalist sports editorial styling, premium commercial photoshoot environment, distraction-free composition emphasizing the
```

### No. 203: 動態紙海超現實編輯照

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個超現實、高成本實景特效鏡頭，主角居中，置身於巨大、漩渦般翻騰的鮮豔摺紙海洋中，帶有戲劇性的電影燈光。

#### 提示詞

```text
A high-end editorial, high-budget practical effect surrealism shot. The Grand Symmetrical Centering: The Protagonist stands perfectly centered within a massive, kinetic sea of swirling, folding paper. The paper is vibrant, textured, and moves in slow, graceful waves. The lighting is dramatic, cinematic, with strong directional light creating deep shadows and highlights on the paper folds and the protagonist's face. The atmosphere is ethereal and awe-inspiring.
```

### No. 204: 數學教授授課

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virginio Gallardo
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065501950271979617.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065501950271979617.mp4" controls muted playsinline width="720"></video>

#### 描述

一名身穿西裝的男子在教室的黑板上書寫三角函數方程式。

#### 提示詞

```text
a man in a suit writing mathematical equations on a chalkboard, realistic classroom setting, detailed facial features, natural lighting
```

### No. 205: 身著足球球衣的藝術家

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名身穿美國足球球衣的女子，在明亮、充滿植物的畫室中繪畫。

#### 提示詞

```text
a woman in a blue USA soccer jersey painting in an art studio, holding a paintbrush and palette, sitting on a stool, natural light from window, plants in background
```

### No. 206: Gemini Omni 變色龍

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Tanvir
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一隻盤繞的藍色變色龍尾巴特寫，圖像上疊印著「Gemini Omni」文字。

#### 提示詞

```text
close-up of a coiled blue chameleon tail with intricate scale patterns, natural lighting, green foliage background, text 'Gemini Omni' overlaid in white font
```

### No. 207: GlobalGPT AI 平台

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Theinfralab
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065506797608464624.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065506797608464624.mp4" controls muted playsinline width="720"></video>

#### 描述

GlobalGPT 網站的截圖，展示其 AI 工具和模型，背景色彩鮮豔豐富。

#### 提示詞

```text
A vibrant, colorful background with a computer screen displaying the GlobalGPT website, featuring AI tools and models, with a focus on image, chat, video, agents, and search options. The page highlights 'Access 100+ Powerful AI Models - All in One Place' and shows various AI model selections like GPT-5.5, Claude Opus, Gemini 3.1 Pro, and Grok 4.1 Fast. There are navigation menus for Home, Models & Tools, Image, Video, Audio, My Tools, and other AI tools. The interface includes a 'Compare plans' button, 'Upgrade Plan' option, and a promotional banner celebrating 2 years with GlobalGPT and offering up to 50% off. The bottom section showcases cutting-edge video and image models with thumbnail previews of different content types. The overall design is modern and sleek, with a mix of white, blue, and orange hues, and a dynamic, flowing background pattern in purple, orange, and pink.
```

### No. 208: Google I/O 標誌

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Google
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個代表 Google I/O 的鮮豔彩虹色標誌，帶有科技符號和括號。

#### 提示詞

```text
a colorful gradient logo featuring a stylized Android robot, a globe, a rectangle, a circle, a diamond, and a cursor, all enclosed in curly braces with a forward slash in the middle, on a white background
```

### No. 209: 歡迎回來圖形

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Google
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065509879138173373.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065509879138173373.mp4" controls muted playsinline width="720"></video>

#### 描述

一個簡潔現代的圖形，上面寫著「歡迎回來」，並在「welcome」一詞上方中央有一個鮮豔的多彩菱形圖案。

#### 提示詞

```text
Welcome back text with a colorful gradient diamond shape overlapping the word 'welcome', on a white background
```

### No. 210: 抽象幾何形狀

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Google
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

四組不同的紋理化幾何形狀以網格格式展示。

#### 提示詞

```text
four sets of abstract geometric shapes with different textures and patterns, including purple and orange, cosmic galaxy, fossilized bones, and pink and black swirls, arranged in a grid on white background
```

### No. 211: 孔雀材質轉換

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Google Flow
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065510479334691100.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065510479334691100.mp4" controls muted playsinline width="720"></video>

#### 描述

一隻孔雀以四種不同的材質形式呈現：自然、紙質、充氣式，以及內部有水生生物的玻璃。

#### 提示詞

```text
A peacock made of different materials: real feathers, recycled paper tickets, inflatable plastic, and glass with fish inside, all in a forest background
```

### No. 212: 逼真奢華時尚編輯肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張逼真的奢華時尚編輯肖像，描繪一位女子，使用參考圖像來設定臉部和髮色。

#### 提示詞

```text
Photorealistic luxury fashion editorial portrait of a woman, used reference image face, used reference image color hair
```

### No. 213: 昏暗酒店走廊閃光攝影場景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個影片場景提示，設定在夜晚昏暗的酒店走廊，具有閃光攝影美學。

#### 提示詞

```text
{
  "scene": "Dim hotel hallway at night, beige walls with gold sconce lamp, direct on-camera flash photography aesthetic, strong backlight halo around subject",
  "subject": {
    "pose": "standing facing camera, both hands resting on"
  }
}
```

### No. 214: 使用 Nano Banana Pro 製作的時尚編輯海報

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ΛRMIN | AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成高解析度、動態 3D 立體時尚廣告的提示，採用類比膠片拍攝。

#### 提示詞

```text
A precise, single full-page, high-resolution photographic print of a dynamic, 3D pop-out [luxury/fashion] advertisement for [BRAND_NAME], shot on high-fidelity analog film. The entire frame, from edge to edge, is filled by
```

### No. 215: 紅髮海妖 Instagram 拼貼影片提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成逼真垂直 Instagram 限時動態拼貼的提示，內容為一位一致的紅髮女子進行海妖角色扮演。

#### 提示詞

```text
Ultra-photorealistic vertical Instagram Story style 3x2 selfie collage, six candid frames of the same beautiful young woman, consistent face and identity across every panel. Red-haired siren cosplay-inspired night-out aesthetic, oceanic
```

### No. 216: 影片編輯軟體介面

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Curious Refuge
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065539761876672840.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065539761876672840.mp4" controls muted playsinline width="720"></video>

#### 描述

一款影片編輯應用程式的截圖，顯示上傳選項和範例編輯內容。

#### 提示詞

```text
A dark-themed video editing software interface with a central upload area showing a teddy bear in a car, a man's face in a circular frame on the right, and feature options below, all with a green border and modern UI design.
```

### No. 217: 鏡面反射

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sophia | AI Artist ✨
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位穿著紫色泳衣的女子站在鏡面房間中，形成多重反射。

#### 提示詞

```text
a woman in a shiny purple swimsuit with a knot front, wearing pink sunglasses, standing in a mirrored room with multiple reflections, wet skin, studio lighting, high detail, photorealistic
```

### No. 218: YouTube 收益成功

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Noah⚡️📈┃ YouTube Strategist
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張圖表，結合 YouTube 和星星符號代表 88,000 美元收益，並附有上升的綠色曲線圖。

#### 提示詞

```text
YouTube logo plus a glowing star symbol equals $88K, with a green upward trending graph on a wooden surface under a spotlight
```

### No. 219: Keor 健身房中的女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位健美的女子在健身房中自信地擺姿勢，身後有一個霓虹燈招牌。

#### 提示詞

```text
a confident woman in a gym, wearing a pink sports bra and white leggings, giving a thumbs up, neon sign 'Keor Gym' in the background, fitness equipment around, bright lighting, photorealistic
```

### No. 220: Madelyn Cline 臉部結構提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pinodi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個結構化的提示，指定了臉部生物特徵和結構，用於生成 Madelyn Cline 的相似形象。

#### 提示詞

```text
{
  "subject": {
    "identity": {
      "biometric_reference": "Madelyn Cline",
      "facial_structure": "Soft-edged heart-shaped facial contour, high malar bones"
    }
  }
}
```

### No. 221: Nano Banana 圖像轉 Higgsfield 唇形同步

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Darrin McBreen
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

在 Nano Banana 中創建圖像，作為 Higgsfield 唇形同步影片的起始幀。

#### 提示詞

```text
Make an image in Nano Banana and use it as the start frame in Higgsfield lip sync. You'll find it in the video menu tab. There you can also upload the audio portion of the song you want.
```

### No. 222: 深紅蘋果女王

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 紫ちゃん (⁠♡⁠ω⁠♡⁠ ⁠)⁠ ⁠~⁠♪💜
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位紫色頭髮的尊貴女子，坐在一顆巨大的紅色寶石蘋果上，背景是充滿水晶和燭光的哥德式大教堂。

#### 提示詞

```text
a fantasy queen with long purple hair, wearing a red and gold crown adorned with roses, sitting on a giant red gemstone apple, dressed in an elaborate red gown with intricate jewelry, in a dark gothic cathedral with glowing crystals and candles, cinematic lighting, highly detailed, 8k
```

### No. 223: GlobalGPT AI 工具

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Riya Ai
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065582038183186504.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065582038183186504.mp4" controls muted playsinline width="720"></video>

#### 描述

GlobalGPT 網站的宣傳截圖，展示 AI 模型和折扣優惠。

#### 提示詞

```text
A screenshot of the GlobalGPT website homepage with a colorful abstract background, showing AI tools like GPT-5.5, Claude Opus, and Gemini 3.1 Pro, with a banner celebrating 2 years and offering 50% off, displayed on a computer screen.
```

### No. 224: 羽絨外套模特

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ErwanXR ■●■
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065584046025970040.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065584046025970040.mp4" controls muted playsinline width="720"></video>

#### 描述

一張分割圖像，展示模特在對比鮮明的背景下穿著黑色和紅色羽絨外套。

#### 提示詞

```text
a model wearing a black puffer jacket on a dark background, and the same model wearing a red puffer jacket on a white background, high fashion photography, dramatic lighting, studio shot
```

### No. 225: 前衛時尚勁作

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ErwanXR ■●■
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065584838707470637.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065584838707470637.mp4" controls muted playsinline width="720"></video>

#### 描述

一部高強度的時尚影片，具有強烈的視覺與音效設計，主角是一位氣場強大的女模特兒，在四個不同的電影感場景中穿著未來感服裝。

#### 提示詞

```text
High-octane avant-garde fashion banger, 12s. Absolute musical silence. Audio track is strictly raw high-fidelity A SMR: aggressive fabric cracks, heavy wind swooshes, and bone-dry finger snaps acting as audio impact triggers. No music. Model & Attitude: One consistent female model with fierce runway aggression, immense charisma, and sharp, high-energy poses. She dominates the camera. Every single finger snap triggers an explosive camera shake, heavy directional motion blur, and a violent whip-pan hard cut. The Eclectic Visual Shatter (Cinematic Transitions): * Scene 1: Medium shot. Hyper-bright overexposed white studio. Model in a high-gloss crimson red puffer jacket, delivering a fierce, fast-paced performance. Instant violent snap cut. * Scene 2: Dynamic low-angle shot. Deep Rembrandt chiaroscuro lighting. Model in an ornate emerald green velvet Baroque gown, spinning with high velocity, canvas textures flying. * Scene 3: Extreme wide-to-macro camera push. Surreal open-air liquid mercury desert under a shifting chrome sky. Model in a fluid chrome dress, completely locked in a high-fashion frozen pose while the camera orbits aggressively around her. * Scene 4: Saccadic close-up tracking. High-tech Y3K sanctuary, deep cobalt blue grading. Model wears an armored body suit sculpted by volumetric laser beams, shifting geometric poses at stroboscopic speed. Cinematography: Hyper-aggressive camera tracking, intense lens pushes, sudden 90-degree Dutch angles, flawless facial continuity. 8k resolution, raw visual adrenaline, pure scroll-stopper.
```

### No. 226: 女子在水族箱旁的肖像提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Anaya Ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成超寫實肖像的提示，描繪一位面部特徵一致的女子站在家用魚缸旁。

#### 提示詞

```text
Ultra-realistic portrait of a beautiful young woman standing beside a large illuminated home aquarium, maintaining the same facial features, face shape, eye structure, hairstyle, and overall facial identity as the reference image. Long, voluminous dark
```

### No. 227: FIFA 世界盃球迷慶祝

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** latix.ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名開心的女球迷在 FIFA 世界盃比賽中慶祝，她在擠滿觀眾的體育場裡拿著一杯啤酒。

#### 提示詞

```text
a woman wearing a USA beanie and jacket, smiling and holding a beer, in a crowded stadium during a FIFA World Cup match, with the field and scoreboard visible in the background, vibrant lighting, realistic details
```

### No. 228: 帶註解的日常場景田野觀察

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alexandra Aisling
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個影片提示，將一個人的日常時刻描繪成一份帶有大量註解的田野研究員觀察記錄，邊緣浮動著各種手寫風格的筆記。

#### 提示詞

```text
A [PERSON'S] daily scene [SPECIFIC MOMENT: morning coffee, commute, dinner]rendered as a heavily annotated field-researcher's observation. Floating margin notes in different handwriting styles accumulate
```

### No. 229: 女子戴上飛行員頭盔的電影感鏡頭

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Saki H. 咲希
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成女子戴上飛行員頭盔全身鏡頭的電影感提示。

#### 提示詞

```text
A cinematic, dutch angle, full body shot of a young woman as in <<<image_1>>> cooly walking in profile, using both hands to put on an off-white, mobile suit pilot helmet with metallic black visor. She wears a tight, detailed,
```

### No. 230: 印有梅西肖像的拼布被

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hendry Lim
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位老婦人在燈光溫暖的家中，展示一條手工製作的拼布被，上面用各種布料拼貼出梅西的肖像。

#### 提示詞

```text
an elderly woman proudly holding a handmade patchwork quilt featuring a portrait of Lionel Messi, crafted from denim and fabric scraps, in a cozy vintage home with framed photos and lace curtains, warm natural lighting, realistic photography style
```

### No. 231: Y2K 風格隨拍肖像提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個結構化的提示，用於生成 Y2K 風格、不經意的閃光燈肖像，主角是一位極具酷感的大學女生。

#### 提示詞

```text
{
  "image_type": "candid flash lifestyle portrait",
  "core_identity": {
    "archetype": "effortlessly cool college girl",
    "visual_category": "Y2K candid snapshot",
    "aesthetic_family": [
      "2000s disposable camera photography"
    ]
  }
}
```

### No. 232: 空中移軸攝影：黃昏時的倫敦塔橋

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NUSRAT
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅超寫實的 4K 移軸空中俯瞰圖，描繪黃昏時分倫敦塔橋的景象，帶有溫暖的燈光與寧靜的氛圍。

#### 提示詞

```text
{"image_reference": "7744.png", "subject": "Aerial view of Tower Bridge in London at twilight", "style": "Tilt-shift photography, hyper-realistic, 4k resolution", "visual_elements": {"primary_structure": "Tower Bridge, illuminated with warm golden lights", "setting": "Twilight sky with deep blue and orange hues, calm River Thames reflecting lights", "atmosphere": "Serene, magical, slightly misty near the water", "details": "Long exposure light trails from boats, miniature effect from tilt-shift, sharp focus on bridge structure"}}
```

### No. 233: Apple Intelligence 對比 CapCut

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mehwish kiran
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Apple Intelligence 與 CapCut 應用程式標誌的對比圖，其中 CapCut 符號被劃掉。

#### 提示詞

```text
A split screen with the Apple Intelligence logo on the left and the CapCut logo crossed out with a red X on the right, black background, minimalist design
```

### No. 234: 超寫實時尚肖像攝影

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ai Bella
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於在極簡主義攝影棚中生成電影感、超寫實時尚肖像的提示。

#### 提示詞

```text
Ultra-realistic fashion portrait photography, UHD 18K, vertical aspect ratio 2:3, cinematic editorial masterpiece. A young women sits casually on a simple chair in the middle of a minimalist studio entirely covered in intense,
```

### No. 235: 電影感男性肖像（含臉部參考）

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Professor
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成電影感男性肖像的提示，能保留上傳圖像中的面部特徵與相似度。

#### 提示詞

```text
Use my uploaded face image as the primary identity reference. Preserve my exact facial features, face shape, hairstyle, hair texture, skin tone, eye shape, and overall likeness with high fidelity. Create a cinematic aesthetic male portrait
```

### No. 236: 駭客與同夥

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** FHM AI Autopsy Dossier
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065629018297442346.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065629018297442346.mp4" controls muted playsinline width="720"></video>

#### 描述

一名身穿黑色連帽衫的駭客正在操作筆記型電腦，而一名金髮女子在窗外下雨的昏暗房間裡專注地觀看。

#### 提示詞

```text
a man in a black hoodie and mask with glowing blue eyes typing on a laptop, a blonde woman standing beside him looking at the screen, rainy window in background, cinematic lighting, dramatic atmosphere
```

### No. 237: 夜間水池攝影

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** remix.camera
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名身穿深色泳衣的女子，在藍色燈光下的水池邊擺姿勢，進行時尚攝影。

#### 提示詞

```text
A woman in a black swimsuit sitting by a pool at night, illuminated by blue light, with a moody and revealing fashion aesthetic
```

### No. 238: Google 免費 AI 編輯器

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Waseem Ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張宣傳圖片，宣布 Google 推出免費 AI 影片編輯器，強調其功能與易用性。

#### 提示詞

```text
A man with glasses pointing at a laptop screen showing Google Gemini Omni AI Video Editor, with text 'R.I.P. CAPCUT? Google just dropped a FREE AI VIDEO EDITOR!', featuring before/after video editing examples, neon buttons for features like remove objects, change backgrounds, add effects, trim scenes, enhance quality, and a rocket launching, vibrant colors, bold typography, digital art style
```

### No. 239: 武術對決

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sparkful
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

在一間掛著紅燈籠、煙霧繚繞的昏暗中式餐廳裡，一位武術大師與兩名對手展開了一場戲劇性的打鬥場面。

#### 提示詞

```text
a martial arts fight scene in a traditional Chinese restaurant, featuring a bald man in a red silk robe fighting two men in vests, with red lanterns and smoke in the background, cinematic lighting, dynamic action poses, close-up of the master's face, 4k detailed, epic atmosphere
```

### No. 240: 使用智慧型手機的人

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mohammed Siraj
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065767365351194802.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065767365351194802.mp4" controls muted playsinline width="720"></video>

#### 描述

一個人手持智慧型手機，正在觀看螢幕上的社群媒體影片。

#### 提示詞

```text
a close-up of hands holding a smartphone displaying a social media video, realistic lighting, detailed skin texture, modern phone design, indoor setting
```

### No. 241: 浴室中的女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名皮膚濕潤的女子坐在浴室檯面上，微笑著觸摸自己的頭髮。

#### 提示詞

```text
a woman with red hair sitting on a bathroom counter, wearing a yellow tank top and white shorts, smiling at the camera, wet skin, surrounded by beauty products, bright natural lighting, realistic photo
```

### No. 242: 身穿條紋泳裝的女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名身穿紅黑條紋泳裝的女子坐在旅館房間的床上，俏皮地吐著舌頭。

#### 提示詞

```text
a woman in a red and black striped one-piece swimsuit with a bow, sitting on a bed in a hotel room, making a playful face, long brown hair, white hair clip, realistic lighting, high detail
```

### No. 243: 雪佛蘭變形玩具

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** nehal mujawar
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065770210943279406.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065770210943279406.mp4" controls muted playsinline width="720"></video>

#### 描述

一個人手持一個黑色方塊，它變形為一輛雪佛蘭汽車模型。

#### 提示詞

```text
a black cube-shaped toy car with Chevrolet logo being held and manipulated by hands, transforming from a cube to a car shape, realistic lighting, high detail, product photography
```

### No. 244: 香蕉皮瑜伽體式網格

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gadgetify
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065772170299707809.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065772170299707809.mp4" controls muted playsinline width="720"></video>

#### 描述

一個由香蕉皮和水果切片構成的瑜伽姿勢2x2網格圖。

#### 提示詞

```text
A 2x2 grid of different yoga asanas created from arranged banana peels and fruit Structure: [Panel: RANDOM yoga pose; banana peel limb positions, fruit body segments, peel flexibility showing stretch, brown
```

### No. 245: 秋日高級暗黑粗獷主義植物穹頂

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張超寫實的編輯照片，主角身處一個塵土飛揚、洞穴般的粗獷主義混凝土植物穹頂中。

#### 提示詞

```text
A hyper-realistic, medium-format editorial photograph of The Protagonist standing in a cavernous, dust-filled brutalist concrete botanical vault. The Protagonist
```

### No. 246: 名人時尚肖像資料集

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Anaya
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成名人時尚肖像與美學編輯的結構化資料集提示。

#### 提示詞

```text
{
  "total_records": 4,
  "theme": "Celebrity Fashion Portraits and Aesthetic Edits",
  "export_date": "2026-06-13"
}
```

### No. 247: 辦公室走廊中的男子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Sparks
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名穿著時尚的男子自信地走過現代化的辦公室走廊。

#### 提示詞

```text
a man walking in an office hallway, wearing a maroon bomber jacket, black t-shirt, blue jeans, and white sneakers, smiling at the camera, modern office interior with glass walls and plants, bright lighting, photorealistic
```

### No. 248: 配戴腦部頭盔的狗

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** __SWFX__
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065774404189950121.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065774404189950121.mp4" controls muted playsinline width="720"></video>

#### 描述

一隻大丹犬戴著一頂未來感頭盔，頭盔的玻璃圓頂內裝有大腦，牠在門邊流著口水。

#### 提示詞

```text
a gray great dane dog wearing a metal helmet with a glass dome containing a brain in green liquid, standing by a white door with keys, drooling, realistic lighting, cinematic shot
```

### No. 249: 男子與古董汽車模型

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** WeWant Mars
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名身穿西裝的男子坐在雜亂的書桌前，身旁有一個古董汽車模型和戴著高頂禮帽的貓，置身於堆滿書籍與舊式裝置的舒適書房中。

#### 提示詞

```text
a man in a suit and sunglasses sitting at a desk with a vintage car model, cats wearing top hats, books, typewriter, and old radio in a dimly lit study, cinematic lighting, hyper-detailed, 8k
```

### No. 250: AI像素藝術插圖

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** TheVortiq
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅以黑白方格在網格背景上拼出「AI」字母的像素藝術，並附有關於人工智慧的說明文字。

#### 提示詞

```text
pixel art style illustration of the word 'AI' made from black and white squares, with a grid background and text at the top reading 'MULTIMODAL MODEL [V3]', in a minimalist design with a dark gradient bottom section
```

### No. 251: 東亞女性垂直照片條拼貼

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成垂直照片條拼貼的提示，包含四張東亞女性的特寫肖像，背景為淺灰色。

#### 提示詞

```text
A vertical photo strip collage featuring four distinct, close-up portraits of a beautiful East Asian woman with long, wavy black hair, set against a clean, minimal light grey background.
```

### No. 252: 時尚拼貼中的女性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Asher Crowe 🪺
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065779881414173079.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065779881414173079.mp4" controls muted playsinline width="720"></video>

#### 描述

一個九宮格社交媒體風格圖像，展示一位女性穿著不同服裝，附有俄文標題與互動數字。

#### 提示詞

```text
a collage of nine images featuring a woman in various outfits and poses, each with Russian text overlays and view counts, styled like social media video thumbnails
```

### No. 253: 根據正面輪廓建立臉部風格世界

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Draven
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065787122074677708.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065787122074677708.mp4" controls muted playsinline width="720"></video>

#### 描述

一個根據臉部參考圖像生成生活風格網紅世界的提示。

#### 提示詞

```text
build a face style world for this face front profile
```

### No. 254: 沙漠冒險拼貼

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Shakil Islam
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065787527861305388.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065787527861305388.mp4" controls muted playsinline width="720"></video>

#### 描述

一幅戲劇性的沙漠場景，以電影拼貼風格呈現一輛未來感汽車、一名男子與一條巨蛇。

#### 提示詞

```text
a cinematic desert landscape at sunset with a futuristic car driving through sand dunes, a man standing in the desert, a giant snake emerging from the sand, and a car interior with a person driving, all in a collage format with a golden hour lighting style
```

### No. 255: 足球員慶祝時刻

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Parves Hossen
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名身穿曼城球衣的足球員在比賽場上微笑。

#### 提示詞

```text
a smiling football player in a light blue Manchester City jersey standing on a stadium field, with fans cheering and a scoreboard showing halftime, realistic lighting, detailed textures, 8k resolution
```

### No. 256: 天體經緯樞紐

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Artingent
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一座宏偉的蒸汽龐克天文台，內部充滿金色的天文儀器與正在工作的學者。

#### 提示詞

```text
a grand steampunk observatory with golden mechanical instruments, arched ceilings, stained glass windows, and people working at control panels, cinematic lighting, intricate details, 8k
```

### No. 257: 動感時尚攝影提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Singular Lab News ∞
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成女性動感時尚攝影的簡易提示。

#### 提示詞

```text
dynamic fashion photo of a woman
```

### No. 258: 未來城市交通

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Artingent
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一輛流線型的自動駕駛車輛，行駛於擁有先進科技與環保建築的未來城市中。

#### 提示詞

```text
futuristic self-driving pod with people inside, moving on a glowing elevated track in a high-tech city with green skyscrapers and holographic displays, cinematic lighting, 8k
```

### No. 259: 漂浮市場街區

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Artingent
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個手工製作的微型世界，充滿生物發光的貿易活動、植物建築與有機連結。

#### 提示詞

```text
a floating island market with bioluminescent plants, glowing flowers, and intricate organic architecture, viewed from above, fantasy art style, detailed miniature world, soft lighting, magical atmosphere
```

### No. 260: 動感彩虹運動鞋

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Insomnia
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065795417313325416.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065795417313325416.mp4" controls muted playsinline width="720"></video>

#### 描述

一隻色彩繽紛的運動鞋，搭配半透明鞋底，懸浮於深藍與橘色背景前，展現動態感與鮮明色彩。

#### 提示詞

```text
a vibrant rainbow-colored sneaker with a transparent blue sole, floating against a dark blue background with orange side panels, high detail, studio lighting, product photography
```

### No. 261: 女子情緒變化的非自然循環序列

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alin Cristian Tiganus (eyes2AI)
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065796704784306366.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065796704784306366.mp4" controls muted playsinline width="720"></video>

#### 描述

一個用於生成影片的提示，內容為一名女子根據參考圖像，以非自然但連續的序列循環經歷各種情緒。

#### 提示詞

```text
Make the woman go through all the emotions in image 2 in an unnatural sequence but continuous shot. Don't include image 2 in the video
```

### No. 262: 美妝產品拼貼

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Amira Zairi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個時尚的拼貼，展示奢華護膚品廣告，以模特兒和高級美妝產品為特色。

#### 提示詞

```text
A collage of six high-end beauty product advertisements featuring models posing with skincare products, each in a clean studio setting with soft lighting and pastel color schemes, showcasing brands like Laneige, Summer Fridays, Pure Beauty, Sol de Janeiro, Glow Recipe, and Tatcha, all presented in a minimalist and elegant style with white backgrounds and professional photography.
```

### No. 263: 與名人共度的舒適柔和燈光

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個影片提示，以柔和燈光、舒適衣著和輕鬆氛圍為特色，主角是名人Sabrina Carpenter、Jenna Ortega和Sadie Sink。

#### 提示詞

```text
Soft lights, cozy clothes, and absolutely no rush to be anywhere. Sabrina carpenter, Jenna Ortega, Sadie sink
```

### No. 264: 明亮現代客廳場景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個描述明亮現代客廳的提示，包含極簡當代室內細節。

#### 提示詞

```text
{
  "scene": {
    "setting": "bright modern living room",
    "background": "minimal contemporary interior with large windows allowing abundant natural daylight, soft neutral-colored walls, white sectional sofa, decorative pastel cushions in blush pink"
  }
}
```

### No. 265: Google Gemini大使

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Shubh Umre
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位學生大使分享他使用Google Gemini第一個月的經驗，強調在AI教育和社群建立方面的成就。

#### 提示詞

```text
A young man in a hoodie stands confidently in front of a vibrant blue and purple background with abstract digital elements. The image features the Google Gemini logo at the top, text reading 'My First Month as a Google Gemini Student Ambassador,' and several colorful boxes highlighting achievements like hosting events, introducing AI tools, and building a community. A quote at the bottom reads, 'Every session is not just about teaching AI, but about building a community that learns and grows together.' The Baderia Global Institute of Engineering and Management logo is in the corner. The overall style is modern, tech-inspired, and professional, with a focus on learning, leadership, and innovation.
```

### No. 266: AI提示詞庫介面

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 小海豚笔记 (AI & 副业探索)
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張AI提示詞庫的螢幕截圖，在深色背景上展示各種圖像範例和中文文字。

#### 提示詞

```text
A dark-themed AI prompt gallery interface with a grid of image examples, including portraits, cityscapes, and futuristic designs, featuring Chinese text and a modern UI layout
```

### No. 267: 咖啡豆神奇變身為咖啡館

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mr Das
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065807400242978921.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065807400242978921.mp4" controls muted playsinline width="720"></video>

#### 描述

一部電影感影片，一顆發光的咖啡豆旋轉並神奇地變身為一家設備齊全的咖啡館。

#### 提示詞

```text
A cinematic 10-second magical transformation video starting with a single glowing roasted coffee bean suspended in a dark empty space under a dramatic spotlight. The bean smoothly rotates, and as it turns, it begins to emit a warm amber light. From this light, a fully furnished, cozy café materializes around it in a seamless, magical transformation. The final shot is a wide-angle view of the completed café with soft lighting and steam rising from coffee cups, all within the 10-second duration.
```

### No. 268: 高精度面部參考圖像創建

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kashberg
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成圖像的提示，需使用附帶的面部參考圖，在奢華攝影棚環境中精確保留結構與身份特徵。

#### 提示詞

```text
Create image: use the attached image as the main facial reference with high precision while preserving exact facial structure, recognizable identity, facial proportions, skin tone, and natural asymmetry. A dramatic luxury executive studio
```

### No. 269: 身著白色褲裝的自信女子肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個攝影棚肖像提示，描繪一位微笑女子穿著白色褲裝，背景極簡。

#### 提示詞

```text
A full-length studio portrait of a confident, smiling woman with long, wavy brown hair, posing against a clean, minimalist white background. She is elegantly dressed in a tailored white pantsuit.
```

### No. 270: 懸崖上的奇幻戰士

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** TRZ. 充足
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位黑暗奇幻戰士站在霧氣繚繞的懸崖上，俯瞰著風暴肆虐的景色。

#### 提示詞

```text
a dark fantasy warrior standing on a misty cliff, wearing a long black cloak and holding a sword, with a stormy sky and distant mountains in the background
```

### No. 271: 嘉年華上的牛

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** fifikse
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位歡樂的女子在充滿色彩繽紛遊樂設施和景點的奇幻遊樂園中，與一頭牛自拍。

#### 提示詞

```text
a woman in a pink hoodie taking a selfie with a cow at a colorful amusement park, cows riding a roller coaster in the background, vibrant neon lights, cotton candy, fisheye lens effect, hyperrealistic, 8k
```

### No. 272: 身著深色服裝的休閒年輕男子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Zar⭕on
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成影片的提示，內容為一名20歲男孩隨意坐著，臉部和髮型保持一致，穿著特定的深色服裝和配飾。

#### 提示詞

```text
Keeping the same face and hairstyle of 20 years old boy with dark, wearing a black buffer shirt, black cargo lose jeans. brown-white sneakers, bracelet, chain, wristwatch, Sunglasses on eyes, sitting casually
```

### No. 273: 自信女子的細膩攝影棚全身肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成自信年輕女子高度細膩攝影棚全身肖像的提示。

#### 提示詞

```text
A highly detailed full-body studio portrait of a confident young woman
```

### No. 274: 紅髮女子的擬真肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sadie 🥀
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成紅髮、雀斑、藍眼年輕女子擬真肖像的詳細提示。

#### 提示詞

```text
A highly detailed photorealistic portrait of a beautiful young woman with vibrant red hair, fair skin covered in freckles, striking blue eyes, and a warm
```

### No. 275: 雀斑美人與金色眼眸

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kaan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位臉上帶有雀斑、塗抹著閃耀金色眼影的女子，在柔和光線的肖像照中向下凝視。

#### 提示詞

```text
a close-up portrait of a young woman with freckles and golden eyeshadow, soft lighting, dark background, elegant makeup, realistic skin texture, gold necklace, wavy hair
```

### No. 276: 紅髮女子與狐狸面具

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lex
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位有著鮮豔紅髮、身著綠色和服的女子，在傳統日式環境中手持一個白色狐狸面具。

#### 提示詞

```text
a woman with long red hair wearing a green kimono, holding a white fox mask, standing in a traditional Japanese setting, photorealistic, detailed, cinematic lighting
```

### No. 277: 系統重啟記憶禁令

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NftGeneration2
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065819524201349358.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065819524201349358.mp4" controls muted playsinline width="720"></video>

#### 描述

一個黑暗、未來主義的場景，帶有發光的光束和一件武器，並以青綠色顯示文字「SYSTEM REBOOT MEMORY BAN」。

#### 提示詞

```text
dark sci-fi scene with glowing blue and orange light beams, futuristic weapon in foreground, text overlay 'SYSTEM REBOOT MEMORY BAN', cinematic lighting, high contrast, cyberpunk aesthetic
```

### No. 278: 漂浮市場區

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** sayobonita
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一座奇幻的漂浮島嶼城市，有著發光的結構和花朵狀的圓頂，懸浮在夢幻般的天空中。

#### 提示詞

```text
a floating island city with bioluminescent architecture, giant flower domes, and glowing pathways, viewed from above, fantasy art style, intricate details, soft lighting, magical atmosphere
```

### No. 279: 擬真攝影棚女性肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成一位擁有長而波浪狀淺棕色頭髮、膚色白皙的年輕女性擬真攝影棚肖像的提示詞。

#### 提示詞

```text
{
  "image_description": "A highly detailed, photorealistic studio portrait of a stunning young woman with long, wavy light brown hair, fair skin with subtle"
```

### No. 280: 創作AI影片

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lunari
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065826537203445776.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065826537203445776.mp4" controls muted playsinline width="720"></video>

#### 描述

一個人的手臂特寫，在顯示著文字的電腦桌和螢幕前移動。

#### 提示詞

```text
a person's arm in motion, blurred, with a computer setup in the background, text overlay 'Creating an'
```

### No. 281: 肌肉發達、頭髮後梳的男子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成影片的提示詞，內容為一位居中、肌肉發達的男子，有著深色後梳頭髮和一縷散落的捲髮。

#### 提示詞

```text
An extremely muscular man stands confidently centered, facing the camera straight on, featuring dark, glossy, slicked-back hair with a single stray curl resting naturally on his right forehead, alongside a short
```

### No. 282: 紅裙女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位身著閃亮紅裙的女子，夜晚優雅地坐在車內。

#### 提示詞

```text
a woman in a red strapless ball gown sitting in the back of a car at dusk, glowing with sparkles, soft lighting, cinematic style
```

### No. 283: FIFA 2026獎盃擬真渲染

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Shams
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成FIFA 2026世界盃獎盃擬真產品渲染圖的提示詞。

#### 提示詞

```text
A highly detailed, photorealistic product render of the FIFA 2026 World Cup trophy
```

### No. 284: 地鐵階梯上的電影感時尚肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Anissa
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位優雅女子坐在地下鐵路樓梯上的電影感時尚肖像。

#### 提示詞

```text
Ultra-cinematic full-body fashion portrait of a young elegant woman sitting gracefully on the upper section of an underground subway staircase. Her body leans naturally against the stairs, with both arms extended and resting elegantly on the
```

### No. 285: 經典黑白男性攝影棚肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成輪廓分明、衣著簡約的男性專業黑白肖像的提示詞。

#### 提示詞

```text
A professional black and white studio portrait of a handsome man with sharp, masculine features, short dark curly hair, and light stubble. He is wearing a simple black t-shirt and dark pants.
```

### No. 286: AI生成迷因

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jack Roberts
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065841912154587510.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065841912154587510.mp4" controls muted playsinline width="720"></video>

#### 描述

一幅幽默的拼貼畫，將AI圖像生成與現實世界的物體和人物進行比較。

#### 提示詞

```text
a collage of three images: a toy car on a messy desk, a colorful abstract sculpture at night, and a man in a hoodie speaking into a microphone with text 'so Google', all in a meme format
```

### No. 287: 休息一下

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** TechieSA
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一則創意廣告，展示一名男子手持一根看似正從中間斷開的KitKat巧克力棒入睡。

#### 提示詞

```text
A cartoon man sleeping while holding a KitKat bar, with the bar breaking in half and the man's hands drawn as if he's breaking it, white background, minimalist style
```

### No. 288: 乳霜與寧靜

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Amira Zairi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位女子在寧靜、極簡的環境中，放鬆地坐在護膚乳霜罐旁。

#### 提示詞

```text
A woman in a light green silk outfit lying on a white surface next to a large jar of Protini Polypeptide Cream, soft lighting, clean minimalist background, product photography style
```

### No. 289: 免費AI課程列表

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Siddhant Garg
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一份包含17門免費AI課程的編號列表，以清晰、有序的表格形式呈現，並附有可點擊連結。

#### 提示詞

```text
A clean, minimalist list of 17 free AI courses with titles and short descriptions, each followed by a blue hyperlink URL. The text is black on a white background, formatted in a table with numbered rows and thin gray lines separating entries. The title 'Free AI courses' is at the top in bold, large font. The overall style is professional and educational, resembling a digital resource guide or tutorial slide.
```

### No. 290: 暮光燈繪展示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Олександр Цюцьмаць
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

三聯顯示幕上展示著一幅以城市天際線暮色為背景的燈光繪畫雕塑。

#### 提示詞

```text
three identical computer monitors displaying a long-exposure photo of a light painting sculpture on a rooftop at dusk, with a cityscape and mountains in the background, cinematic lighting, ultra-realistic, 8K
```

### No. 291: 夢幻韓式生活風格俯拍自拍肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** simply
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個編輯提示，旨在將照片後製成一名年輕女子的夢幻韓式生活風格肖像，採用俯拍自拍視角。

#### 提示詞

```text
Edit this photo and don't change the face, portrait 9:16. A dreamy Korean lifestyle portrait of a young woman lying on white bedsheets, captured from an overhead selfie perspective. She wears an oversized off-shoulder dark brown mohair knit sweater
```

### No. 292: 泳池邊的女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名身穿黃色泳衣的女子，在明亮的陽光下於泳池邊擺姿勢。

#### 提示詞

```text
a woman in a yellow one-piece swimsuit with a front tie, lying by a pool, sunlight casting shadows, high detail, realistic lighting
```

### No. 293: 灰色上衣女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** VogueGen
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名身穿灰色上衣的女子將衣服下拉露出胸部，同時觸摸著下巴。

#### 提示詞

```text
close-up of a woman in a gray shirt, pulling it down to reveal her breasts, with one hand on her chin and the other on her chest, soft lighting, realistic skin texture, pink background
```

### No. 294: 帶有科技標誌的男子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aziz Nizom
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065868004944990266.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065868004944990266.mp4" controls muted playsinline width="720"></video>

#### 描述

一名男子站在漸變背景前，背景上有三個不同的標誌，包括 Higgsfield Nano Banana Pro 以及兩個 Google 標誌的變體。

#### 提示詞

```text
a man with a beard wearing a black t-shirt, standing in front of a gradient background with three logos: Higgsfield Nano Banana Pro, Google, and Google Nano Banana, all clearly visible and well-lit
```

### No. 295: Google Omni 影片編輯

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Neurain
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065869899172602003.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065869899172602003.mp4" controls muted playsinline width="720"></video>

#### 描述

一個並排對比圖，展示了一段 AI 編輯的影片（一名男子與獅子）與原始片段的差異。

#### 提示詞

```text
A man with blonde hair sits on a green couch next to a lion, in a split-screen comparison showing an edited version with the lion and the original without it, under the text 'AI Video Editing Google Omni'
```

### No. 296: AI 發展 49

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Harun SEYHAN
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名男子在溫馨的家庭辦公室環境中，介紹最新的 AI 發展，背景有顯眼的科技品牌標誌。

#### 提示詞

```text
A man with glasses and a beard speaking in a cozy room with a fireplace, surrounded by AI logos like Claude, Grok, and OpenAI, with text overlays 'YAPAY ZEKA', 'Gelişmeleri-49', and a subscribe button, styled as a YouTube thumbnail.
```

### No. 297: 亮片連衣裙女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pinodi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名女子身穿閃爍的黑色亮片連衣裙，在光滑的金屬電梯內自信地擺姿勢。

#### 提示詞

```text
a woman in a black sequined dress standing in an elevator, looking at the camera, with her reflection visible in the mirror, wearing high heels and a matching handbag, modern metallic interior, studio lighting
```

### No. 298: 沙灘上看手機的兩名女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個提示，描述兩名年輕女子在陽光明媚的沙灘上微笑著看手機。

#### 提示詞

```text
Two young women are sitting closely together on a white blanket spread across a sunny sandy beach, smiling warmly as they both look down at a
```

### No. 299: 酒店房間裡的男子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** The maestro
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065887796204593661.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065887796204593661.mp4" controls muted playsinline width="720"></video>

#### 描述

一名年輕男子站在酒店房間裡，表情平靜地直視鏡頭。

#### 提示詞

```text
a young man with brown hair and green eyes, wearing a gray t-shirt with a lapel microphone, standing in a hotel room with a TV and bed in the background, soft natural lighting
```

### No. 300: GlobalGPT 網站截圖

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nayeem Sheikh
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065888648491680202.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065888648491680202.mp4" controls muted playsinline width="720"></video>

#### 描述

一張色彩鮮明的 GlobalGPT 網站截圖，展示了 AI 工具和促銷優惠。

#### 提示詞

```text
A screenshot of the GlobalGPT website homepage with a colorful abstract background, showing AI tools and models like GPT-5.5, Claude Opus, Gemini 3.1 Pro, and Grok 4.1 Fast, with a banner celebrating 2 years and offering up to 50% off, displayed in a modern browser window.
```

### No. 301: 白衣女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位身穿白色連衣裙、戴著眼鏡的女子，優雅地坐在時尚客廳的紫色沙發上擺姿勢。

#### 提示詞

```text
a beautiful woman with blonde hair and glasses, wearing a white satin dress and high heels, sitting on a purple couch in a modern living room, with a painting of an anime character on the wall, cinematic lighting, photorealistic
```

### No. 302: 巴黎大道的冰糖詩意

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** マグマグ
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065898537121185919.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065898537121185919.mp4" controls muted playsinline width="720"></video>

#### 描述

一個詩意的影片提示，描述巴黎大道如溶解的冰糖般隨季節變幻的景象。

#### 提示詞

```text
Rock-sugar boulevards dissolving into syrup, the color deepening from winter grey to spring blossom to the amber of fallen leaves — ten seconds, Gemini Omni.
```

### No. 303: 蕾絲中的熟睡嬰兒

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** SabiBoI Joshua✍🏿.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名新生兒安詳地睡著，身穿精緻的白色蕾絲服裝，頭戴珍珠髮帶。

#### 提示詞

```text
a sleeping newborn baby with dark skin, wearing a white lace dress and a pearl-embellished headband, lying on a soft white textured surface, soft lighting, photorealistic, 8k
```

### No. 304: 梅西對馬赫雷斯分割壁畫比賽日

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hendry Lim
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅超寫實電影風格照片，描繪了以方形構圖呈現的梅西與馬赫雷斯分割壁畫。

#### 提示詞

```text
"MATCHDAY: MESSI vs MAHREZ" (Split Mural) Aspect ratio: 1:1 (square) A hyper-realistic cinematic photograph, shot on Canon EOS R5, RF 35mm f/1.4L lens, ISO 320
```

### No. 305: 東亞年輕女性主題描述

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Iqra Saifi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個結構化的提示，描述一位表情平靜而專注、姿勢轉向的年輕東亞女性。

#### 提示詞

```text
"subject": {
      "demographic": "Young East Asian female",
      "expression": "Calm, neutral, slightly intense, looking directly at the viewer",
      "pose": "Torso turned away from the camera, head"
```

### No. 306: 寫實生日場景圖像生成

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個JSON格式的描述提示，用於生成一張寫實的生日場景圖像，畫面中有蠟燭火焰和五彩紙屑，風格自然。

#### 提示詞

```text
{
  "tool": "NanoBanana Pro",
  "task_type": "text_to_image_photoreal_candid_birthday_flame_confetti",
  "version": "v1.0"
}
```

### No. 307: 俯視情侶自拍街頭時尚

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張超寫實的俯視自拍，主角是一對時尚情侶，位於混凝土天花板下，呈現自然風格的街頭時尚美學。

#### 提示詞

```text
Ultra-photorealistic top-down couple selfie taken from above, stylish street-fashion aesthetic, cool candid vibe. A fashionable young couple stands close together under a textured concrete ceiling, looking up at the camera in a playful,
```

### No. 308: 浪漫情侶夜間活動自拍

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個描述提示，旨在生成一張超寫實、溫暖自然的情侶在夜間活動中的照片。

#### 提示詞

```text
Ultra-photorealistic romantic couple night-event selfie, real photograph, not illustration. Warm candid Instagram editorial aesthetic. Create a single close-up lifestyle photo of a handsome young man and a beautiful young woman together.
```

### No. 309: 莫娜風格的熱帶海洋公主自拍拼貼

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個寫實的垂直Instagram限時動態拼貼，包含六張自然風格的畫面，主角是一位風格一致的年輕女子，呈現熱帶海洋公主的美學。

#### 提示詞

```text
Ultra-photorealistic vertical Instagram Story style 3x2 selfie collage, six candid frames of the same beautiful young woman, consistent face and identity across every panel. Moana-inspired tropical ocean princess night-out aesthetic
```

### No. 310: 檔案復原特工角色設定圖視圖

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Cortex Visual ・ AI Movies
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個描述提示，用於生成一名身穿戰術裝甲的科幻特工的全身角色設定圖，包含正面、側面和背面視圖。

#### 提示詞

```text
full body character sheet, front view, side view, back view, Archive Recovery Operative, realistic sci fi, white and dark gray tactical armor
```

### No. 311: 六隻帶黑色輪廓的白狗

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heather Green
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

六隻帶有粗黑輪廓的白狗，置於純白的背景上。

#### 提示詞

```text
A collection of six white dogs with bold black outlines are scattered across a plain, bright white background, evenly spaced to create a balanced composition. Each dog is depicted in a different playful
```

### No. 312: 休閒姿勢的美少女戰士角色

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Noname Oasis
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位栩栩如生的年輕女子，打扮成美少女戰士，淺棕色頭髮梳成裝飾性的髮髻，在微風中於水泥長凳上擺出姿勢。

#### 提示詞

```text
young woman dressed as Sailor Moon, incredibly lifelike thin clinging fabrics, her sandy-blonde hair in Usagi's signature decorated chignons, she is posing casually on a simple concrete bench in a soft breeze
```

### No. 313: 來自照片靈感的藝術肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aiza
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個生成藝術肖像的描述提示，要求移除背景、服裝和髮型，同時保留臉部特徵。

#### 提示詞

```text
Using the person in the uploaded photo as our muse, we're removing all backgrounds, clothes, and hairstyles. The goal is to create an artistic piece while keeping all the original facial features and characteristics intact.
```

### No. 314: 博物館劫案逃脫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Digital Art Sensei
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065966067646882049.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065966067646882049.mp4" controls muted playsinline width="720"></video>

#### 描述

一名竊賊順著繩索降下，穿過一個充滿古代文物、僅有一道光束照射的宏偉博物館大廳。

#### 提示詞

```text
a masked thief in black gear rappelling down from a skylight in a dimly lit museum gallery with ancient statues on pedestals, dramatic lighting from above, cinematic atmosphere
```

### No. 315: 廢墟中的粉髮戰士

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** shawn_maybush
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位粉髮女孩在雨淋的戰火殘破城市中，無畏地面對一個腿部有紋身的高聳巨人。

#### 提示詞

```text
a young girl with pink hair in a black school uniform holding a katana with a pink ribbon, standing between the massive legs of a giant figure covered in kanji tattoos, in a rain-soaked, destroyed city street at night, cinematic lighting, hyper-detailed, 8k
```

### No. 316: 莎蒂·辛克的寫實肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sadie 🥀
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個詳細的描述提示，旨在生成莎蒂·辛克的寫實肖像，她有著古銅色肌膚，皮膚上掛著水珠，坐在一張現代風格的白色沙發上。

#### 提示詞

```text
A highly detailed, photorealistic portrait of a stunning young woman [Sadie Sink] with flawless tanned skin covered in glistening water droplets, sitting confidently on a white modern couch. She has long, straight
```

### No. 317: 女性主體細節描述提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個結構化的描述提示，詳細說明了用於影片生成的年輕女性外貌。

#### 提示詞

```text
{
  "subject_details": {
    "gender": "Female",
    "age": "Early to mid-20s",
    "complexion": "Fair with a warm, sun-kissed golden glow",
    "facial_features": [
      "Soft, natural brown eyes",
      "Relaxed, unstyled natural eyebrows"
    ]
  }
}
```

### No. 318: 深灰卡紙上的極簡素描

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Shirley Auspice
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個創作提示：在深灰色卡紙上，以粗獷、富有表現力的線條和書法般的能量，繪製一幅極簡素描。

#### 提示詞

```text
Create a minimalist sketch on dark, cool-toned gray cardstock using a bold, expressive style. The lines are fluid and minimal, freely outlining the form with a wild, calligraphic energy. There is no shading or tonal gradation—only extensive
```

### No. 319: 視差動畫演示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kuroyami
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2065977526321832367.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2065977526321832367.mp4" controls muted playsinline width="720"></video>

#### 描述

一個電腦裝置，螢幕上展示著視差動畫，一隻手正在操作滑鼠。

#### 提示詞

```text
A modern desk setup with a sleek monitor displaying a serene architectural scene by water, a white keyboard, a hand using a mouse, and text overlay 'Claude Design Nano Banana GPT Image 2 Parallax Animations', soft lighting, realistic style
```

### No. 320: 西班牙足球迷

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位身穿西班牙國家隊顏色服裝的年輕女子，正悠閒地躺在地毯上觀看電視轉播的足球賽。

#### 提示詞

```text
a young woman in a Spanish football team outfit lying on a rug, watching a soccer game on an old TV, surrounded by Spanish flags and football memorabilia, with popcorn and a drink nearby, warm indoor lighting, realistic style
```

### No. 321: 沙漠公路上的男子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hassan👑
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名男子站在夕陽絢爛的天空下，一條龜裂的沙漠公路上，手抓外套，表情嚴肅。

#### 提示詞

```text
a man standing on a desert road at sunset, wearing a white t-shirt, black jeans, and brown boots, holding a black leather jacket over his shoulder, with a dramatic pink and orange sky behind him, cinematic lighting, high detail, photorealistic
```

### No. 322: 她眼中的城市

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Sparks
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名女子的太陽眼鏡反射出一個發光的綠色未來城市景觀，與她柔和的五官及白色毛皮大衣形成鮮明對比。

#### 提示詞

```text
a woman wearing aviator sunglasses with a futuristic cityscape reflection, white fur coat, hands gently touching her face, hyper-realistic portrait, cinematic lighting
```

### No. 323: 身著西裝的梅西復古肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個提示，用於創作一幅復古風格的梅西插畫海報，他身穿深藍色西裝與領結。

#### 提示詞

```text
A vintage-style illustration poster featuring a detailed, smiling portrait of Lionel Messi. He is dressed sharply in a dark blue two-button suit jacket with a bowtie, white shirt, and a
```

### No. 324: 超寫實女性肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jarvis AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個詳細的提示，用於生成一張具有特定面部特徵的超寫實女性肖像。

#### 提示詞

```text
Ultra-photorealistic 8K RAW DSLR portrait of the exact same woman from the reference image, preserving 100% identical face, facial features, eye color and shape, eyebrow arch, nose, full lips with glossy red lipstick, long
```

### No. 325: 以真實感或攝影寫實風格包裝影片

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Martin Nebelong
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2066152063147401699.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2066152063147401699.mp4" controls muted playsinline width="720"></video>

#### 描述

一個提示，旨在透過攝影或寫實風格包裝影片，以增強其真實感。

#### 提示詞

```text
"Wrap the video in realism" or "Wrap the video in the realism of the photograph"
```

### No. 326: 手持足球的高級時尚肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kashberg
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張寫實的編輯肖像照，主角是一位手持愛迪達足球的年輕亞裔女性，採用特定的臉型與髮型。

#### 提示詞

```text
Use face and hair style from attached photo
subjec : Photorealistic high-fashion editorial portrait of a beautiful young Asian woman holding a ADIDAS TRIONDA 2026 soccer ball
pose: looking to camera from her shoulder
shoot tecnic: 3/4 body
```

### No. 327: 鬱金香花田中的女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名女子站在夕陽金輝下的粉色鬱金香花田中，溫暖的光芒照亮了她的臉龐。

#### 提示詞

```text
a young woman with blonde hair and blue eyes standing in a field of pink tulips at sunset, wearing a pink floral dress, soft lighting, warm colors, photorealistic
```

### No. 328: 祝你好運插畫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** TechieSA
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅幽默的卡通畫，描繪一名男子意外用錘子敲到手，並附有「祝你好運」文字及 IKEA 標誌。

#### 提示詞

```text
A cartoon-style illustration of a man holding a yellow hammer, looking distressed as he accidentally hits his hand with the hammer, surrounded by stars and lightning bolts, with the text 'Good Luck' at the top and the IKEA logo at the bottom, on a plain white background
```

### No. 329: 奈米香蕉專業圖像生成提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個結構化的 JSON 提示，用於生成具有特定主體身份與外觀的圖像。

#### 提示詞

```text
{
  "type": "image_prompt",
  "version": "1.0",
  "description": {
    "subject": {
      "identity": "Use uploaded reference image, keep identity exact",
      "appearance": {
        "expression": "Soft natural smile with calm dreamy eyes, warm"
```

### No. 330: 未來聯邦車輛

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Artingent
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一輛重裝甲軍用車輛停駐在雨中的未來都市，周圍有士兵與高聳的建築。

#### 提示詞

```text
futuristic armored military vehicle labeled 'Aegis Guard' and 'Federal Security', standing on a wet city street with soldiers and skyscrapers in the background, cinematic lighting, detailed sci-fi environment
```

### No. 331: 迷霧之上的水道

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Artingent
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一座奇幻的木造城市，建於迷霧繚繞的河峽之上，點綴著發光的燈籠與精緻的橋樑。

#### 提示詞

```text
a colossal suspended timber city with elevated rivers, carved bridges, and lantern-lit aqueducts weaving through mist-filled canyon skies, traditional East Asian architecture, wooden structures, foggy atmosphere, warm lighting, detailed fantasy cityscape, cinematic view
```

### No. 332: 狗仔隊風格的億萬富翁女友照片

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 𝗦𝗮𝗻𝗶𝗮
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張超現實的狗仔隊風格編輯照片，捕捉一位億萬富翁女友步出豪華酒店的瞬間。

#### 提示詞

```text
A hyper-realistic paparazzi-style editorial photograph capturing a billionaire girlfriend exiting an iconic five-star luxury hotel during a bright afternoon after an exclusive private event. A young woman (reference preserved), elegant,
```

### No. 333: 海灘度假村休閒時光

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sophia | AI Artist ✨
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位身穿花卉比基尼的女子躺在熱帶度假村的日光浴床上，背景是棕櫚樹和茅草屋頂的小屋。

#### 提示詞

```text
a woman in a floral bikini sitting on a lounge chair at a tropical resort, palm trees and thatched-roof bungalows in the background, bright sunny day, realistic photography
```

### No. 334: 發光真菌聖殿

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Artingent
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個微型藝術生物龐克世界，煉金術士在其中培育發光真菌並準備植物藥劑，場景為手工製作、氛圍濃厚的圓形漂浮領域。

#### 提示詞

```text
a circular, handcrafted, atmospheric miniature world floating in the sky, filled with bioluminescent fungi, glowing plants, and tiny alchemists working in a magical laboratory, intricate wooden shelves, winding staircases, and glowing green liquids, detailed fantasy art style, 3D render, cinematic lighting
```

### No. 335: 植物憂鬱肖像提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個超寫實肖像提示：主角在平靜的餘波中，背靠一面密集的牆。

#### 提示詞

```text
A hyper-realistic, dynamic bokeh close-up portrait of The Protagonist in the aftermath calm, leaning heavily against a dense, suffocating wall of massive, physically
```

### No. 336: 藍色爬蟲類特寫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Flyover Base
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2066165288274378931.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2066165288274378931.mp4" controls muted playsinline width="720"></video>

#### 描述

一隻藍色爬蟲類生物的特寫，擁有引人注目的黃色眼睛，置身於奇幻場景中。

#### 提示詞

```text
close-up of a blue reptilian creature with yellow eyes, detailed scales, cinematic lighting, fantasy environment
```

### No. 337: 都市階梯上的電影感肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heisenberg
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張超寫實的電影感肖像：一位戴眼鏡的年輕男子夜間坐在混凝土階梯上，身著全黑裝束。

#### 提示詞

```text
Ultra-realistic cinematic portrait of a young man wearing glasses sitting casually on concrete urban stairs at night, wearing an all-black outfit consisting of a black open button-up shirt layered over a black crew-neck t-shirt and loose black
```

### No. 338: 穿著足球球衣的兒童攝影棚肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aijaz
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個生成專業攝影棚肖像的提示：一位身穿國際足球隊球衣的幼童。

#### 提示詞

```text
Professional full-body studio portrait of a cheerful young child (4–6 years old) wearing an international football jersey, standing against a seamless black backdrop. High-end
```

### No. 339: 迷霧之上的水道

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** sayobonita
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一座奇幻的漂浮城市，擁有木製水道和橋樑，橫跨暮色中的迷霧水域。

#### 提示詞

```text
a misty ancient Asian-inspired floating city with wooden aqueducts, bridges, and lantern-lit buildings, rendered in a detailed fantasy art style, cinematic lighting, wide-angle view
```

### No. 340: 迷你玩具自我寫實照片

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ATHARI_ALF
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個創造寫實照片的提示：一個人拿著一個迷你玩具版的自己。

#### 提示詞

```text
Create a realistic photo of me holding a tiny miniature toy version of myself between my fingers. The miniature figure should look exactly like me, wearing the same clothes and hairstyle, designed as a cute Pixar-style 3D character with big
```

### No. 341: 迷你玩具自我寫實照片

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ATHARI_ALF
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個創造寫實照片的提示：一個人拿著一個皮克斯風格的迷你玩具版自己。

#### 提示詞

```text
Create a realistic photo of me holding a tiny miniature toy version of myself between my fingers. The miniature figure should look exactly like me, wearing the same clothes and hairstyle, designed as a cute Pixar-style 3D character
```

### No. 342: 超現實梅西電影感運動合成影像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hendry Lim
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張超現實、充滿電影感的運動攝影合成作品，以英雄肖像和三人動作組合呈現梅西，使用佳能相機拍攝。

#### 提示詞

```text
MESSI: PEAK (Hero Portrait + Action Trio)
Aspect ratio: 3:4 (vertical)
A hyper-realistic cinematic sports photograph composite, shot on Canon
```

### No. 343: 木質裝潢房間中的鏡面自拍

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sadie 🥀
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個影片生成提示：一位深棕色頭髮的年輕女子在優雅環境中自信地進行鏡面自拍。

#### 提示詞

```text
A stunning young woman with long, voluminous wavy dark brown hair cascading over her shoulders, taking a confident mirror selfie in an elegant wooden-paneled room.
```

### No. 344: 倚靠花崗岩牆的男子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個影片生成提示：一位英俊、健壯的男子自信地倚靠著一面風化的花崗岩牆。

#### 提示詞

```text
A handsome, fit man is positioned in a center composition, leaning confidently against a weathered boundary of rough-cut granite stone blocks speckled with gray and white quartz inclusions. He wears a navy blue
```

### No. 345: 2026年谷歌AI工具

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Omor Faruk
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一份包含22個谷歌AI工具的插圖列表，配有未來感機器人吉祥物和數位元素。

#### 提示詞

```text
A vibrant, futuristic infographic listing 22 Google AI tools for 2026, with a robot mascot holding a banana, surrounded by digital icons and glowing elements, in a cyberpunk style with neon colors and a dark background.
```

### No. 346: 高端時尚攝影棚場景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個極簡風格的時尚攝影棚場景提示，包含純白色背景。

#### 提示詞

```text
{
  "scene": {
    "setting": "high-end fashion studio",
    "background": "clean seamless white backdrop, minimalist"
  }
}
```

### No. 347: 雲端上的飛機

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** İbrahim Feyzullayev
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2066207002754269581.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2066207002754269581.mp4" controls muted playsinline width="720"></video>

#### 描述

一架商用客機在金色夕陽下，翱翔於雲海之上。

#### 提示詞

```text
a white and green Azərbaycan airplane flying above clouds at sunset, with golden light rays shining through the clouds, cinematic lighting, high detail, realistic rendering
```

### No. 348: Gemini Omni 影片演示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Signal Lab
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2066207818571481182.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2066207818571481182.mp4" controls muted playsinline width="720"></video>

#### 描述

一個未來主義的數位介面，展示Google的Gemini Omni AI模型將輸入內容轉換為影片內容。

#### 提示詞

```text
dark futuristic interface with grid overlay, glowing text, and multiple screens displaying AI media content, including a hand holding a holographic structure, sleek modern design, neon green accents, tech-themed layout
```

### No. 349: 皮克斯風格微型玩具自拍照片

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 𝓨𝓞𝓤𝓢𝓔𝓕
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張真實照片，描繪一個人拿著一個微型的皮克斯風格玩具版的自己。

#### 提示詞

```text
Create a realistic photo of me holding a tiny miniature toy version of myself between my fingers. The miniature figure should look exactly like me, wearing the same clothes and hairstyle, designed as a cute Pixar-style 3D character with big expressive eyes and a happy
```

### No. 350: 手持麥克風的女子拼貼

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Victoria Chimnaza Sunday.
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2066217635335827599.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2066217635335827599.mp4" controls muted playsinline width="720"></video>

#### 描述

一位手持粉色麥克風的女子出現在現代房間書架旁的多個重疊畫框中。

#### 提示詞

```text
a woman with long black hair in a black shirt and maroon pants holding a pink microphone, shown in multiple overlapping frames in a modern room with bookshelves, cinematic lighting, collage style
```

### No. 351: 世界盃巴西對德國比賽海報

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jahan Zaib
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個詳細的電影感提示，用於創作描繪傳奇的巴西對德國世界盃對決的垂直運動海報。

#### 提示詞

```text
Ultra-detailed cinematic FIFA World Cup 2026 match poster, legendary clash between Brazil and Germany, vertical sports artwork, dramatic split composition. On the left, a Brazilian football star in the iconic
```

### No. 352: 身穿圖案上衣的金髮女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位身穿彩色短版上衣和牛仔褲的女子在中性色調的牆壁前擺姿勢。

#### 提示詞

```text
a young woman with blonde hair wearing a pink and blue graphic long-sleeve crop top and blue jeans, standing against a plain wall, natural lighting, photorealistic
```

### No. 353: 半臉半足球肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Shams
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅將球員臉龐與半個足球融合的寫實肖像。

#### 提示詞

```text
Ultra-realistic photorealistic portrait of [Player Full Name]'s half face seamlessly stitched to half of a classic soccer ball, intricate stitching details where skin meets leather, highly detailed skin
```

### No. 354: 極簡工作室時尚場景提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個結構化的提示，用於在極簡的室內工作室環境中生成乾淨、具編輯感的時尚影片。

#### 提示詞

```text
{
  "scene": {
    "setting": "minimal indoor studio corner",
    "background": "plain warm off-white wall with subtle texture, clean uncluttered environment, no decorations, simple editorial fashion atmosphere",
    "lighting": "soft directional natural"
  }
}
```

### No. 355: 水晶魔像卡牌

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nick
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

兩張數位寶可夢風格卡牌，展示了一隻水晶魔像生物的進化，並附有詳細的狀態和能力。

#### 提示詞

```text
Two Pokémon-style trading cards side by side, featuring a Crystal Golem in Stage 1 and Stage 2 forms, with detailed stats, abilities, and artwork in a digital interface, vibrant purple and crystal themes, high detail, game card design
```

### No. 356: 復古花之力量海報提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minuit
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作帶有「MAKE LOVE NOT WAR」標語的迷幻1960-1970年代嬉皮海報的提示。

#### 提示詞

```text
Create a vintage 1960s–1970s flower power poster with the slogan “MAKE LOVE NOT WAR” as the main focus. Use a psychedelic hippie aesthetic, colorful floral patterns, peace symbols, warm sunset tones, retro typography, groovy
```

### No. 357: 護士裝扮肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位身穿護士裝的女子在戴上藍色手套時擺姿勢。

#### 提示詞

```text
a woman in a nurse costume with white uniform, red crosses, blue gloves, and dramatic makeup, posing against a white door
```

### No. 358: 身穿橙色球衣的女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位身穿荷蘭足球球衣的女子在紅色背景前俏皮地擺姿勢，雙手做出取景的手勢。

#### 提示詞

```text
a woman in a Netherlands football jersey with number 10, making a frame gesture with her hands, standing on one leg, against a red background, smiling, winking, wearing blue shorts, studio lighting, high detail
```

### No. 359: 機器人藝術家繪畫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NewsTongue
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位機器人藝術家在復古工作室中繪製一幅現代版的《星夜》，畫布上寫著「REVE 2.0」。

#### 提示詞

```text
a robotic artist in a painter's studio, wearing a beret and metallic mask, painting a reinterpretation of Van Gogh's Starry Night with the text 'REVE 2.0' on the canvas, oil paint splattered on clothes, warm candlelight, detailed brushwork, cinematic lighting, 8k resolution
```

### No. 360: 歷經戰火的鬥士電影感肖像提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ahmad Faraz
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成疲憊不堪、赤裸上身的男性鬥士超寫實特寫肖像的提示。

#### 提示詞

```text
A hyper-realistic cinematic close-up portrait of a battle-worn shirtless male fighter, head bowed downward in exhaustion or grim determination after a brutal fight. He has thick dark disheveled hair — soaking wet, matted, and falling forward
```

### No. 361: 遊艇上的女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sophia | AI Artist ✨
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位身穿藍色泳衣的女子站在遊艇上，回頭凝望，身後是海洋。

#### 提示詞

```text
a woman in a blue swimsuit standing on a yacht, looking over her shoulder, wearing pink sunglasses, sunny day, clear blue sky, ocean in background, realistic photography
```

### No. 362: 瓷器女神

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位女子從破碎的瓷器中浮現，帶有金色的修復痕跡，象徵著破碎中的美麗。

#### 提示詞

```text
a woman in a white corset made of shattered porcelain with gold kintsugi repairs, surrounded by flying shards of white ceramic and golden liquid, studio lighting, hyperrealistic, high detail
```

### No. 363: 理髮廳鏡中倒影

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hassan👑
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名有刺青的男子坐在理髮椅上，其倒影映照在鏡中，理髮師則站在他身後，呈現經典理髮廳場景。

#### 提示詞

```text
a man with tattoos getting a haircut in a vintage barbershop, reflection in the mirror, warm lighting from bulbs around the mirror, retro posters on the wall, barber standing behind him, realistic photography style
```

### No. 364: 雪梨·史威尼心形臉龐提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pinodi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成雪梨·史威尼擁有心形臉龐影片的結構化提示。

#### 提示詞

```text
{
  "subject": {
    "identity": {
      "biometric_reference": "Sydney Sweeney",
      "facial_structure": "Distinctive heart-shaped face morphology with a soft"
    }
  }
}
```

### No. 365: 黑色天鵝絨緊身胸衣時尚提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個詳細的時尚提示，指定黑色天鵝絨緊身胸衣上衣搭配銀色鏈條細節與深色長波浪髮型。

#### 提示詞

```text
{
  "wardrobe": "black strapless velvet corset top, clean matte finish, fine delicate silver chain draping from one shoulder across the collarbone, thin metallic body chain detail, no lace",
  "hair_makeup": "long dark textured wavy hair"
}
```

### No. 366: 石面與融化時鐘

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jason Heaton
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個超現實圖像，描繪一張石面與融化時鐘，位於黑暗螺旋樓梯中。

#### 提示詞

```text
a stone face carved from ancient ruins, with a melting clock hanging beside it, in a dimly lit spiral staircase, surreal and dreamlike, high detail, cinematic lighting
```

### No. 367: 編輯時尚肖像與象牙色禮服

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成編輯時尚肖像的提示，以一名自信模特兒身穿結構化象牙色緞面襯裙禮服為特色。

#### 提示詞

```text
{
  "scene": "editorial fashion portrait, confident upright stance, three-quarter turn toward camera, chin level, calm assertive gaze",
  "wardrobe": "structured ivory satin slip dress with thin straps, soft draping, subtle sheen, minimal"
}
```

### No. 368: 木造結構中的男子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Khlaseek designer
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名男子自信地站立在陽光照射的木造建築中，身穿深色西裝外套與襯衫。

#### 提示詞

```text
a confident Black man with a beard, wearing a dark blazer and shirt, standing in a modern wooden structure with large windows, warm sunlight streaming in, photorealistic portrait, cinematic lighting
```

### No. 369: 深紅色工作室舞蹈動態編輯

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成3x3網格的提示，展示一名身穿黑色天鵝絨緊身胸衣的女子在深紅色工作室中進行自然舞蹈動作。

#### 提示詞

```text
{
  "format": "3x3 contact sheet grid, 9 panels, same woman across all panels, candid dance-motion editorial, consistent crimson studio session",
  "wardrobe": "black strapless velvet corset top, clean matte finish, fine delicate silver"
}
```

### No. 370: 高級時尚舞蹈動態編輯排版網格

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成3x3排版網格的提示，展示同一名女子在深紅色工作室中進行高級時尚舞蹈動作。

#### 提示詞

```text
{
  "format": "3x3 contact sheet grid, 9 panels, same woman across all panels, high-fashion dance-motion editorial, consistent crimson studio session",
  "wardrobe": "white strapless structured corset top, clean matte finish, layered"
}
```

### No. 371: 黑暗中的發光球體

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** N Creates AI
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2066259869230133618.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2066259869230133618.mp4" controls muted playsinline width="720"></video>

#### 描述

一個黑暗場景，以兩個柔和溫暖的發光球體創造極簡抽象的視覺效果。

#### 提示詞

```text
dark background with two warm glowing orbs, soft bokeh effect, minimalist abstract composition
```

### No. 372: 動漫人偶場景模型

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gadgetify
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

四個高細節動漫動作人偶場景，展示來自《七龍珠》、《火影忍者》、《航海王》與《死神》的經典戰鬥。

#### 提示詞

```text
four detailed anime action figure dioramas featuring Dragon Ball, Naruto, One Piece, and Bleach characters in dynamic battle poses with energy effects and dramatic lighting
```

### No. 373: 義大利風雪梨·史威尼吃東西業餘鏡頭

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成雪梨·史威尼吃東西的、細微模糊低畫質業餘iPhone影片的提示。

#### 提示詞

```text
Subtle blurry low quality amateur iPhone shot of a stunning young Italian sydney Sweeney eating
```

### No. 374: Gemini Omni AI 燈光

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CHRIS FIRST
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2066279875049058606.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2066279875049058606.mp4" controls muted playsinline width="720"></video>

#### 描述

一名身穿白色T恤與帽子的男子手持麥克風，畫面疊加文字宣傳 Gemini Omni AI 工作室燈光。

#### 提示詞

```text
a man wearing a black cap and sunglasses, holding a microphone, with text overlay 'Gemini Omni AI Studio Lighting', indoor studio setting, warm lighting, realistic photo
```

### No. 375: 專業內容創作者背景替換

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CHRIS FIRST
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2066279881609269627.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2066279881609269627.mp4" controls muted playsinline width="720"></video>

#### 描述

將背景替換為科技網紅使用的高端桌面配置。

#### 提示詞

```text
Replace only the background behind the subject with a professional content-creator desk setup — a high-end desk and computer environment with cool-toned
```

### No. 376: 健康網紅背景替換提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CHRIS FIRST
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2066279884658471322.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2066279884658471322.mp4" controls muted playsinline width="720"></video>

#### 描述

一個將主體背景替換為專業美容與生活風格網紅背景的提示，以潔淨室內空間與溫暖燈光為特色。

#### 提示詞

```text
Replace only the background behind the subject with a professional beauty and lifestyle influencer backdrop — a clean, elegant interior with soft, warm ambient lighting
```

### No. 377: 專業電影工作室背景替換

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CHRIS FIRST
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2066279889322299408.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2066279889322299408.mp4" controls muted playsinline width="720"></video>

#### 描述

一個將主體背景替換為柔和、失焦的專業電影工作室環境的提示。

#### 提示詞

```text
Replace the existing background behind the subject with a professional film studio environment designed for a content creator — soft, slightly out-of-focus (shallow depth of field) so the subject stays sharp and the setting
```

### No. 378: 雨城戰士

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** shawn_maybush
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位身穿校服的女孩在雨濛濛的未來都市景觀中揮舞著劍。

#### 提示詞

```text
a young woman with pink hair in a school uniform holding a katana, standing in a rainy, neon-lit city street with debris and large legs framing the shot, cinematic lighting, high detail, 4k
```

### No. 379: 可口可樂勝利慶祝

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** SaaS Junction ✦ Daily AI News & Prompts
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一座由可口可樂罐製成的獎盃，伴隨著五彩紙屑和火花，慶祝勝利。

#### 提示詞

```text
A Coca-Cola World Cup trophy made entirely of red Coca-Cola cans, with golden confetti and sparklers exploding around it, on a vibrant red background, cinematic lighting, highly detailed, 3D render
```

### No. 380: 樂高世界盃獎盃

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** SaaS Junction ✦ Daily AI News & Prompts
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一座金色的樂高世界盃獎盃，周圍有五彩紙屑和閃光，宣傳一場築夢活動。

#### 提示詞

```text
A golden LEGO model of the FIFA World Cup trophy, detailed with LEGO bricks, surrounded by golden confetti and sparkles, with a red LEGO logo at the top, on a clean white background, cinematic lighting, high detail, 3D render
```

### No. 381: 騎乘藍色巨龍

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Rendar AI
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2066299066175181093.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2066299066175181093.mp4" controls muted playsinline width="720"></video>

#### 描述

一位騎手駕馭著雄偉的藍色巨龍翱翔於熱帶島嶼上空，下方是層疊的瀑布和碧綠的海水。

#### 提示詞

```text
first-person view of riding a blue dragon over a tropical island with waterfalls and ocean, cinematic lighting, highly detailed scales, fantasy art style
```

### No. 382: 石墨鉛筆素描雙人肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅在復古紙張上繪製的男女並排的細膩石墨鉛筆素描。

#### 提示詞

```text
A detailed graphite pencil sketch on a textured, off-white vintage paper background, featuring a dual portrait of a man and a woman positioned side-by-side. Both subjects are captured in a moment
```

### No. 383: 亡命牛仔電影感肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** WeWant Mars
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位粗獷的亡命牛仔在日落時分於塵土飛揚的舊西部木板路上的電影感肖像。

#### 提示詞

```text
A cinematic portrait of a ruggedly handsome outlaw cowboy in his mid-30s, intense dark eyes, tousled wavy dark hair, short beard, standing on a dusty Old West wooden boardwalk at golden hour sunset. He leans casually
```

### No. 384: 夜晚在床上的女性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Niharika Nm
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2066303158490693695.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2066303158490693695.mp4" controls muted playsinline width="720"></video>

#### 描述

一位女性蓋著粉色毯子在床上放鬆，床頭燈散發出溫暖的光芒。

#### 提示詞

```text
a woman lying in bed, wearing a gray off-shoulder sweater, with long brown hair, resting her head on her hand, soft warm lighting from a bedside lamp, cozy bedroom setting, cinematic lighting, realistic details
```

### No. 385: Pixel Drop 功能發布

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AIVAnet
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google Pixel Drop 功能的宣傳圖片，帶有螢幕反應效果。

#### 提示詞

```text
A woman pointing at large text 'Pixel Drop' with a Google logo and an orange 'Screen Reactions' button, clean white background, modern tech advertisement style
```

### No. 386: 美好氛圍 高潮迭起 復古圖形設計

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heather Green
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創建圓形復古風格圖形的提示，包含海洋日落景象和做舊文字。

#### 提示詞

```text
A circular graphic design features the words "GOOD VIBES HIGH TIDES" in a retro, distressed font. The text is layered over a stylized depiction of a sunset over the ocean.
```

### No. 387: 高級時尚編輯肖像身份參考

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Soaima
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成超寫實肖像的提示，要求從參考照片中精確保留面部身份特徵。

#### 提示詞

```text
Use the attached woman's photo as the exact identity reference. Preserve 100% of the original facial structure, proportions, features, skin tone, and overall likeness. Ultra-realistic high-fashion editorial portrait of a beautiful young woman.
```

### No. 388: 極簡繆思的單色時尚肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個為優雅女性創作的單色藝術肖像提示，包含特定面部特徵描述。

#### 提示詞

```text
Masterpiece fine-art monochrome fashion portrait of an elegant woman in her mid-20s, embodying the archetype of a modern minimalist muse. She possesses a soft oval face, subtle high cheekbones, a clean feminine jawline, and naturally full
```

### No. 389: 優雅花卉套裝

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Wandering Corner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位女性穿著時尚的米色花卉服裝，搭配高低裙和不對稱露肩上衣擺出姿勢。

#### 提示詞

```text
a woman in a beige floral off-shoulder crop top and high-low ruffled skirt, standing against a neutral background, elegant pose, soft lighting, photorealistic
```

### No. 390: 超寫實智慧型手機肖像提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aiza
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成年輕女性捲髮戴眼鏡的隨性手機照片的提示。

#### 提示詞

```text
Ultra-realistic candid smartphone photo, vertical 9:16. Close-up portrait of a young woman with shoulder-length wavy hair (dark roots, lighter ends) wearing round thin metal-frame glasses. Bright neon heart-shaped reflections visible in both
```

### No. 391: 超寫實水彩肖像提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Anaya Ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創建高解析度水彩寫實肖像的提示，嚴格要求根據參考圖像保留身份特徵。

#### 提示詞

```text
Ultra-realistic high-definition premium watercolor-realism portrait, 4:5 vertical composition, use the uploaded image as the only facial and identity reference with absolute identity preservation, maintaining the exact facial structure, bone proportions
```

### No. 392: 休閒裝扮的女性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Zara
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位女性自信地擺出姿勢，身著黑色背心和米色長褲，坐在白色凳子上，背景簡潔。

#### 提示詞

```text
a young woman with long brown hair, wearing a black tank top and cream-colored wide-leg sweatpants, sitting on a white wooden stool, looking at the camera, studio lighting, neutral background
```

此 README 由 `data/prompts_by_locale` 資料自動生成。

## More Atlas Cloud Tools

- 💻 [atlascloud-cli](https://github.com/AtlasCloudAI/cli) — run any model from your terminal.
- 🔌 [MCP Server](https://github.com/AtlasCloudAI/mcp-server) — connect Atlas Cloud to any MCP client.
- 🧠 [atlas-cloud-skills](https://github.com/AtlasCloudAI/atlas-cloud-skills) — Agent Skills for Claude Code / Codex / Gemini CLI.
- 🖼️ [atlascloud_comfyui](https://github.com/AtlasCloudAI/atlascloud_comfyui) — ComfyUI custom nodes for Atlas Cloud.
- 🔁 [n8n-nodes-atlascloud](https://github.com/AtlasCloudAI/n8n-nodes-atlascloud) — n8n automation nodes.
- 💬 [Discord](https://discord.gg/MWmMr4q9es) — join the community.
- 🌐 [Website](https://www.atlascloud.ai/?utm_source=github&utm_campaign=awesome-gemini-omni-prompts) — 300+ models, one API key.
