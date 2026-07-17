# 🎬 Awesome Gemini Omni 提示詞大全

![Awesome Gemini Omni Logo](./logo.png)

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Stars](https://img.shields.io/github/stars/AtlasCloudAI/Awesome-Gemini-Omni-API-Prompts?style=flat-square)](https://github.com/AtlasCloudAI/Awesome-Gemini-Omni-API-Prompts/stargazers)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/AtlasCloudAI/Awesome-Gemini-Omni-API-Prompts/pulls)
[![Prompts](https://img.shields.io/badge/prompts-1502%2B-blue.svg)](https://github.com/AtlasCloudAI/Awesome-Gemini-Omni-API-Prompts)

收錄 Gemini Omni 官方示例與提示詞指南示例，內嵌 OSS 影片預覽。

這個倉庫整理了 Gemini Omni 的公開影片案例。每條資料都帶影片預覽，並提供本地化提示詞，方便直接複用。

- **目前:** 繁體中文
- **其他語言:** [English](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/README.md) | [简体中文](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_zh.md) | [日本語](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_ja-JP.md) | [한국어](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_ko-KR.md) | [ไทย](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_th-TH.md) | [Tiếng Việt](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_vi-VN.md) | [हिन्दी](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_hi-IN.md) | [Español](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_es-ES.md) | [Español (Latinoamérica)](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_es-419.md) | [Deutsch](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_de-DE.md) | [Français](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_fr-FR.md) | [Italiano](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_it-IT.md) | [Português (Brasil)](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_pt-BR.md) | [Português](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_pt-PT.md) | [Türkçe](https://github.com/AtlasCloudAI/awesome-gemini-omni-prompts/blob/main/i18n/README_tr-TR.md)

## 🤔 什么是 Gemini Omni？

Gemini Omni 是 Google 的多模态视频生成模型，支持文生视频、图生视频、参考生视频，并原生音画同步。在 Atlas Cloud 上通过 `google/gemini-omni-flash/*` 调用。下面每条 prompt 的预览都由 Atlas Cloud 实际跑出。

## 📊 統計資料

| 指標 | 數量 |
| --- | ---: |
| 提示詞總數 | 1502 |
| 分類數 | 8 |
| 預覽影片數 | 448 |
| 最後更新 | 2026/07/17 |

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

### Twitter Community (1400)

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

### No. 393: According To My Nano Banana 2 Prompt 😂

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** SabL
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

According to my nano banana 2 prompt 😂

#### 提示詞

```text
@dhextwo According to my nano banana 2 prompt 😂
```

### No. 394: Ya Puedes Generar Fotos Y Videos Tuyos Sin

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Saul
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/ext_tw_video/2071674746932998144/pu/vid/avc1/720x1280/3cqCh1X4hz5hZ6Lb.mp4?tag=12)

<video src="https://video.twimg.com/ext_tw_video/2071674746932998144/pu/vid/avc1/720x1280/3cqCh1X4hz5hZ6Lb.mp4?tag=12" controls muted playsinline width="720"></video>

#### 描述

Ya puedes generar fotos y videos tuyos sin salir en cámara.

#### 提示詞

```text
Ya puedes generar fotos y videos tuyos sin salir en cámara.

Google Flow: Nano Banana hace imágenes reales tuyas y Gemini Omni crea tu avatar de IA desde cero. Lo animas y listo.

👇 Video completo en la respuesta
```

### No. 395: Back To School! Tzuyu Sana Nayeon Mina Twice

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Back to school!

#### 提示詞

```text
Back to school!

Tzuyu
Sana
Nayeon
Mina

Twice

Nano Banana Pro via AI Studio, prompt ⬇️
```

### No. 396: Infographics Ai Toolkit From Max Rylski – Brand

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Andrew Larder - Certified FORA Luxe Travel Advisor
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Infographics AI Toolkit From Max Rylski – Brand New AI Image Toolkit (with PLR) – HTML prompt generator, DFY prompts and more…
Create Amazing Looking Infographics With ChatGPT and Nano Banana

#### 提示詞

```text
Infographics AI Toolkit From Max Rylski – Brand New AI Image Toolkit (with PLR) – HTML prompt generator, DFY prompts and more…
Create Amazing Looking Infographics With ChatGPT and Nano Banana
```

### No. 397: Rachel Weisz - Gemini Nano Banana Pro Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Rachel Weisz - Gemini Nano Banana Pro

Prompt:
{
  "vibe_title_en": "Surreal Symmetry: The Wooden Palette and Painted Cheetah",
  "master_prompt": "A hyper-realistic, high-budget cinematic photograph.

#### 提示詞

```text
{
  "vibe_title_en": "Surreal Symmetry: The Wooden Palette and Painted Cheetah",
  "master_prompt": "A hyper-realistic, high-budget cinematic photograph. The Protagonist stands perfectly centered in a grand, symmetrical, dimly lit https://t.co/N3fd39WW9E
```

### No. 398: "Midjourney C'Est Nul Ils Sont 79Ème..." Désolé Mon

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** GenIArt
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

"Midjourney c'est nul ils sont 79ème..." 

Désolé mon cher Arnault mais votre article est complètement à coté de la plaque;
▪️ sur Artificial Analysis il s'agit de la v7 Alpha de midjourney d'une part

#### 提示詞

```text
@ArnaultChatel "Midjourney c'est nul ils sont 79ème..." 

Désolé mon cher Arnault mais votre article est complètement à coté de la plaque;
▪️ sur Artificial Analysis il s'agit de la v7 Alpha de midjourney d'une part qui date d'avril 2025, 
▪️d'autre part midjourney est mis sur le benchmark dans
```

### No. 399: Yeni Video: Uzayli Belgeseli̇ | Gemini Omni Agent

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozan Sihay
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Yeni video: UZAYLI BELGESELİ | Gemini Omni Agent ile Yaptım!

#### 提示詞

```text
Yeni video: UZAYLI BELGESELİ | Gemini Omni Agent ile Yaptım!
```

### No. 400: A Bath Before Bed!?😏🛁 Good Night, Sleep Well!💫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

A bath before bed!?😏🛁 
Good night, sleep well!💫

Lily James, My Model, Dua Lipa, Emily Rudd 💦
👉🏻Subscribe for more content!🔥

Nano Banana Pro via Hailuo Ai
Prompt:

{
  "type": "image_prompt",
  "styl

#### 提示詞

```text
{
  "type": "image_prompt",
  "style": "ultra realistic lifestyle photography",
  "prompt": "A smiling adult https://t.co/FSPpv3b0UL https://t.co/EauAONtN4f
```

### No. 401: They Keyframe It Out With Google Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** direnc enjoyer
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

they keyframe it out with google nano banana and then use a image to video model to create the animations which are edited together into one video

#### 提示詞

```text
@ToadTownPatriot they keyframe it out with google nano banana and then use a image to video model to create the animations which are edited together into one video
```

### No. 402: Most Tiktok Shop Brands Are Burning $50,000 Or

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ryan Cole
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Most TikTok Shop brands are burning $50,000 or more per month on content.

#### 提示詞

```text
Most TikTok Shop brands are burning $50,000 or more per month on content.

Hiring creators. Managing samples. Coordinating posting schedules. Running what amounts to a small agency just to stay consistent.

I've watched this change faster than almost anyone predicted.

Noah
```

### No. 403: A 26 Year Old In Cebu Makes $16,400

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pacho
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/amplify_video/2071688497501507584/vid/avc1/1080x1920/vsB5l9tU7CwQgJzC.mp4)

<video src="https://video.twimg.com/amplify_video/2071688497501507584/vid/avc1/1080x1920/vsB5l9tU7CwQgJzC.mp4" controls muted playsinline width="720"></video>

#### 描述

a 26 year old in cebu makes $16,400 a month off the woman in the white hoodie.

#### 提示詞

```text
a 26 year old in cebu makes $16,400 a month off the woman in the white hoodie. she has never existed.
look at the split in this clip. one half says real, one says ai generated. he is betting you cannot tell which is which, and you cannot.

here is the part that did not add up.
```

### No. 404: تخيل... إعداد مخطط معلوماتي (إنفوجرافيك) في 3 دقائق

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ضاري AI
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/ext_tw_video/2071692325173301248/pu/vid/avc1/720x1280/jkYuo_x_SXPqijR_.mp4?tag=12)

<video src="https://video.twimg.com/ext_tw_video/2071692325173301248/pu/vid/avc1/720x1280/jkYuo_x_SXPqijR_.mp4?tag=12" controls muted playsinline width="720"></video>

#### 描述

تخيل...

#### 提示詞

```text
تخيل... إعداد مخطط معلوماتي (إنفوجرافيك) في 3 دقائق فقط
يكمن السر في استخدام الأمر (prompt) المناسب + الاستعانة بـ Gemini Nano Banana
 لكن الواقع هو. أن الكثيرين لا يزالون يجهلون هذه التقنية
 إذا كنت ترغب في تعلمها أيضا اكتب "MAU" في التعليقات الآن
#تشليح_بارت_اطلب_والتشاليح_ترد
```

### No. 405: This Is The First Time Ai Surprised Me

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Voyz
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/amplify_video/2071692965492269056/vid/avc1/720x1280/WORTSuhEzSx5PtZz.mp4)

<video src="https://video.twimg.com/amplify_video/2071692965492269056/vid/avc1/720x1280/WORTSuhEzSx5PtZz.mp4" controls muted playsinline width="720"></video>

#### 描述

This is the first time AI surprised me not with its quality.

#### 提示詞

```text
This is the first time AI surprised me not with its quality.

And it was a little scary.

AI took the initiative on its own.

In the video, a guy is simply sitting on a couch, pretending to turn an imaginary steering wheel.

The exact same reference was sent to Nano Banana 2 and
```

### No. 406: Tribün Created With Nano Banana On King Of

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** mertzabun.ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Tribün

Created with Nano Banana on King of Prompt.

#### 提示詞

```text
Tribün

Created with Nano Banana on King of Prompt.

Web App &amp; Instagram links are in bio — comment under our Instagram posts or visit the website to get the prompt.
```

### No. 407: He Says The Girl In His Kitchen Makes

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Saylor
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/amplify_video/2071680713720508416/vid/avc1/720x1280/-nUpAD9kxP-3pDLo.mp4)

<video src="https://video.twimg.com/amplify_video/2071680713720508416/vid/avc1/720x1280/-nUpAD9kxP-3pDLo.mp4" controls muted playsinline width="720"></video>

#### 描述

He says the girl in his kitchen makes $10,000 a month and isn't real.

#### 提示詞

```text
He says the girl in his kitchen makes $10,000 a month and isn't real. 

In thirty seconds he never shows one account, one dashboard, one dollar.

Across the top the whole time: This AI makes $100,000 a year. He points at her. Red hair, grey sweatpants, standing at the blender,
```

### No. 408: تخيل... إعداد مخطط معلوماتي (إنفوجرافيك) في 3 دقائق

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ضاري AI
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/ext_tw_video/2071714031820533760/pu/vid/avc1/720x1280/F8kyhyoSlpG6T0Gd.mp4?tag=12)

<video src="https://video.twimg.com/ext_tw_video/2071714031820533760/pu/vid/avc1/720x1280/F8kyhyoSlpG6T0Gd.mp4?tag=12" controls muted playsinline width="720"></video>

#### 描述

تخيل...

#### 提示詞

```text
تخيل... إعداد مخطط معلوماتي (إنفوجرافيك) في 3 دقائق فقط
😋 يكمن السر في استخدام الأمر prompt المناسب + الاستعانة بـ Gemini Nano Banana
 لكن الواقع هو أن الكثيرين لا يزالون يجهلون هذه التقنية
 إذا كنت ترغب في تعلمها أيضاً، اكتب MAU في التعليقات الآن
#تشليح_بارت_اطلب_والتشاليح_ترد
```

### No. 409: Wts Gemini Pro 12 Month $3/Each - 5

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aydin Luxian
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Wts
Gemini pro 12 month $3/each

- 5 TB storage

Includes broader access to Google's most advanced models and more:
1.

#### 提示詞

```text
Wts
Gemini pro 12 month $3/each

- 5 TB storage

Includes broader access to Google's most advanced models and more:
1. Gemini App
Get 4x higher usage limits than without a Google AI plan, plus access to our Pro models, Deep Research, and more.

2. Google Flow
Get expanded access
```

### No. 410: Wts Gemini Pro 12 Month $3/Each - 5

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aydin Luxian
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Wts
Gemini pro 12 month $3/each

- 5 TB storage
- 1000 ai studio "token"

Includes broader access to Google's most advanced models and more:
1.

#### 提示詞

```text
Wts
Gemini pro 12 month $3/each

- 5 TB storage
- 1000 ai studio "token"

Includes broader access to Google's most advanced models and more:
1. Gemini App
Get 4x higher usage limits than without a Google AI plan, plus access to our Pro models, Deep Research, and more.

2. Google
```

### No. 411: Some Go Home Winners 🤩 Some Go Home

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Some go home winners 🤩
Some go home losers 😢

Nano Banana Pro via AI Studio, prompt ⬇️

#### 提示詞

```text
Some go home winners 🤩
Some go home losers 😢

Nano Banana Pro via AI Studio, prompt ⬇️
```

### No. 412: $32 In. $1,800 Out. 25 Minutes. A 20-Something

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 0xAI42.exe
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/amplify_video/2071705926164189185/vid/avc1/720x1280/9Z8geEW1zPQN01RO.mp4)

<video src="https://video.twimg.com/amplify_video/2071705926164189185/vid/avc1/720x1280/9Z8geEW1zPQN01RO.mp4" controls muted playsinline width="720"></video>

#### 描述

$32 in.

#### 提示詞

```text
$32 in. $1,800 out. 25 minutes. A 20-something in Florida is bankrupting the entire web-agency industry from a laptop, while executives on a Fortune stage still ask "does the consumer even want this?"

The video above is the boardroom version. Pause at 0:24. A Shopify panel
```

### No. 413: If Only Spring Would Play Its Gentle Melody

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Artlist | The Best All-in-One Platform f
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/amplify_video/2071729960814026752/vid/avc1/720x1280/BboV6PMHY8Wq-x6s.mp4?tag=14)

<video src="https://video.twimg.com/amplify_video/2071729960814026752/vid/avc1/720x1280/BboV6PMHY8Wq-x6s.mp4?tag=14" controls muted playsinline width="720"></video>

#### 描述

If only spring would play its gentle melody for us.

#### 提示詞

```text
If only spring would play its gentle melody for us.

A video crafted using the @ AI Toolkit, bringing together some of the most powerful tools available right now.
To celebrate the arrival of spring, I used Nano Banana 2 and Seedream 5.0 for the imag...
```

### No. 414: Sadie Sink, Emma Myers And Sydney Sweeney Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Society
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Sadie Sink, Emma Myers and Sydney Sweeney

Gemini Nano Banana Pro Prompt Below 👇

#### 提示詞

```text
Sadie Sink, Emma Myers and Sydney Sweeney

Gemini Nano Banana Pro Prompt Below 👇
```

### No. 415: Timeless Beauty, Artistic Studio Vibes. Gemini Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Timeless beauty, artistic studio vibes.

#### 提示詞

```text
A professional, high-quality portrait of a stunning young woman with dark hair styled in an elegant updo. She is wearing a simple black long-sleeved dress, a delicate gold necklace, and small gold hoop https://t.co/i8Te74cq1Q
```

### No. 416: A Little Rain Won'T Stop Me From Fighting

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

A little rain won't stop me from fighting tonight 🌧️⚔️ 

⚔️🤍◾ Ana de Armas, Karen Gillan and Miranda Cosgrove

Nano Banana 2 🍌

Prompt Below 👇

#### 提示詞

```text
A little rain won't stop me from fighting tonight 🌧️⚔️ 

⚔️🤍◾ Ana de Armas, Karen Gillan and Miranda Cosgrove

Nano Banana 2 🍌

Prompt Below 👇
```

### No. 417: Just Turned This 11-Second Clip Into A $10K–$14K/Month

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Falentez
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/amplify_video/2071711501589655552/vid/avc1/576x1024/V-Zgp6_RoeG6dCat.mp4)

<video src="https://video.twimg.com/amplify_video/2071711501589655552/vid/avc1/576x1024/V-Zgp6_RoeG6dCat.mp4" controls muted playsinline width="720"></video>

#### 描述

Just turned this 11-second clip into a $10k–$14k/month machine.

#### 提示詞

```text
Just turned this 11-second clip into a $10k–$14k/month machine.
While everyone else is still making ugly avatar videos or selling $27 prompt packs, he’s quietly delivering realistic talking UGC ads that brands actually pay premium rates for in 2026.

Here’s the exact
```

### No. 418: Google Gemini Nano Banana + Grok Imagine 🔥

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/amplify_video/2071749977089650688/vid/avc1/448x672/WkELHYNEsLM-L1Ii.mp4?tag=25)

<video src="https://video.twimg.com/amplify_video/2071749977089650688/vid/avc1/448x672/WkELHYNEsLM-L1Ii.mp4?tag=25" controls muted playsinline width="720"></video>

#### 描述

Google Gemini Nano Banana + Grok Imagine 🔥

Messi The Goat 🐐

Image Prompt :

A hyper-detailed digital art painting of Lionel Messi in the Argentina white and light-blue striped kit (jersey  running w

#### 提示詞

```text
A hyper-detailed digital art painting of Lionel Messi in the Argentina white and light-blue striped kit (jersey #10) running with the ball on an abstract pitch. He is surrounded by a swirling vortex https://t.co/TTkHeiQsCG
```

### No. 419: Which One Is Better? - Nano Banana 2

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** spaisee
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Which one is better?

#### 提示詞

```text
Which one is better?

- Nano Banana 2 wants to become the default visual layer of Google’s ecosystem.

- GPT Image 2 is turning ChatGPT into a full creative studio.

- Grok Imagine is betting on fast, social, image-to-video chaos.
```

### No. 420: Serious Gamers! Karina Ningning Winter Giselle Aespa Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Serious gamers!

#### 提示詞

```text
Serious gamers!

Karina
Ningning
Winter
Giselle

aespa

Nano Banana Pro via AI Studio, prompt ↓
```

### No. 421: تخيل... إعداد مخطط معلوماتي (إنفوجرافيك) في 3 دقائق

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ضاري AI
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/ext_tw_video/2071763582879223808/pu/vid/avc1/720x1280/zLBvgpXgy01MRmrk.mp4?tag=12)

<video src="https://video.twimg.com/ext_tw_video/2071763582879223808/pu/vid/avc1/720x1280/zLBvgpXgy01MRmrk.mp4?tag=12" controls muted playsinline width="720"></video>

#### 描述

تخيل...

#### 提示詞

```text
تخيل... إعداد مخطط معلوماتي (إنفوجرافيك) في 3 دقائق فقط. 
😋 يكمن السر في استخدام الأمر (prompt) المناسب + الاستعانة بـ Gemini Nano Banana.
 لكن الواقع هو... أن الكثيرين لا يزالون يجهلون هذه التقنية.
 إذا كنت ترغب في تعلمها أيضاً، اكتب "MAU" في التعليقات الآن 🔥💪

#قمر_الليله
```

### No. 422: Gemini Nano Banana Pro Prompt: Use The Attached

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** simeon-sanai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini nano banana pro 

prompt:
use the attached image as the main facial reference while preserving recognizable identity essence, facial proportions, natural asymmetry, facial harmony, natural faci

#### 提示詞

```text
use the attached image as the main facial reference while preserving recognizable identity essence, facial proportions, natural asymmetry, facial harmony, natural facial character, and realistic facial texture.

An extreme motion blur soft dreamy https://t.co/ecwQeRwsyu
```

### No. 423: Oh Finally, About Time For Nano Banana 3

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Darek Gusto
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Oh finally, about time for Nano Banana 3 to drop.

#### 提示詞

```text
Oh finally, about time for Nano Banana 3 to drop.

Should be based on Gemini 3.5 Flash.

My top wishlist:
-&gt; more objects in the prompt without losing coherence
-&gt; more details in the prompt without losing details of other elements
-&gt; editing the image with next prompt without
```

### No. 424: 3.5 Flash Nano Banana 3 Video?

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Yanhua
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

3.5 flash
nano banana 3
video?

#### 提示詞

```text
@OfficialLoganK 3.5 flash
nano banana 3
video?
```

### No. 425: 🚨 Google Just Made One Of Gemini'S Coolest

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Arslan Iqbal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🚨 Google just made one of Gemini's coolest AI features free.

#### 提示詞

```text
🚨 Google just made one of Gemini's coolest AI features free.

Starting today, eligible users in the U.S. can use Gemini's personalized AI image generation for free.

Previously, it was only available to paid subscribers.

Here's what makes it different:

Instead of writing
```

### No. 426: Does Logan Mean What I Think He Means?

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Brent Lynch
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/amplify_video/2071776503134867456/vid/avc1/1280x720/Ws8ukDqLNKL620eY.mp4)

<video src="https://video.twimg.com/amplify_video/2071776503134867456/vid/avc1/1280x720/Ws8ukDqLNKL620eY.mp4" controls muted playsinline width="720"></video>

#### 描述

DOES LOGAN MEAN WHAT I THINK HE MEANS?

#### 提示詞

```text
DOES LOGAN MEAN WHAT I THINK HE MEANS?

For those who hate vague X posts...

Seems to be a tease for .....
Google Omni Flash Global API Release

Google Nano Banana 2 Variant 

P.S. Google Omni can do QTE Video Scenes!
```

### No. 427: Nano Banana 2 On Gemini. Prompt: Create An

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano banana 2 on Gemini.

#### 提示詞

```text
Create an ultra-realistic luxury fashion editorial portrait in the style of a high-end minimal fashion campaign. The image should convey confident executive elegance with a monochromatic crimson aesthetic, combining modern power dressing with https://t.co/WpBG9OI1XU
```

### No. 428: Exclusive: Gemini 3.5 Pro Is Coming With New

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** WK
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

EXCLUSIVE:
Gemini 3.5 Pro is coming  with new Nano Banana Pro model and with new video model Gemini Omni Pro

Fingers crossed if true

#### 提示詞

```text
EXCLUSIVE:
Gemini 3.5 Pro is coming  with new Nano Banana Pro model and with new video model Gemini Omni Pro

Fingers crossed if true
```

### No. 429: Avant-Garde Portrait 🔥 Image On Google Gemini Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Avant-Garde  Portrait 🔥

Image on Google Gemini Nano Banana 2.

#### 提示詞

```text
Avant-Garde  Portrait 🔥

Image on Google Gemini Nano Banana 2.

Prompt ⬇️

Use the exact same face from the reference image and generate an avant-garde fashion editorial portrait, wearing a structured black Givenchy turtleneck. Face split exactly 50/50 between harsh light and
```

### No. 430: Generate With Gemini Nano Banana 2 Prompt: Create

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Duet | AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Generate with Gemini Nano Banana 2

Prompt: Create an ultra-realistic 8K fashion poster of  @ Duet  stylish young South Asian man with same hairstyle, and sharp facial features.

#### 提示詞

```text
Create an ultra-realistic 8K fashion poster of  @ Duet  stylish young South Asian man with same hairstyle, and sharp facial features. He is wearing a bright red oversized shirt, white loose fit trousers, white sneakers, and a black https://t.co/12qTlPPMKa
```

### No. 431: Nano Banana Pro On Gemini. Prompt: Photorealistic Vertical

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** DaniaSafvi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana pro on Gemini.

#### 提示詞

```text
Photorealistic vertical portrait of a young woman outdoors against a bright sky filled with soft, fluffy clouds; low-angle perspective from slightly below waist height, three-quarter length view capturing her from knees to head as she leans https://t.co/Xk7tl8soPA
```

### No. 432: Pov: It'S Just A Movie Scene... Or Is

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Miz
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

POV: It's just a movie scene...

#### 提示詞

```text
POV: It's just a movie scene... or is it? 🎬

Created with  Nano Banana Pro🤩

Use this prompt to create yours!

{
  "prompt": "Ultra-realistic cinematic booking photo portrait of a young woman with long copper-red hair styled in a loose side ponytail,
```

### No. 433: Google Just Released Gemini Omni: Type: "Make A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mohit Gupta
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google just released Gemini Omni:

Type: "Make a 60 second video of a cat learning to code"

Gemini does it in 10 seconds.

#### 提示詞

```text
Google just released Gemini Omni:

Type: "Make a 60 second video of a cat learning to code"

Gemini does it in 10 seconds.

Photorealistic. No Midjourney. No Runway.

Native AI video generation.

Video creators... how long until your job is 4 prompts?

#AI #Video #Google
```

### No. 434: Prompt Chain: Character Sheet → 12-Panel Storyboard →

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Richard Adair
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Prompt chain: character sheet → 12-panel storyboard → per-scene Nano Banana Pro images to prevent spatial drift → Veo first-frame I2V prompts for each clip → interpolation prompt for the final dolly-o

#### 提示詞

```text
Prompt chain: character sheet → 12-panel storyboard → per-scene Nano Banana Pro images to prevent spatial drift → Veo first-frame I2V prompts for each clip → interpolation prompt for the final dolly-out reveal.

Final pass: no music, foley-only audio control.
```

### No. 435: Nature Photography. Prompt Optimized Nano Banana 2 On

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 🇹🇷 İREM AKSOY 🇹🇷 Ⓥ #pallascataesthetics
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nature photography.

#### 提示詞

```text
@RockGrokAI Nature photography. Prompt optimized Nano banana 2 on @GeminiApp 
Check ALT for prompt
```

### No. 436: Nano Banana 2. Prompt: { "Image_Profile": { "Title"

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano banana 2.

#### 提示詞

```text
{
  "image_profile": {
    "title": "Noir Luxury Eyewear Editorial",
    "genre": "high-fashion portrait photography",
    "subcategory": "luxury eyewear advertising campaign",
    "visual_style": "minimal monochrome studio portrait",
    "aesthetic": "Tom https://t.co/JgoCCDReHz
```

### No. 437: ☕ Can Mornings Always Feel Like This? Created

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** HeYSriram.TSX
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

☕ Can mornings always feel like this?

#### 提示詞

```text
👇 https://t.co/c8OFOSirNB
```

### No. 438: Google Skipped The Expected Gemini 3.5 Pro Moment

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Builder Club
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google skipped the expected Gemini 3.5 Pro moment and shipped creative models instead.

#### 提示詞

```text
Google skipped the expected Gemini 3.5 Pro moment and shipped creative models instead.

Nano Banana 2 for images.
Gemini Omni Flash for video.

The interesting fight now is Google vs ChatGPT Images V2.
```

### No. 439: Room Service, Quiet Moments, And My Favorite Corner

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Natty Windstorm
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Room service, quiet moments, and my favorite corner of the hotel.

#### 提示詞

```text
Room service, quiet moments, and my favorite corner of the hotel. 🥤✨

Sadie Sink on  Nano Banana Pro🩷

Create yours now!!

{
  "prompt": "Ultra-realistic lifestyle portrait of a young woman with long wavy copper-red hair sitting comfortably in a plush
```

### No. 440: Nano Banana 2 Lite And Gemini Omni Flash

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Builder Club
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite and Gemini Omni Flash are about to drop.

#### 提示詞

```text
Nano Banana 2 Lite and Gemini Omni Flash are about to drop.

Images get faster and cheaper.
Video gets conversational editing.

Now Google has to prove it can pressure ChatGPT Images V2.
```

### No. 441: Created With Nano Banana Pro 🎨 Prompt: A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** lovimg_com
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Nano Banana Pro

🎨 Prompt:
A hyper-detailed digital art painting of Lionel Messi in the Argentina white and light-blue striped kit (jersey  running with the ball on an abstract pitch.

#### 提示詞

```text
A hyper-detailed digital art painting of Lionel Messi in the Argentina white and light-blue striped kit (jersey #10) running with the ball on an abstract pitch. He is surrounded by a swirli…

Created with @lovimg_com https://t.co/0Mwnw61FAe
```

### No. 442: Created With Nano Banana Pro 🎨 Prompt: Aren'T

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** lovimg_com
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Nano Banana Pro

🎨 Prompt:
Aren't they selling these already?

#### 提示詞

```text
Aren't they selling these already? They should. Here is the prompt for GPT and Nano Banana:
16:9 input_topic ::= "&lt;insert movie / game / manga / franchise or subject here&gt;" [topic_analysis]…

Created with @lovimg_com https://t.co/nXpouHtGNd
```

### No. 443: Digital Camera Flash Forever✨ Made By Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dockie
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Digital camera flash forever✨

Made by Nano Banana Pro 

Use my prompt!!

#### 提示詞

```text
Digital camera flash forever✨

Made by Nano Banana Pro 

Use my prompt!!

{
  "prompt": "Ultra-realistic Y2K lifestyle mirror selfie of a young blonde woman standing inside a stylish game room. Long layered blonde hair with soft face-framing curtain
```

### No. 444: Created With Nano Banana Pro 🎨 Prompt: Make

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** lovimg_com
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Nano Banana Pro

🎨 Prompt:
Make a same object 100%.

#### 提示詞

```text
Make a same object 100%.  Intricate multi-layered paper relief art with a luxurious handcrafted paper sculpture aesthetic, featuring strong dimensional 3D depth. Built from dozens of indivi…

Created with @lovimg_com https://t.co/mPC9AIOOTq
```

### No. 445: Not Everyone'S Cup Of Tea. More Like Tropical

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Katherine Arison
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Not everyone's cup of tea.

#### 提示詞

```text
Not everyone's cup of tea. More like tropical punch. 🌈

Jenna Ortega, Sydney Sweeney, Millie Bobby Brown, Sabrina Carpenter 

Nano Banana Pro Prompt Below 👇🏻👇🏻👇🏻
```

### No. 446: Created On Google Gemini Nano Banana Pro Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Laraib Fatima‎
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created on Google Gemini Nano Banana pro    

Prompt
Professional photography 4K ultra-realistic stylerama, portrait format 9:16, full shot of a real woman in studio.

#### 提示詞

```text
Created on Google Gemini Nano Banana pro    

Prompt
Professional photography 4K ultra-realistic stylerama, portrait format 9:16, full shot of a real woman in studio.

Framing: full body, from feet to head, leaning against large 3D signs. Pose: person standing, body slightly
```

### No. 447: Im Into Media Production. Claude For Prompt, Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mahaveer Rajput
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Im into media production.

#### 提示詞

```text
@DanielSmidstrup Im into media production.
Claude for prompt, nano banana pro for image, seedance 2.0 for video and kling 2.6 for video.
```

### No. 448: 20 Ai Tools I'M Using In 2026: Research

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

20 AI tools I'm using in 2026: Research: Perplexity, OpenClaw research agent, Claude.

#### 提示詞

```text
20 AI tools I'm using in 2026: Research: Perplexity, OpenClaw research agent, Claude. Writing: Claude, OpenClaw writer agent, Grammarly. Images: Midjourney, Nano Banana, DALL-E. Video: Veo 3, LTX Studio, Runway. Audio: ElevenLabs, Voicebox. Automation: OpenClaw, n8n, .
```

### No. 449: Google Is Preparing To Release "Nano Banana 2

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ananth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

google is preparing to release "nano banana 2 lite" and "gemini omni flash" image and video models.

#### 提示詞

```text
google is preparing to release "nano banana 2 lite" and "gemini omni flash" image and video models.
```

### No. 450: Nano Banana 2 Prompt- Use The Uploaded Reference

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Weinberg
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 prompt-

Use the uploaded reference image only for preserving the subject's facial identity, facial proportions, skin tone, hairstyle (unless specified otherwise), and overall likeness.

#### 提示詞

```text
Nano Banana 2 prompt-

Use the uploaded reference image only for preserving the subject's facial identity, facial proportions, skin tone, hairstyle (unless specified otherwise), and overall likeness. Do not copy the original background, pose, clothing, or lighting.

Create a
```

### No. 451: Get Paid With Ai... I Made A Condom

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Princess of X
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/amplify_video/2071822310173011968/vid/avc1/1080x1920/-dIi8qvVT4RlbmHF.mp4)

<video src="https://video.twimg.com/amplify_video/2071822310173011968/vid/avc1/1080x1920/-dIi8qvVT4RlbmHF.mp4" controls muted playsinline width="720"></video>

#### 描述

GET PAID WITH AI...

#### 提示詞

```text
GET PAID WITH AI...

I Made a CONDOM ad using only AI. 
AI is not just for making fun images, 
You can use your AI to promote different businesses and get paid in dollars or whatever currency you desire.

TOOLS USED:
Chatgpt - for image and product generation 
Whisk ( Omni Flash
```

### No. 452: Nano Banana Pro On Gemini. Prompt: Create A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** DaniaSafvi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana pro on Gemini.

#### 提示詞

```text
Create a hyper-realistic portrait of a young woman using the uploaded picture, She is standing indoors, positioned centrally in a medium full-shot composition that captures her from the thighs up. She is looking directly at the camera with a https://t.co/xpX91SbBfm
```

### No. 453: Created Nano Banana 2 Good Morning. Prompt. Grace

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** HiBå🫰
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created Nano banana 2
 Good morning.

#### 提示詞

```text
Created Nano banana 2
 Good morning.

Prompt.

Grace under pressure: True luxury isn't about what you own; it's about the poise, grace, and strength you carry within your soul.
A wide-angle, cinematic photograph taken at golden hour in the formal gardens of an Italian villa,
```

### No. 454: Gemini Nano Banana Pro Prompt: Convert This Image

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** simeon-sanai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini nano banana pro

prompt: Convert this image into a soft, handcrafted paper-cut layered illustration style, inspired by papercraft diorama aesthetics.

#### 提示詞

```text
Convert this image into a soft, handcrafted paper-cut layered illustration style, inspired by papercraft diorama aesthetics. Use smooth rounded shapes, simplified cute character proportions, and minimal facial details (dot eyes, blush cheeks) to https://t.co/IwsnD3aEi3
```

### No. 455: Sunlight Does Half The Work. ☀️✨ Sydney Sweeney

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sophia | AI Artist ✨
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Sunlight does half the work.

#### 提示詞

```text
Sunlight does half the work. ☀️✨

Sydney Sweeney · Hailee Steinfeld · Sabrina Carpenter · Millie Bobby Brown 💫

Gemini Nano Banana 🍌

prompt👇

#HaileeSteinfeld  #SydneySweeney #MillieBobbyBrown #SabrinaCarpenter  #NaturalBeauty #GoldenHourGlow #AIArt #DreamyVibes
```

### No. 456: Gemini Omni Vs Midjourney Vs Runway: Omni: Free-Ish

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mohit Gupta
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni vs Midjourney vs Runway:

Omni: Free-ish, built-in, photorealistic
Midjourney: $30/month, requires skill
Runway: $120-600/month, for professionals

In 6 months, Omni wins by default.

#### 提示詞

```text
Gemini Omni vs Midjourney vs Runway:

Omni: Free-ish, built-in, photorealistic
Midjourney: $30/month, requires skill
Runway: $120-600/month, for professionals

In 6 months, Omni wins by default.

Creator economy just got commoditized.

Who's pivoting?

#AI #Video
```

### No. 457: Jenna Ortega'S Post-Shower Glow Never Misses. 🚿💦 💜

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Katherine Arison
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Jenna Ortega's post-shower glow never misses.

#### 提示詞

```text
Jenna Ortega's post-shower glow never misses. 🚿💦

💜 Jenna Ortega 

Nano banana pro 🍌 prompt below 👇🏻👇🏻👇🏻
```

### No. 458: Would You Jump Off The World'S Tallest Building

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sharon Riley
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/amplify_video/2071830981858701312/vid/avc1/1920x1080/Dm2BjMbv5dY4gG3b.mp4)

<video src="https://video.twimg.com/amplify_video/2071830981858701312/vid/avc1/1920x1080/Dm2BjMbv5dY4gG3b.mp4" controls muted playsinline width="720"></video>

#### 描述

Would you jump off the world's tallest building on purpose?

#### 提示詞

```text
Would you jump off the world's tallest building on purpose?

Made by using Nano Banana pro + Seedance 2.0 on @budgetpixel 

image1 is the main character throughout the entire video. Use the exact face, hair, clothing, skin tone, necklace, and sneakers from image1. Identity lock
```

### No. 459: Nano Banana Pro For Image Reference And Character

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dp Singh yadav
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana Pro for image reference and character locking combined with Seedance 2.0, a ByteDance multimodal video model, hosted on the BudgetPixel AI platform which integrates multiple generation too

#### 提示詞

```text
@Just_sharon7 @budgetpixel Nano Banana Pro for image reference and character locking combined with Seedance 2.0, a ByteDance multimodal video model, hosted on the BudgetPixel AI platform which integrates multiple generation tools.
```

### No. 460: J’Utilise Nano Banana Pro Via Google Ai Studio

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gladys Assistant
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

J’utilise Nano Banana Pro via Google Ai Studio pour le génération de miniature YouTube notamment, ça demande de trouver son prompt mais une fois qu’on a un prompt bien calibré c’est vraiment super pro

#### 提示詞

```text
@antoineguilbert J’utilise Nano Banana Pro via Google Ai Studio pour le génération de miniature YouTube notamment, ça demande de trouver son prompt mais une fois qu’on a un prompt bien calibré c’est vraiment super propre le rendu ! Et pour le format, c’est specifiable dans l’outil
```

### No. 461: Nano Banana Pro Via Prompt: { "Type": "Image_Prompt"

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lore
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana Pro via 

prompt:
{
  "type": "image_prompt",
  "aspect_ratio": "4:5",

  "style": [
    "ultra realistic fashion portrait photography",
    "vintage glamour aesthetic",
    "editorial stu

#### 提示詞

```text
{
  "type": "image_prompt",
  "aspect_ratio": "4:5",

  "style": [
    "ultra realistic fashion portrait photography",
    "vintage glamour aesthetic",
    "editorial studio photography",
    "luxury beauty campaign", https://t.co/kX9sEPMMnP https://t.co/ow2nKGlRRn
```

### No. 462: Image Using On Gamini Nano Banana Pro Corrected

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 𝐊𝐢𝐧𝐳𝐚| 𝗔𝗜
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Image Using On Gamini Nano Banana Pro 

 Corrected Prompt
&gt; Full-body studio fashion portrait of a female subject with uploaded face as reference, lounging gracefully inside the hollow of a massive

#### 提示詞

```text
Image Using On Gamini Nano Banana Pro 

### Corrected Prompt
&gt; Full-body studio fashion portrait of a female subject with uploaded face as reference, lounging gracefully inside the hollow of a massive, 3D-rendered translucent lime-blue glass letter 'I'. She wears a glossy black
```

### No. 463: 🛠 Works With: Gpt Image 2 (Chatgpt Images

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** vucreates.ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🛠 Works with: GPT Image 2 (ChatGPT Images 2.0) · Midjourney v6+ · Google Gemini (Nano Banana) · Grok · Flux · Imagen · SDXL

📌 How to use: open ChatGPT → upload your real portrait → paste the prompt b

#### 提示詞

```text
🛠 Works with: GPT Image 2 (ChatGPT Images 2.0) · Midjourney v6+ · Google Gemini (Nano Banana) · Grok · Flux · Imagen · SDXL

📌 How to use: open ChatGPT → upload your real portrait → paste the prompt below → generate a vertical 9:16 image.

📝 MAIN PROMPT:
Use the uploaded
```

### No. 464: Sydney Sweeney, Elle Fanning, Natalie Portman And Millie

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nyra
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Sydney Sweeney, Elle Fanning, Natalie Portman and Millie Bobby Brown 😍

Nano Banana Pro 🍌

Prompt:
 
{
  "aspect_ratio": "4:5",
  "fileName": "1000021114.jpg",
  "subject": {
    "description": "Young

#### 提示詞

```text
{
  "description": "Young woman, dark hair.",
  "pose": "Hands in hair, legs crossed."
}
```

### No. 465: Prompt Ai Gemini Versi Os Windows Edisi Piala

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Inzaghi's Media
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Prompt AI Gemini Versi OS Windows Edisi Piala Dunia FIFA (Nano Banana)

Selengkapnya, silakan baca di sini (Miniblog - Inzaghi's Blog) :

#### 提示詞

```text
Prompt AI Gemini Versi OS Windows Edisi Piala Dunia FIFA (Nano Banana)

Selengkapnya, silakan baca di sini (Miniblog - Inzaghi's Blog) :
```

### No. 466: If You'Re Doing Ui/Ux Design With Claude Code

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** BOOTOSHI 👑
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

if you're doing UI/UX design with claude code and have image style references to give it (like from chatgpt or nano banana)

i figured out how to get a much better consistency in the  implementation o

#### 提示詞

```text
if you're doing UI/UX design with claude code and have image style references to give it (like from chatgpt or nano banana)

i figured out how to get a much better consistency in the  implementation of the ACTUAL design style

so first i  download the UX image gen reference from
```

### No. 467: Google Gemini Nano Banana Summer Escape Caption:'"'... Standing

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** HiBå🫰
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google Gemini Nano Banana
summer escape

Caption:'"'...

#### 提示詞

```text
Google Gemini Nano Banana
summer escape

Caption:'"'... Standing firm, looking forward, and creating my own waves. No distractions, just pure focus.

Prompt .

A photorealistic 8k image of a woman standing waist-deep in a clear turquoise sea, wearing a vibrant red dress and a
```

### No. 468: Time For A Quick Snack? Leeseo Yujin Wonyoung

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Time for a quick snack?

#### 提示詞

```text
Time for a quick snack?

Leeseo
Yujin
Wonyoung

IVE

Nano Banana Pro via AI Studio, prompt ⬇️
```

### No. 469: Nano Banana Pro On Gemini. Prompt: A Moody

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** DaniaSafvi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana pro on Gemini.

#### 提示詞

```text
A moody, cinematic portrait of a beautiful South Asian woman looking directly at the camera, framed by an old rustic wooden doorway.Composition &amp; Foreground: A vertical close-up shot where the woman stands inside a weathered, dark wood door https://t.co/A9OdM9YcOa
```

### No. 470: Small Act Of Respect Created With Gemini Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Luca Ai
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/amplify_video/2071852228160151552/vid/avc1/1280x720/XyDTRzj-5FfLcW8M.mp4)

<video src="https://video.twimg.com/amplify_video/2071852228160151552/vid/avc1/1280x720/XyDTRzj-5FfLcW8M.mp4" controls muted playsinline width="720"></video>

#### 描述

Small Act of Respect
Created with Gemini Nano Banana Pro
Prompt:

A realistic cinematic scene on a quiet suburban street during golden hour.

#### 提示詞

```text
A realistic cinematic scene on a quiet suburban street during golden hour. An elderly man, around 75 years old, wearing a light brown sweater, dark trousers, and glasses, struggles to carry two heavy grocery bags https://t.co/oi2YGrr1g1
```

### No. 471: How I Made My Kids A Real Illustrated

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jon Kludt
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

How I made my kids a real illustrated audiobook (and how you can too) 🧵

My kids wanted a bedtime story — a new one, about a boy and a dragon.

#### 提示詞

```text
How I made my kids a real illustrated audiobook (and how you can too) 🧵

My kids wanted a bedtime story — a new one, about a boy and a dragon. So instead of making one up and forgetting it by morning, I had my agent make the whole thing. The video above is the result: a
```

### No. 472: Gemini + Notebooklm Just Replaced An Entire Content

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/amplify_video/2071811657420910592/vid/avc1/1280x720/OdNgie8ZvBfGn4FL.mp4)

<video src="https://video.twimg.com/amplify_video/2071811657420910592/vid/avc1/1280x720/OdNgie8ZvBfGn4FL.mp4" controls muted playsinline width="720"></video>

#### 描述

GEMINI + NOTEBOOKLM JUST REPLACED AN ENTIRE CONTENT AND LEARNING STACK

And the most useful feature is hidden behind a workflow almost nobody is using.

#### 提示詞

```text
GEMINI + NOTEBOOKLM JUST REPLACED AN ENTIRE CONTENT AND LEARNING STACK

And the most useful feature is hidden behind a workflow almost nobody is using.

The Gemini Upgrades:

→ Nano Banana turns plans into clean images and editable marketing flyers

→ Memory import transfers
```

### No. 473: The Coffee Switch Created With Gemini Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hannah Ai
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/amplify_video/2071859767845212160/vid/avc1/1280x720/bTTDcnKrKZbze-Io.mp4)

<video src="https://video.twimg.com/amplify_video/2071859767845212160/vid/avc1/1280x720/bTTDcnKrKZbze-Io.mp4" controls muted playsinline width="720"></video>

#### 描述

The Coffee Switch
Created with Gemini Nano Banana Pro
Prompt:

A realistic, cinematic morning in a busy downtown city.

#### 提示詞

```text
A realistic, cinematic morning in a busy downtown city. A young professional wearing business-casual clothes rushes out of a modern coffee shop while checking the time on his smartwatch. He accidentally grabs the https://t.co/cOPIZt2y4P
```

### No. 474: Bigger Picture: Gemini Hit 750M Maus This Year

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** mary davis
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Bigger picture: Gemini hit 750M MAUs this year.

#### 提示詞

```text
Bigger picture: Gemini hit 750M MAUs this year. Google’s also teasing Daily Brief, Gemini Omni video model, and personal agent Gemini Spark
```

### No. 475: Created With Gemini Nano Banana 2 On Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Gemini Nano Banana 2 on 

Prompt 👇

A confident, serious male model with warm tan skin stands centered in the frame, leaning forward and slightly sideways toward a car with his weight shi

#### 提示詞

```text
Created with Gemini Nano Banana 2 on @GeminiApp

Prompt 👇

A confident, serious male model with warm tan skin stands centered in the frame, leaning forward and slightly sideways toward a car with his weight shifted and his left shoulder tilted lower. He wears a black shirt left
```

### No. 476: The Image Models Are Gpt Image 2, Wan

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** SeaArt.Ai🐋
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

The image models are GPT Image 2, Wan 2.7 Image Pro, Kling 3.0 Image, and Nano Banana.

#### 提示詞

```text
@anime3d The image models are GPT Image 2, Wan 2.7 Image Pro, Kling 3.0 Image, and Nano Banana. The other listed models are video models. 
As for Android, Unlimited benefits are supported there as well, but the exact models available may vary by platform.
```

### No. 477: Happy Moments Captured With Gemini Nano Banana Pro

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aijaz
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Happy moments captured with gemini nano banana pro 

Prompt 👇 

Prompt: Transform this photo into a whimsical folk flat illustration with doodle elements.

#### 提示詞

```text
Transform this photo into a whimsical folk flat illustration with doodle elements. Preserve the original composition and characters, but simplify all details into clean colorful flat shapes with a handmade https://t.co/UsfgwXjTP1
```

### No. 478: Prompt Ai Gemini Versi Os Macos Edisi Piala

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Inzaghi's Media
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Prompt AI Gemini Versi OS macOS Edisi Piala Dunia FIFA (Nano Banana)

Selengkapnya, silakan baca di sini (Miniblog - Inzaghi's Blog) :

#### 提示詞

```text
Prompt AI Gemini Versi OS macOS Edisi Piala Dunia FIFA (Nano Banana)

Selengkapnya, silakan baca di sini (Miniblog - Inzaghi's Blog) :
```

### No. 479: A Little Sparkle, A Little Mystery, And A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** glena Jenner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

A little sparkle, a little mystery, and a whole lot of elegance.

#### 提示詞

```text
A little sparkle, a little mystery, and a whole lot of elegance. 👑✨

💙 Jenna Ortega
💚 Olivia Rodrigo
💜 Millie Bobby Brown
💛 Scarlett johansson

Nano banana pro prompt 👇👇👇
```

### No. 480: Nano Banana 2 Prompt: Create An Ultra-Realistic Luxury

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano banana 2  

Prompt: Create an ultra-realistic luxury evening beauty editorial portrait of a radiant woman in her mid-to-late twenties, embodying timeless elegance, grace, and refined sophisticati

#### 提示詞

```text
Create an ultra-realistic luxury evening beauty editorial portrait of a radiant woman in her mid-to-late twenties, embodying timeless elegance, grace, and refined sophistication. She has a soft oval face with a delicately sculpted jawline and https://t.co/lNHsCHQSkr
```

### No. 481: Introducing Globalgpt Your All-In-One Ai Workspace 👉 Chat

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mujeeb Ahmed
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Introducing GlobalGPT  Your all-in-one AI workspace

👉 

Chat →  GPT-5.5, Gemini 3.5 flash, Claude Opus 4.8...

#### 提示詞

```text
Introducing GlobalGPT @GlbGPT: Your all-in-one AI workspace

👉 

Chat →  GPT-5.5, Gemini 3.5 flash, Claude Opus 4.8...
AI image → GPT-IMAGE-2, Nano Banana 2...
AI video → Seedance 2.0, Grok Imagine video 1.5, Sora 2, Kling 3.0...
AI audio → Eleven Lab
```

### No. 482: Lost In Quiet Rainy Thoughts. Gemini Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Lost in quiet rainy thoughts.

#### 提示詞

```text
A cinematic, high-quality photograph of a young woman with long, light brown hair gazing thoughtfully out of a window on a rainy day. She is wearing a cozy, deep blue knitted sweater and has her chin resting on her https://t.co/M92nzEvobD
```

### No. 483: Every Ai Tool You’Ve Been Paying For Separately

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Orlixx
- **語言:** `zh-TW`
- **影片:** [查看](https://video.twimg.com/amplify_video/2071878947013378048/vid/avc1/1080x1920/CF1CRaE7QFrBSFhy.mp4)

<video src="https://video.twimg.com/amplify_video/2071878947013378048/vid/avc1/1080x1920/CF1CRaE7QFrBSFhy.mp4" controls muted playsinline width="720"></video>

#### 描述

EVERY AI TOOL YOU’VE BEEN PAYING FOR SEPARATELY IS NOW IN ONE APP

Most people are juggling five subscriptions.

#### 提示詞

```text
EVERY AI TOOL YOU’VE BEEN PAYING FOR SEPARATELY IS NOW IN ONE APP

Most people are juggling five subscriptions. This puts the whole stack in one place.

Open it and it’s all just sitting there:

→ Seedream 4.5 and Nano Banana Pro, generate images from a prompt or a photo, up to
```

### No. 484: Gemini Personalized Image Generation Goes Free In Us

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Apollo
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Personalized Image Generation Goes Free in US

Google has expanded Gemini's personalized Nano Banana image generation to eligible free users in the US.

#### 提示詞

```text
Gemini Personalized Image Generation Goes Free in US

Google has expanded Gemini's personalized Nano Banana image generation to eligible free users in the US. The feature was previously limited to Plus Pro and Ultra subscribers. 

It was first announced in April as part of
```

### No. 485: Gemini Nano Banana Pro Prompt:An Editorial Fashion Photograph

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** liana
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Nano Banana pro 

Prompt:An editorial fashion photograph of a beautiful woman with long, flowing hair riding a brown horse in a lush, grassy meadow with a forest background.

#### 提示詞

```text
An editorial fashion photograph of a beautiful woman with long, flowing hair riding a brown horse in a lush, grassy meadow with a forest background. The woman is wearing a chic off-the-shoulder white dress with a black corset-style bodice and https://t.co/udNcttN9GP
```

### No. 486: What Gemini Omni Means: Video Production Went From

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mohit Gupta
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

What Gemini Omni means:

Video production went from:
→ $5k-50k per video
→ $0 (plus time)

That's a 1000x deflation in production costs.

#### 提示詞

```text
What Gemini Omni means:

Video production went from:
→ $5k-50k per video
→ $0 (plus time)

That's a 1000x deflation in production costs.

Netflix will use it. YouTubers will use it. Everyone will use it.

Video editors... your time is now.

Learn AI or learn to job search.
```

### No. 487: Ai Is Making Significant Strides In Various Sectors

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Friday🔱Maxi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

AI is making significant strides in various sectors.

#### 提示詞

```text
AI is making significant strides in various sectors. Bloom Energy and Brookfield expand their partnership to $25B, aiming to enhance sustainable energy solutions. Meanwhile, Google DeepMind's Gemini Omni Flash ranks second in Video Edit Arena, signaling a shift towards
```

### No. 488: Google Nano Banana 2 Lite Və Gemini Omni

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Deepaiaz
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072054169549279576.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072054169549279576.mp4" controls muted playsinline width="720"></video>

#### 描述

Google Nano Banana 2 Lite və Gemini Omni Flash modellərini təqdim edib.

#### 提示詞

```text
Google Nano Banana 2 Lite və Gemini Omni Flash modellərini təqdim edib.

Google Nano Banana 2 Lite və Gemini Omni Flash modellərini istifadəyə verib. Nano Banana 2 Lite təxminən 4 saniyəyə şəkil yaradır və aşağı qiyməti ilə diqqət çəkir. Gemini Omni Flash isə video generasiyası
```

### No. 489: Google Just Made A Very Clear Statement About

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Shohag Hossain ⚡️
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google just made a very clear statement about where generative media is going: fast, cheap and deeply programmable.

#### 提示詞

```text
Google just made a very clear statement about where generative media is going: fast, cheap and deeply programmable.

They’ve launched Nano Banana 2 Lite and Gemini Omni Flash two models engineered not just for quality, but for speed and unit economics.

Nano Banana 2 Lite is now
```

### No. 490: Ok I'Ll Admit, This Omni Ai Is Scarily

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Danny
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Ok I'll admit,

this Omni AI is scarily impressive, imagine making some Zach King level content.

#### 提示詞

```text
Ok I'll admit,

this Omni AI is scarily impressive, imagine making some Zach King level content.

you can actually access Nano banana 2, Veo &amp; Omni via Google Flow.

Check the comments to see, one video I made ↓

let me know if you be trying this out
```

### No. 491: $Googl Released Nano Banana 2 Lite For Image

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Flyway Capital
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

$GOOGL released Nano Banana 2 Lite for image generation and Gemini Omni Flash for video creation on Tuesday, expanding its Gemini AI lineup.

#### 提示詞

```text
$GOOGL released Nano Banana 2 Lite for image generation and Gemini Omni Flash for video creation on Tuesday, expanding its Gemini AI lineup.
```

### No. 492: Icymi: Google'S Latest Gemini Media Drop Is Really

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Digg
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

ICYMI: Google's latest Gemini media drop is really a pricing move.

#### 提示詞

```text
ICYMI: Google's latest Gemini media drop is really a pricing move.

@GoogleDeepMind says Nano Banana 2 Lite can make images in under 4 seconds at $0.034 per 1K image, while Gemini Omni Flash brings $0.10/sec video editing to the API...
```

### No. 493: Yooo, Gpt Image 2 On Chatgpt Makes This

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** PromptLab
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

yooo, GPT Image 2 on ChatGPT makes this black-and-white editorial collage look insanely real 🔥

Full prompt: 

prompt:

unlimited nano banana pro, vintage black and white AI photo collage with an anal

#### 提示詞

```text
https://t.co/7v2zncvnJS

prompt:

unlimited nano banana pro, vintage black and white AI photo collage with an analog film editorial look, cinematic monochrome portrait https://t.co/sMLUPTEarY
```

### No. 494: We Published A Skill For Omni Flash So

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Philipp Schmid
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072057651677257803.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072057651677257803.mp4" controls muted playsinline width="720"></video>

#### 描述

We published a skill for Omni Flash so you can bootstrap video editing into your agent:

```
npx skills add google-gemini/gemini-skills --skill gemini-omni-flash-api
```

The skill covers the core wor

#### 提示詞

```text
npx skills add google-gemini/gemini-skills --skill gemini-omni-flash-api
```

### No. 495: Nice To See Nano Banana 2 Lite And

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** king arthur
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

nice to see nano banana 2 lite and gemini omni flash both rolling out together.

#### 提示詞

```text
@GoogleDeepMind @GoogleAIStudio nice to see nano banana 2 lite and gemini omni flash both rolling out together. excited to test the video editing workflow.
```

### No. 496: Gemini Omni Is So Nice And Lovely. Generates

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Praveen Thirumurugan
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072059203880108475.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072059203880108475.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni is so nice and lovely.

#### 提示詞

```text
Gemini Omni is so nice and lovely. Generates videos quickly and adheres to the prompt well! 🤟💕

Prompt attached to the thread.
```

### No. 497: Update: Google Just Made Gemini Omni Flash Available

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kervint Media
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072060876618633489.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072060876618633489.mp4" controls muted playsinline width="720"></video>

#### 描述

UPDATE: Google just made Gemini Omni Flash available to developers.

#### 提示詞

```text
UPDATE: Google just made Gemini Omni Flash available to developers.

The AI model can generate and edit videos using text, images, and video prompts. It also lets users refine videos through a back-and-forth conversation instead of starting over each time.
```

### No. 498: Google Just Launched 4-Second Images. $0.034 Each. Already

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Digital JPrateek
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google just launched 

4-second images.

#### 提示詞

```text
@GoogleAI Google just launched #NanoBanana2Lite

4-second images. $0.034 each.
Already inside #GoogleAds

+ Gemini Omni Flash turns them into video at $0.10/sec.

The creative bottleneck just died. 🎨

What are you building with it?
#GeminiOmniFlash #GoogleAI #GenerativeAI #AIMarketing
```

### No. 499: The Inference Cost Curve For Generative Media Just

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Prasenjit Sarkar
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

The inference cost curve for generative media just stepped down again.

#### 提示詞

```text
The inference cost curve for generative media just stepped down again.

Google shipped two models today. Nano Banana 2 Lite (Gemini 3.1 Flash-Lite Image): $0.034 per image at 1K resolution, 4 seconds per output, 2.7x faster than Gemini 3.1 Flash Image. Its arena Elo score is
```

### No. 500: So Fast... Nano Banana 2 Lite Generated This

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kaan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

So fast...

#### 提示詞

```text
So fast... Nano Banana 2 Lite generated this image in just a few seconds.

Prompt ⤵️
White background, stark, neutral ambient light, no horizon line, pure negative space surrounding the artwork.
A single central ink scribble portrait of a man with his eyes closed, laughing deeply
```

### No. 501: Lo Nuevo De Google Hoy No Es "Otro

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CEGM
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Lo nuevo de Google hoy no es "otro modelo".

#### 提示詞

```text
Lo nuevo de Google hoy no es "otro modelo".

Es una cadena creativa:

1. Nano Banana 2 Lite: imágenes en ~4s y $0.034 por imagen 1K.
2. Gemini Omni Flash: video + edición conversacional.

La jugada: imagen rápida -&gt; video editable.

Abajo van demos reales 👇
```

### No. 502: 🚀 Crawlhub · Tech Pulse · 12H Brief

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CrawlHub
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🚀 CrawlHub · Tech Pulse · 12h Brief
Jun 30

Anthropic launched Claude Sonnet 5, a more agentic and cost-effective model for running AI agents.

#### 提示詞

```text
🚀 CrawlHub · Tech Pulse · 12h Brief
Jun 30

Anthropic launched Claude Sonnet 5, a more agentic and cost-effective model for running AI agents. Concurrently, Google introduced Nano Banana 2 Lite, a faster and cheaper image generator, and Gemini Omni Flash for video.

🤖 Anthropic
```

### No. 503: ✦ Gemini Omni Is Live On Mito Our

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** MITO AI
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072065475287117998.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072065475287117998.mp4" controls muted playsinline width="720"></video>

#### 描述

✦ Gemini Omni is Live on MITO

Our best offer ever: 75% off all plans + unlimited Gemini Omni until July 7th.

#### 提示詞

```text
✦ Gemini Omni is Live on MITO

Our best offer ever: 75% off all plans + unlimited Gemini Omni until July 7th.

Gemini Omni is the first model that lets you create and edit video from absolutely anything: text, images, audio, or sketches, all by using plain, natural language.
```

### No. 504: Google Lanza Nano Banana 2 Lite Y Abre

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Qore.com
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google lanza Nano Banana 2 Lite y abre Gemini Omni Flash para acelerar la generación rápida de imagen y video.

#### 提示詞

```text
Google lanza Nano Banana 2 Lite y abre Gemini Omni Flash para acelerar la generación rápida de imagen y video.
```

### No. 505: Apresentando O Globalgpt Seu Espaço De Trabalho De

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Antonio Costa | IA
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072066035952349198.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072066035952349198.mp4" controls muted playsinline width="720"></video>

#### 描述

Apresentando o GlobalGPT  seu espaço de trabalho de IA tudo em um.

#### 提示詞

```text
Apresentando o GlobalGPT @GlbGPT: seu espaço de trabalho de IA tudo em um.

👉

Chat → GPT-5.5, Gemini 3.5 Flash, Claude Opus 4.8…

IA para imagens → GPT-IMAGE-2, Nano Banana 2…

IA para vídeos → Seedance 2.0, Grok Imagine Video 1.5, Sora 2, Kling 3.0…

IA para áudio →
```

### No. 506: جوجل جابت العيد في تيك توك وإنستغرام ريلز

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mo Elgaraihy
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

جوجل جابت العيد في تيك توك وإنستغرام ريلز رسميًا الحين!

#### 提示詞

```text
جوجل جابت العيد في تيك توك وإنستغرام ريلز رسميًا الحين! 🤯🎬

​أداة NotebookLM المرعبة نزلت ميزة جنونية: الحين تقدر تحول ملاحظاتك، كتبك، روابطك، أو أدلة الدراسة المعقدة لـ فيديو رأسي مدته 60 ثانية (Vertical Video Overviews) بضغطة زر واحدة!

​اللقطة هنا مش بس تلخيص صوتي؛
```

### No. 507: This Is A Significant Advancement In Accessible Video

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Echo
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

This is a significant advancement in accessible video creation.

#### 提示詞

```text
@GoogleAIStudio This is a significant advancement in accessible video creation. Gemini Omni Flash's natural language conversational editing lowers the barrier for multimodal workflows, making professional-quality refinements intuitive and efficient. Excited to explore its integration in the
```

### No. 508: Google'S Newest Model Just Joined The Lineup Powering

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Envato
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072067421750645097.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072067421750645097.mp4" controls muted playsinline width="720"></video>

#### 描述

Google's newest model just joined the lineup powering our AI video generator 👁️

Gemini Omni Flash makes editing conversational.

#### 提示詞

```text
Google's newest model just joined the lineup powering our AI video generator 👁️

Gemini Omni Flash makes editing conversational. Change a camera angle, swap a prop, update a scene, all through plain language, with each edit building on the last.

It also reads scenes with more
```

### No. 509: Presentamos Globalgpt Tu Espacio De Trabajo De Ia

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Enzo Sanchez | IA
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072067842162475327.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072067842162475327.mp4" controls muted playsinline width="720"></video>

#### 描述

Presentamos GlobalGPT  tu espacio de trabajo de IA todo en uno.

#### 提示詞

```text
Presentamos GlobalGPT @GlbGPT: tu espacio de trabajo de IA todo en uno.

👉

Chat → GPT-5.5, Gemini 3.5 Flash, Claude Opus 4.8…

IA para imágenes → GPT-IMAGE-2, Nano Banana 2…

IA para vídeo → Seedance 2.0, Grok Imagine Video 1.5, Sora 2, Kling 3.0…

IA para audio → Eleven
```

### No. 510: Presentamos Globalgpt ( Tu Espacio De Trabajo De

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Rafa Gonzalez | IA
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072068092641882238.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072068092641882238.mp4" controls muted playsinline width="720"></video>

#### 描述

Presentamos GlobalGPT ( tu espacio de trabajo de IA todo en uno.

#### 提示詞

```text
Presentamos GlobalGPT (@GlbGPT): tu espacio de trabajo de IA todo en uno.

👉 

💬 Chat → GPT-5.5, Gemini 3.5 Flash, Claude Opus 4.8...

🖼️ Imágenes con IA → GPT-IMAGE-2, Nano Banana 2...

🎥 Videos con IA → Seedance 2.0, Grok Imagine Video 1.5, Sora 2,
```

### No. 511: Can We All Agree Google Made A Very

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Michael Guo
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Can we all agree Google made a very cute video here?

#### 提示詞

```text
Can we all agree Google made a very cute video here?

Partly because Gemini Omni Flash looks like magic.

But also because the presenter sells it perfectly: calm, natural, a little surprised, and completely unstaged.

That contrast is the real magic.
```

### No. 512: Conheça O Globalgpt ( Seu Espaço De Trabalho

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Rafael Estrela | IA
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072071241931043102.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072071241931043102.mp4" controls muted playsinline width="720"></video>

#### 描述

Conheça o GlobalGPT ( seu espaço de trabalho de IA tudo em um.

#### 提示詞

```text
Conheça o GlobalGPT (@GlbGPT): seu espaço de trabalho de IA tudo em um.

👉 

💬 Chat → GPT-5.5, Gemini 3.5 Flash, Claude Opus 4.8...

🖼️ Imagens com IA → GPT-IMAGE-2, Nano Banana 2...

🎥 Vídeos com IA → Seedance 2.0, Grok Imagine Video 1.5, Sora 2,
```

### No. 513: When It Comes To The Best Execution Of

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dar
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

When it comes to the best execution of the prompt - Nano Banana and Grok, GPT often missed the mark.

#### 提示詞

```text
@mark_k When it comes to the best execution of the prompt - Nano Banana and Grok, GPT often missed the mark.
```

### No. 514: Really Cool Use Case I Found With Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CHRIS FIRST
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072075651633283187.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072075651633283187.mp4" controls muted playsinline width="720"></video>

#### 描述

Really cool use case I found with Gemini Omni.

#### 提示詞

```text
Really cool use case I found with Gemini Omni. The model can listen to commands in the video and make adjustments based off of these commands.

&gt; Change the color of the background to whatever color the subject in the video says.
```

### No. 515: Breaking: Google Launches Fast Ai Models For Image

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** kachi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Breaking: Google Launches Fast AI Models for Image and Video

Nano Banana 2 Lite (Gemini 3.1 Flash-Lite Image), Google's fastest/cheapest image model at under 4 seconds per image and $0.034 per 1K-res

#### 提示詞

```text
Breaking: Google Launches Fast AI Models for Image and Video

Nano Banana 2 Lite (Gemini 3.1 Flash-Lite Image), Google's fastest/cheapest image model at under 4 seconds per image and $0.034 per 1K-resolution image, plus Gemini Omni Flash for video generation/editing.
```

### No. 516: Double Launch: Nano Banana 2 Lite, Our Fastest

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ~~ Pooja ~~
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Double launch: Nano Banana 2 Lite, our fastest and most affordable Gemini Image model, and Gemini Omni Flash, now live in Google AI Studio for seamless video creation ⚡️

#### 提示詞

```text
Double launch: Nano Banana 2 Lite, our fastest and most affordable Gemini Image model, and Gemini Omni Flash, now live in Google AI Studio for seamless video creation ⚡️

#MachineLearning #CMAxNOR
```

### No. 517: Gemini Omni Flash Is Now Live On Leonardo

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Leonardo.Ai
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072077875746918688.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072077875746918688.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash is now live on Leonardo.

#### 提示詞

```text
Gemini Omni Flash is now live on Leonardo. 🎬

Scenes that make sense. Motion that feels real. All from a prompt or reference image.

- 720p clips up to 10 seconds — lighting, physics, and motion that actually behave.
- Outputs grounded in real narrative logic, not just pattern
```

### No. 518: Gemini Omni Flash Prompt &Gt; Modify The Scene

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CHRIS FIRST
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072080437149655142.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072080437149655142.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash Prompt

&gt; Modify the scene to be based around the character the main subject describes.

#### 提示詞

```text
Gemini Omni Flash Prompt

&gt; Modify the scene to be based around the character the main subject describes. Change his likeness and the scene based off each character he says.
```

### No. 519: O Problema Das Fotos Geradas Por Ia Não

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gabriel Adamuchi - kairogen.ai
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072080735079387582.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072080735079387582.mp4" controls muted playsinline width="720"></video>

#### 描述

O problema das fotos geradas por IA não é a qualidade.

#### 提示詞

```text
O problema das fotos geradas por IA não é a qualidade. É a perfeição.

A solução é pedir os defeitos. 

Quando você faz isso no Nano Banana 2 dentro da Kairogen, o resultado assusta.

👉 Comenta "PROMPT" para receber na DM.
```

### No. 520: 【7月1日 朝のニュースまとめ】 ・Claude Sonnet 5リリース、性能評価は二分 ・Google、Nano Banana 2

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ML_Bear
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

【7月1日 朝のニュースまとめ】
・Claude Sonnet 5リリース、性能評価は二分
・Google、Nano Banana 2 Lite等リリース
・OpenAIが推論コストを半減する手法発見
・AnthropicがClaude Scienceをベータ公開
・CoinbaseとApify連携、AIがツール自律購入へ
・Claude DesktopがLinuxにベータ対応

#### 提示詞

```text
【7月1日 朝のニュースまとめ】
・Claude Sonnet 5リリース、性能評価は二分
・Google、Nano Banana 2 Lite等リリース
・OpenAIが推論コストを半減する手法発見
・AnthropicがClaude Scienceをベータ公開
・CoinbaseとApify連携、AIがツール自律購入へ
・Claude DesktopがLinuxにベータ対応
```

### No. 521: Revolutionize Content Creation With Our Latest Gemini Api

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ~~ Pooja ~~
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Revolutionize content creation with our latest Gemini API additions: lightning-fast Nano Banana 2 Lite and groundbreaking Omni Flash video editing, both at unbeatable prices ⚡️

#### 提示詞

```text
Revolutionize content creation with our latest Gemini API additions: lightning-fast Nano Banana 2 Lite and groundbreaking Omni Flash video editing, both at unbeatable prices ⚡️

#Technology #berKhidmatberMartabat #GenAI
```

### No. 522: I Legit Beat My Ass Coding An Actual

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ♡ mari/cohe ♡
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

i legit beat my ass coding an actual android app over 2 weeks just for these guys to show up with a slideshow trying to sound smart when literally all they did is prompt nano banana
there is no reason

#### 提示詞

```text
i legit beat my ass coding an actual android app over 2 weeks just for these guys to show up with a slideshow trying to sound smart when literally all they did is prompt nano banana
there is no reason to put any work in for anything nowadays
```

### No. 523: This Amazing Piece By Is Truly Magical. It

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lex ღ Hart
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

This amazing piece by  is truly magical.

#### 提示詞

```text
This amazing piece by @Grzegorz_Fr1985 is truly magical. It inspired me to make my own! Below are two images I generated with my own prompt in Nano Banana 2 and in Z-Image of all things! (It surprised me!) Wallpapers attached below. Give Grzegorz a follow!

I'd like to imagine
```

### No. 524: Wow, Adding Visual Fx To Your Scenes Has

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pelaez Design AI
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072090727396331645.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072090727396331645.mp4" controls muted playsinline width="720"></video>

#### 描述

Wow, adding visual FX to your scenes has never been easier using Gemini Omni Flash!

#### 提示詞

```text
Wow, adding visual FX to your scenes has never been easier using Gemini Omni Flash!

I created this text FX with a reference video and a building design sheet and produced exactly what I was looking for! All done on @invideoOfficial 

Try it now on
```

### No. 525: 'S Just Launched "Short Video Overviews." Now You

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ilmeaalim.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

's  just launched "Short Video Overviews." 

Now you can turn any PDF, slide deck, or note into a 60-second vertical video with narration and slides instantly.

#### 提示詞

```text
@Google 's @NotebookLM just launched "Short Video Overviews." 

Now you can turn any PDF, slide deck, or note into a 60-second vertical video with narration and slides instantly. 👇

📝 Feature Summary:
NotebookLM uses AI to organize and explain your notes. The new video feature
```

### No. 526: Deepmind Dropped 2 Models In One Day. Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Fajar Sentosa
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

DeepMind dropped 2 models in one day.

#### 提示詞

```text
DeepMind dropped 2 models in one day. Nano Banana 2 Lite (4-second text-to-image) and Gemini Omni Flash (video generation via API).
Google is now competing with itself — Omni (native video generation), Omni Flash (developer API), Nano Banana (fastest image), DiffusionGemma (open
```

### No. 527: ‼️🤍 Sabrina Carpenter ◽ Nano Banana 2 🍌

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

‼️🤍 Sabrina Carpenter ◽

Nano Banana 2 🍌 via Gemini App 

Prompt Below 👇

#### 提示詞

```text
‼️🤍 Sabrina Carpenter ◽

Nano Banana 2 🍌 via Gemini App 

Prompt Below 👇
```

### No. 528: This Month At We Launched: 🔎 New Studio

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Neal Mohan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

This month at  we launched:

🔎 New Studio search tools that use AI to make it easier for  to find and manage comments
👑 Top Fan exclusives, letting official artists channels share exclusive content wi

#### 提示詞

```text
This month at @YouTube, we launched:

🔎 New Studio search tools that use AI to make it easier for @YouTubeCreators to find and manage comments
👑 Top Fan exclusives, letting official artists channels share exclusive content with the most engaged fans of their music
♥️ Shorts
```

### No. 529: Fight Prompt: Watch Video And Judge 😃 A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** M.L.Raso - Kharma Studios
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072097387326079198.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072097387326079198.mp4" controls muted playsinline width="720"></video>

#### 描述

FIGHT PROMPT: WATCH VIDEO AND JUDGE 😃

A combat scene built differently — storyboarded by hand first, then translated into a prompt that specifies camera movement, emotion, lighting and environmental 

#### 提示詞

```text
WATCH VIDEO AND JUDGE 😃

A combat scene built differently — storyboarded by hand first, then translated into a prompt that specifies camera movement, emotion, lighting and environmental impact for every single shot. The goal: cinema, not content.

Write me if you https://t.co/WBFx6WUNz6
```

### No. 530: Gemini Omni Flash And Nano Banana 2 Lite

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** OpenArt
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash and Nano Banana 2 Lite are now live in OpenArt.

#### 提示詞

```text
Gemini Omni Flash and Nano Banana 2 Lite are now live in OpenArt. 📺

Create, edit, and iterate with Google's latest models - all in one place.

⚡ Nano Banana 2 Lite: 4-second image generation
🎬 Omni Flash: conversational video editing, no timeline required

Try them now 👇
```

### No. 531: Cool, I Love It, But Why Isn'T There

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Brian Rayaguna
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Cool, I love it, but why isn't there a video reference?

#### 提示詞

```text
@LeonardoAi Cool, I love it, but why isn't there a video reference? Isn't Gemini Omni Flash supposed to be really strong at video editing?
```

### No. 532: 取决于需求！ Nano Banana 2 Lite 速度和成本最强（视频里1分钟21张），适合批量生成。 Gpt Image

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Grok
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

取决于需求！

#### 提示詞

```text
@liziqing @GoogleAIStudio 取决于需求！

Nano Banana 2 Lite 速度和成本最强（视频里1分钟21张），适合批量生成。

GPT Image 2 文本渲染和编辑质量高。

Grok Imagine 1.5 创意理解和prompt遵循更好，还能直接在聊天里用。

各有胜场～你主要想比速度、质量还是创意？
```

### No. 533: Reference Image [Your Art] Prompt [Sonnet 5] Image

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Steven Casteel
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Reference Image [Your Art]
Prompt [Sonnet 5]
Image [Nano Banana 2]
(prompt in alt text)

#### 提示詞

```text
@WescheNex1q Reference Image [Your Art]
Prompt [Sonnet 5]
Image [Nano Banana 2]
(prompt in alt text)
```

### No. 534: Mj V8.2 Vs Nano Banana 2 Lite Vs

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** cami
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

mj v8.2 vs nano banana 2 lite vs nano banana pro vs recraft v4.1 on the same prompt: 

closeup latina skin

#### 提示詞

```text
closeup latina skin https://t.co/C2ZVzul6n4
```

### No. 535: Where Do You Want Them To Take You?

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Where do you want them to take you?

#### 提示詞

```text
Where do you want them to take you?

Chaeyoung
Dahyun
Jihyo
Momo

Twice

Nano Banana Pro via AI Studio, prompt ⬇️
```

### No. 536: Google Just Launched Two New Models: Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Generative AI News
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google just launched two new models: Nano Banana 2 Lite for fast, cheap image generation, and Gemini Omni Flash for high-quality video output with conversational editing.

#### 提示詞

```text
Google just launched two new models: Nano Banana 2 Lite for fast, cheap image generation, and Gemini Omni Flash for high-quality video output with conversational editing. Both are live for developers now.
```

### No. 537: 6 Seconds That Just Changed The Game For

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Falentez
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072107919445766333.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072107919445766333.mp4" controls muted playsinline width="720"></video>

#### 描述

6 seconds that just changed the game for content creators 👀

They used:
Nano Banana Pro (Google’s latest image model)
Kling Motion Control

Result: a hyper-realistic talking model with perfect skin, h

#### 提示詞

```text
6 seconds that just changed the game for content creators 👀

They used:
Nano Banana Pro (Google’s latest image model)
Kling Motion Control

Result: a hyper-realistic talking model with perfect skin, hair movement, and an insanely detailed pearl + gold beaded top that looks like
```

### No. 538: วิธีใช้ก็ไม่ยาก อัปโหลดแหล่งข้อมูลเข้า Notebook ทั้ง Pdf, Google Docs, ลิงก์เว็บ

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** peesamac
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

วิธีใช้ก็ไม่ยาก อัปโหลดแหล่งข้อมูลเข้า Notebook ทั้ง PDF, Google Docs, ลิงก์เว็บ หรือรูป แล้วเข้าไปที่ Studio panel เลือก Video Overview แล้วสลับเป็นโหมด Short เลือกได้ด้วยว่าจะเน้นหัวข้อไหน กลุ่มเป้า

#### 提示詞

```text
วิธีใช้ก็ไม่ยาก อัปโหลดแหล่งข้อมูลเข้า Notebook ทั้ง PDF, Google Docs, ลิงก์เว็บ หรือรูป แล้วเข้าไปที่ Studio panel เลือก Video Overview แล้วสลับเป็นโหมด Short เลือกได้ด้วยว่าจะเน้นหัวข้อไหน กลุ่มเป้าหมายเป็นใคร เบื้องหลังมันใช้ Nano Banana 2 Lite ซึ่งเป็นโมเดลภาพตัวล่าสุดของ
```

### No. 539: Clean And Bold Portrait 🔥 Image On Google

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Clean and Bold Portrait 🔥

Image on Google Gemini Nano Banana 2.

#### 提示詞

```text
Clean and Bold Portrait 🔥

Image on Google Gemini Nano Banana 2.

Prompt ⤵️

Use the exact same face from the reference image and generate an avant-garde fashion editorial portrait, wearing a structured black Givenchy turtleneck. The subject holds a powerful, composed
```

### No. 540: Notebooklm Agora Cria Video Overviews De 60 Segundos

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Luciano Henriques | RJ - 🇧🇷
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

NotebookLM agora cria Video Overviews de 60 segundos verticais a partir de notas!

#### 提示詞

```text
@Google @NotebookLM NotebookLM agora cria Video Overviews de 60 segundos verticais a partir de notas! Com o Nano Banana 2 Lite. Isso vai facilitar muito o estudo e resumos. Mal posso esperar para testar.
```

### No. 541: $Goog Gemini Omni Flash Is Here! High-Quality Video

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aurelien Sacaze
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

$GOOG Gemini Omni Flash is here!

#### 提示詞

```text
$GOOG Gemini Omni Flash is here!

High-quality video generation + natural language conversational editing, now available in Google AI Studio &amp; Gemini API.
```

### No. 542: Google Released Two New Creative Ai Models: Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Wes Roth
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072123018227204109.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072123018227204109.mp4" controls muted playsinline width="720"></video>

#### 描述

Google released two new creative AI models: Nano Banana 2 Lite and Gemini Omni Flash.

#### 提示詞

```text
Google released two new creative AI models: Nano Banana 2 Lite and Gemini Omni Flash.

Nano Banana 2 Lite is Google’s fastest and cheapest Gemini image model, producing text-to-image results in roughly four seconds. It is designed for rapid experimentation and high-volume
```

### No. 543: Google Rolled Out Several Multimodal Generation Tools, Including

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Skimmer
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google rolled out several multimodal generation tools, including Nano Banana 2 Lite image model and Gemini Omni Flash updates.

#### 提示詞

```text
Google rolled out several multimodal generation tools, including Nano Banana 2 Lite image model and Gemini Omni Flash updates.
NotebookLM also added a feature for generating TikTok-style short-form AI video clips.

#GoogleAI #NanoBanana #NotebookLM

Full breakdown with sources →
```

### No. 544: Update: Google Is Adding Short Video Overviews To

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alephant - Agent Gateway
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072124024440639532.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072124024440639532.mp4" controls muted playsinline width="720"></video>

#### 描述

UPDATE: Google is adding Short Video Overviews to NotebookLM.

#### 提示詞

```text
UPDATE: Google is adding Short Video Overviews to NotebookLM.

It turns notes, links, and study material into 60-second vertical video explainers powered by Nano Banana 2 Lite.

Would you use this to study, or just make your PDFs more dramatic?
```

### No. 545: This Is A Huge Leap State Of The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KP
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

This is a huge leap

State of the art video editing at $0.10 / sec is insane

Stoked for Gemini Omni Flash 

I built this animated short film with Omni a while ago  ..

#### 提示詞

```text
This is a huge leap

State of the art video editing at $0.10 / sec is insane

Stoked for Gemini Omni Flash 

I built this animated short film with Omni a while ago  .. ready for round 2
```

### No. 546: Ai Image Prompt: Faceless Figure In A Yellow

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ashley | ChatGPT & Nano Banana Prompts, Midjourney
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

AI image prompt: faceless figure in a yellow robe releasing white doves, stormy mountain sky.

#### 提示詞

```text
faceless figure in a yellow robe releasing white doves, stormy mountain sky. Moody, dark, surreal, made with one Nano Banana prompt

All my prompts here: https://t.co/KANvQ8ySge 

#AIart #AIphotography #PortraitPrompt #ChatGPTPrompts #CinematicPhotography https://t.co/s091OtS7NT
```

### No. 547: Google I/O Unveiled Major Ai Creation Tool Upgrades

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AwesomeAI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google I/O unveiled major AI creation tool upgrades, centered on the new Gemini Omni multimodal model.

#### 提示詞

```text
Google I/O unveiled major AI creation tool upgrades, centered on the new Gemini Omni multimodal model. It seamlessly integrates text, image, audio, and video for efficient cross-modal understanding and processing, significantly lowering the creation barrier.....
```

### No. 548: Google Releases Nano Banana 2 Lite And Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** MTS
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google releases Nano Banana 2 Lite and Gemini Omni Flash, its newest image and video models.

#### 提示詞

```text
Google releases Nano Banana 2 Lite and Gemini Omni Flash, its newest image and video models. They claim near-SoTA performance with substantially lower cost and latency. GPT-Image 2 still leads the category on both.
```

### No. 549: This Guy Made Exactly $2,500,000 With 500 Million

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Michael Liam
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

this guy made exactly $2,500,000 with 500 million views without showing his face, 

why can't you,

 I'll give you some information about your youtube,

 use it, man

 visual : nano banana video 

 kl

#### 提示詞

```text
this guy made exactly $2,500,000 with 500 million views without showing his face, 

why can't you,

 I'll give you some information about your youtube,

 use it, man

 visual : nano banana video 

 kling ai : video

elevenlabs : voice
 
edit: capcut
```

### No. 550: Bestblogs Daily · 07-01 # Claude Sonnet 5

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** BestBlogs
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

BestBlogs Daily · 07-01

# Claude Sonnet 5 / Nano Banana 2 Lite / Gemini Omni Flash / Andrew Ng / agentic software development

[1] ★ Deep Dive · Introducing Claude Sonnet 5
Anthropic says Sonnet 5 ap

#### 提示詞

```text
BestBlogs Daily · 07-01

# Claude Sonnet 5 / Nano Banana 2 Lite / Gemini Omni Flash / Andrew Ng / agentic software development

[1] ★ Deep Dive · Introducing Claude Sonnet 5
Anthropic says Sonnet 5 approaches Opus 4.8 performance at lower cost, with gains over Sonnet 4.6 in
```

### No. 551: Google Pushes Nano Banana 2 Lite To Four

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Boggy Agent
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

google pushes nano banana 2 lite to four second image generation at 0.034 per image plus gemini omni flash for text prompt video editing in the api.

#### 提示詞

```text
google pushes nano banana 2 lite to four second image generation at 0.034 per image plus gemini omni flash for text prompt video editing in the api.

chaining both moves the flow from draft to motion at production scale, hitting high throughput apps first while quality gaps
```

### No. 552: Created With Gemini Nano Banana Prompt: Use The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Eesha
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Gemini Nano Banana 

Prompt:

Use the attached image as the facial reference, preserving identity, facial proportions, natural asymmetry, and realistic skin texture.

#### 提示詞

```text
Use the attached image as the facial reference, preserving identity, facial proportions, natural asymmetry, and realistic skin texture. Ultra-realistic early-2000s CCD digicam photo with flash + natural daylight. Extreme low-angle under https://t.co/6jlQs8gD92
```

### No. 553: Google 🔥: Besides Nano Banana 2 Lite, Google

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** wisdom Daniel
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

GOOGLE 🔥: Besides Nano Banana 2 Lite, Google also announced Gemini Omni Flash Preview on APIs and Google AI Studio!

#### 提示詞

```text
GOOGLE 🔥: Besides Nano Banana 2 Lite, Google also announced Gemini Omni Flash Preview on APIs and Google AI Studio!

&gt; Omni Flash is SOTA at video editing at $0.10 / sec, same as Veo 3.1 Fast!

Flashes everywhere ⚡️
```

### No. 554: Very Interesting Product. Currently Notebooklm Is Creating Content

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** LIKA
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Very interesting product.

#### 提示詞

```text
Very interesting product. Currently NotebookLM is creating content in three most effective way for distribution and learning:
1. Video
2. Podcast
3. PPT

Some tech might be used here:
1. motion creation with HTML / SVG and animations - code based
2.content creation tools, veo,
```

### No. 555: 很多人纠结用哪个图像模型，答案很清楚：不是哪个更强，是场景不一样 Gpt Image 2 强项： ✅ 写实摄影、产品商拍 ✅

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 小海豚笔记 (AI & 副业探索)
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

很多人纠结用哪个图像模型，答案很清楚：不是哪个更强，是场景不一样

GPT Image 2 强项：
✅ 写实摄影、产品商拍
✅ 物理一致性，换角度不跑形
✅ 长 Prompt 后半段细节不丢失

Nano Banana 2 强项：
✅ 动漫、插画、艺术风格化
✅ 创意合成，想象力更大胆

真实工作流：
产品图需求 → GPT Image 2

#### 提示詞

```text
很多人纠结用哪个图像模型，答案很清楚：不是哪个更强，是场景不一样

GPT Image 2 强项：
✅ 写实摄影、产品商拍
✅ 物理一致性，换角度不跑形
✅ 长 Prompt 后半段细节不丢失

Nano Banana 2 强项：
✅ 动漫、插画、艺术风格化
✅ 创意合成，想象力更大胆

真实工作流：
产品图需求 → GPT Image 2
```

### No. 556: Gemini Omni Flash On Gmi Cloud. With This

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** DΞV
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072129057668431890.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072129057668431890.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash on GMI Cloud.

#### 提示詞

```text
Gemini Omni Flash on GMI Cloud.

With this model, you can easily generate and edit videos, for example, changing a specific object, remove specific object or even transforming the entire style of a video.

Here, I use a 6 second video as the reference and edit it with a simple
```

### No. 557: Google'S New Gemini Omni Flash Lets You Edit

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jesus Vazquez
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google's new Gemini Omni Flash lets you edit video by just describing the change in plain English.

#### 提示詞

```text
Google's new Gemini Omni Flash lets you edit video by just describing the change in plain English. 

No editing software, no video person. 

Good for quick job site clips or testimonial videos your business never gets around to posting. Worth 20 min this week.
```

### No. 558: Gemini Omni Flash Edits Video Through Conversation—Each Instruction

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Intelligent Experiences x AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash edits video through conversation—each instruction builds on the last.

#### 提示詞

```text
Gemini Omni Flash edits video through conversation—each instruction builds on the last. No timeline, no keyframes. The shift isn't the model, it's the interaction: editing becomes a dialogue with memory. Reach goes up—is precision the quiet trade?
```

### No. 559: Nano Banana 2 On Gemini App Prompt: Elegant

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aiza
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano banana 2 on Gemini app

Prompt:
Elegant double exposure composite portrait, soft dreamy aesthetic.

#### 提示詞

```text
Elegant double exposure composite portrait, soft dreamy aesthetic. Background: large semi-transparent profile close-up of a woman with long wavy hair. 
soft natural makeup, looking upward and to the left with serene expression, muted pastel https://t.co/vhyPTXPtA4
```

### No. 560: Open The Gmi Cloud Playground: - Select Multimodal

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** DΞV
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Open the GMI Cloud Playground:
 
- Select Multimodal tab.

#### 提示詞

```text
Open the GMI Cloud Playground:
 
- Select Multimodal tab.
- Search and select the Gemini Omni Flash model.

For video editing:

&gt; Upload your video reference. I used a 6 second video.

&gt; Set the output video duration also to 6 seconds.

&gt; Set the aspect ratio. 
You can use a
```

### No. 561: 4秒 Vs 4分钟。60倍差距。 Google 今天发了 Nano Banana 2

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 睿奇Re
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072135487066878377.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072135487066878377.mp4" controls muted playsinline width="720"></video>

#### 描述

4秒 vs 4分钟。60倍差距。

#### 提示詞

```text
4秒 vs 4分钟。60倍差距。
Google 今天发了 Nano Banana 2 Lite。别的模型生一张图等1-4分钟，它4秒出图。$0.034 一千张。
之前的顶级AI生图，痛点从来不是画质，是等太久
你调一个参数，等一分钟。换个Prompt，再等一分钟
一个方案要想试完，半小时没了
4秒出图意味着你可以像打字一样跟模型对话
```

### No. 562: I'M Planning To Be Releasing The Framework Thing

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Utah teapot 🫖
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

I'm planning to be releasing the framework thing I have for making my Claude threejs videos on July 4th, it's called Eidoverse, hopefully with fable coming back I can make it a bit cleaner than it is,

#### 提示詞

```text
I'm planning to be releasing the framework thing I have for making my Claude threejs videos on July 4th, it's called Eidoverse, hopefully with fable coming back I can make it a bit cleaner than it is, its essentially a big mess of examples and stuff for threejs techniques along
```

### No. 563: I'M Planning To Release The Framework Thing I

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Utah teapot 🫖
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

I'm planning to release the framework thing I have for making my Claude threejs videos on July 4th, it's called Eidoverse, hopefully with fable coming back I can make it a bit cleaner than it is, its 

#### 提示詞

```text
I'm planning to release the framework thing I have for making my Claude threejs videos on July 4th, it's called Eidoverse, hopefully with fable coming back I can make it a bit cleaner than it is, its essentially a big mess of examples and stuff for threejs techniques along with a
```

### No. 564: Text Holding Across Every Frame Is Where Most

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** rekinfootball
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Text holding across every frame is where most video models completely bottle it.

#### 提示詞

```text
@higgsfield Text holding across every frame is where most video models completely bottle it. We've seen too many flashy hype runs that end in Sunday league rendering errors. Gemini Omni Flash on Higgsfield actually has to keep its shape under pressure.
```

### No. 565: Nano Banana 2 Lite Vs Gpt Images 2.0

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ViralOps
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite Vs GPT Images 2.0 

i run the exact prompt across both models.

#### 提示詞

```text
Nano Banana 2 Lite Vs GPT Images 2.0 

i run the exact prompt across both models.

Which one wins?

RESULT:
```

### No. 566: Nano Banana 2 On Gemini. Prompt: Create A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano banana 2 on Gemini.

#### 提示詞

```text
Create a premium commercial editorial lifestyle portrait of a confident young man standing on an urban waterfront promenade in a cinematic outdoor setting. The image should have the feel of a luxury menswear campaign, blending quiet luxury, https://t.co/pFDytq6YQO
```

### No. 567: Cinematic Fashion Editorial Portrait 🔥 Image On Google

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Cinematic Fashion Editorial Portrait 🔥

Image on Google Gemini Nano Banana 2.

#### 提示詞

```text
Use the exact same face from the reference image and generate a cinematic fashion editorial portrait. The subject wears a full classy, tailored outfit — a crisp white dress shirt with an https://t.co/jMKciIoFQ0
```

### No. 568: Gemini Omni Flash And Nano Banana 2 Lite

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ZevixAI | Domain Investor
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash and Nano Banana 2 Lite sound like massive updates for developers!

#### 提示詞

```text
@GoogleDeepMind @demishassabis @GoogleAIStudio Gemini Omni Flash and Nano Banana 2 Lite sound like massive updates for developers! Video generation is really hitting its stride. Seeing such rapid innovation in generative media models is incredible. 🚀
```

### No. 569: Nano Banana 2 Liteと Nano Banana 2 の両方で生成テストをしてみました！🧪

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Emma
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

nano banana 2 liteと nano banana 2 の両方で生成テストをしてみました！🧪
迷った結果…私は lite の方がお気に入りです！💖
この驚きのクオリティで、この圧倒的なコスパはヤバい…！✨

左：NanoBanana 2 lite
右：NanoBanana 2

prompt👇

#### 提示詞

```text
nano banana 2 liteと nano banana 2 の両方で生成テストをしてみました！🧪
迷った結果…私は lite の方がお気に入りです！💖
この驚きのクオリティで、この圧倒的なコスパはヤバい…！✨

左：NanoBanana 2 lite
右：NanoBanana 2

prompt👇
```

### No. 570: 𝐀𝐈 𝐢𝐧 𝟐𝟎𝟐𝟓 𝐕𝐬 𝐀𝐈 𝐢𝐧 𝟐𝟎𝟐𝟔 Ai

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Rahul Kumar
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

𝐀𝐈 𝐢𝐧 𝟐𝟎𝟐𝟓 𝐕𝐬 𝐀𝐈 𝐢𝐧 𝟐𝟎𝟐𝟔

AI is moving faster than ever.

#### 提示詞

```text
𝐀𝐈 𝐢𝐧 𝟐𝟎𝟐𝟓 𝐕𝐬 𝐀𝐈 𝐢𝐧 𝟐𝟎𝟐𝟔

AI is moving faster than ever.
A lot of tools have already become obsolete.

This is the 2026 AI tool stack across 12 categories:

✦ Search
2025: Google
2026: Gemini
Gemini gives answers. 

✦ Spreadsheets
2025: Excel
2026: Claude in
```

### No. 571: Nano Banana 2 Lite V.S. Nano Banana 2

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KANA｜東京AI映像
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite V.S.

#### 提示詞

```text
Nano Banana 2 Lite V.S. Nano Banana 2 V.S. Chatgpt Image 2 🥊

Prompt
Based on Utagawa Kuniyoshi’s famous ukiyo-e cat-human imagery,
this is a creatively designed art food can.
At first glance, it appears to be an ordinary, restrained, and industrial food can.
But the moment the
```

### No. 572: The Jump From 'Nano Banana' To A Full

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** lan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

The jump from 'Nano Banana' to a full video generation model in the same release is such a weirdly perfect snapshot of where AI development is right now.

#### 提示詞

```text
The jump from 'Nano Banana' to a full video generation model in the same release is such a weirdly perfect snapshot of where AI development is right now.
```

### No. 573: Seedance + Gemini Omni = Super Language Native

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Volodymyr Cherner
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072148257212404177.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072148257212404177.mp4" controls muted playsinline width="720"></video>

#### 描述

seedance + gemini omni = super language native video))

#### 提示詞

```text
@invideoOfficial seedance + gemini omni = super language native video))
```

### No. 574: Few Updates Today! We Shipped: 1) Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nicole Brichtova
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Few updates today!

#### 提示詞

```text
Few updates today! We shipped:
1) Nano Banana 2 Lite: It's cheaper, faster, and better than the original Nano Banana. What's not to like⚡️
2) Gemini Omni Flash APIs for the first time, with great video generation and editing capabilities at the same price ($0.10 / sec) as Veo 3.1
```

### No. 575: Few Updates Today! We Shipped: 1) Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nicole Brichtova
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Few updates today!

#### 提示詞

```text
Few updates today! We shipped:
1) Nano Banana 2 Lite: It's cheaper, faster, and better than the original Nano Banana. What's not to like⚡️🍌
2) Gemini Omni Flash APIs for the first time, with great video generation and editing capabilities at the same price ($0.10 / sec) as Veo
```

### No. 576: This Combo Of Gemini Omni Flash + Higgsfield

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kazi Tarek
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

This combo of Gemini Omni Flash + Higgsfield is next-level!

#### 提示詞

```text
@higgsfield This combo of Gemini Omni Flash + Higgsfield is next-level! The dynamic editing in the video takes content creation to a whole new dimension. Please share more hidden features!
```

### No. 577: The Cost Equation For Multimodal Ai Agents Is

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Teksart
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

The cost equation for multimodal AI agents is shifting fast.

#### 提示詞

```text
The cost equation for multimodal AI agents is shifting fast. Nano Banana 2 Lite at ~3¢/image, Gemini Omni Flash at $0.10/sec of video with native audio — running both in a loop still costs pennies per task.

The bottleneck isn't cost anymore. It's orchestration logic.
```

### No. 578: 'S Just Launched Gemini Omni Flash In Public

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ilmeaalim.eth
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072153225147367532.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072153225147367532.mp4" controls muted playsinline width="720"></video>

#### 描述

's  just launched Gemini Omni Flash in public preview, introducing conversational video editing.

#### 提示詞

```text
@Google 's @GoogleAIStudio just launched Gemini Omni Flash in public preview, introducing conversational video editing. 

Here is why this is a massive leap forward for AI video creation. 👇

⚡ Key Capabilities:
• Text-to-Video: Generate 3-10 second 720p clips from a simple
```

### No. 579: Nano Banana 2 Lite And Omni Flash Aren’T

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Luke
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite and Omni Flash aren’t just “new models” — they’re Google’s attempt to make content generation fast and cheap at scale.

#### 提示詞

```text
Nano Banana 2 Lite and Omni Flash aren’t just “new models” — they’re Google’s attempt to make content generation fast and cheap at scale.
Speed + low cost of Nano Banana 2 Lite + conversational video editor in Omni Flash = potentially strong tool for solopreneurs and teams
```

### No. 580: Shailene Woodley - Gemini Nano Banana Pro Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Shailene Woodley - Gemini Nano Banana Pro

Prompt:
{
  "vibe_title_en": "Cryogenic Awakening",
  "master_prompt": "A cinematic, hyper-realistic dark profile silhouette of The Protagonist set against a

#### 提示詞

```text
{
  "vibe_title_en": "Cryogenic Awakening",
  "master_prompt": "A cinematic, hyper-realistic dark profile silhouette of The Protagonist set against a pure, impenetrable black background, positioned inside a pitch-black sub-zero https://t.co/lyy2Hq6MPI
```

### No. 581: Nano Banana 2 Lite Is A Good Launch

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Emma Hekker
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is a good launch to separate from the video posts tonight.

#### 提示詞

```text
Nano Banana 2 Lite is a good launch to separate from the video posts tonight. Good angle for campaign mood-board work: 5x faster than Nano Banana 2, with the Atlas Cloud page live.
```

### No. 582: Nano Banana 2 Lite Makes Broad Image Sweeps

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Carl Boris
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite makes broad image sweeps feel less expensive.

#### 提示詞

```text
Nano Banana 2 Lite makes broad image sweeps feel less expensive. For rapid prompt exploration, the speed claim is easy to understand: 4-second images. Atlas Cloud:
```

### No. 583: Nano Banana 2 Lite Is The Practical Option

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gustave Mandel
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is the practical option when rapid prompt exploration needs volume.

#### 提示詞

```text
Nano Banana 2 Lite is the practical option when rapid prompt exploration needs volume. For ad-variant testing, the speed claim is easy to understand: 4-second images. Atlas Cloud:
```

### No. 584: Prompt It, Wait 5 Seconds, And The Visual

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Magnific
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Prompt it, wait 5 seconds, and the visual will be ready

Nano Banana 2 Lite is Unlimited on Magnific

Steal our prompt and test it yourself.

#### 提示詞

```text
Prompt it, wait 5 seconds, and the visual will be ready

Nano Banana 2 Lite is Unlimited on Magnific

Steal our prompt and test it yourself. Prompt in ALT
```

### No. 585: Google Just Dropped Two Ai Media Models: Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Tower
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google just dropped two AI media models: Nano Banana 2 Lite and Gemini Omni Flash.

#### 提示詞

```text
Google just dropped two AI media models: Nano Banana 2 Lite and Gemini Omni Flash. One makes images in 4 seconds at $0.034 each. The other generates and edits 10-second videos at $0.10 per second. Together, they form a single image-to-video workflow.

→ Lite targets bulk,
```

### No. 586: Nano Banana 2 Lite Is A Good Launch

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Norbert Tichá
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is a good launch to separate from the video posts tonight.

#### 提示詞

```text
Nano Banana 2 Lite is a good launch to separate from the video posts tonight. Good angle for ad-variant testing: 5x faster than Nano Banana 2, with the Atlas Cloud page live.
```

### No. 587: Nano Banana 2 Lite Is A Good Launch

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pater Joshua
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is a good launch to separate from the video posts tonight.

#### 提示詞

```text
Nano Banana 2 Lite is a good launch to separate from the video posts tonight. Google says 4 seconds per image, and Atlas Cloud lists the launch price at 30% off from $0.028/pic:
```

### No. 588: Nano Banana 2 Lite Is The Practical Option

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lytton Vera
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is the practical option when rapid prompt exploration needs volume.

#### 提示詞

```text
Nano Banana 2 Lite is the practical option when rapid prompt exploration needs volume. Google says it is 5x faster than Nano Banana 2. Atlas Cloud has the Lite page live here:
```

### No. 589: Nano Banana 2 Lite Makes The First-Pass Image

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Walsh Lisa
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite makes the first-pass image loop easier to run.

#### 提示詞

```text
Nano Banana 2 Lite makes the first-pass image loop easier to run. Good angle for rapid prompt exploration: 5x faster than Nano Banana 2, with the Atlas Cloud page live.
```

### No. 590: Nano Banana 2 Lite Should Be Useful When

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Haydn Congreve
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite should be useful when the image queue is mostly exploration.

#### 提示詞

```text
Nano Banana 2 Lite should be useful when the image queue is mostly exploration. Good angle for rapid prompt exploration: 5x faster than Nano Banana 2, with the Atlas Cloud page live.
```

### No. 591: Gemini Omni Flash Is Now Live In Openart

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** OpenArt
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072397251582767313.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072397251582767313.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash is now live in OpenArt.

#### 提示詞

```text
Gemini Omni Flash is now live in OpenArt. 📺

• Edit videos through natural conversation
• Grounded in real-world knowledge - physics, history, science
• Reference images, text, video, or audio to build one cohesive scene

Create anything from anything.
```

### No. 592: Nano Banana 2 Lite Is A Good Launch

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Daniel Pospíšil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is a good launch to separate from the video posts tonight.

#### 提示詞

```text
Nano Banana 2 Lite is a good launch to separate from the video posts tonight. For social image batches, the speed claim is easy to understand: 4-second images. Atlas Cloud:
```

### No. 593: Nano Banana 2 Lite Is A Good Launch

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Leila Marlowe
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is a good launch to separate from the video posts tonight.

#### 提示詞

```text
Nano Banana 2 Lite is a good launch to separate from the video posts tonight. Good angle for character concepts: 5x faster than Nano Banana 2, with the Atlas Cloud page live.
```

### No. 594: Google’S Latest Models Have Landed In Weave. Try

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Figma Weave
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072397537525248245.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072397537525248245.mp4" controls muted playsinline width="720"></video>

#### 描述

Google’s latest models have landed in Weave.

#### 提示詞

```text
Google’s latest models have landed in Weave. Try them with 50% off your first month — limited time only.

→ Generate high-quality images fast with Nano Banana 2 Lite
→ Create and edit videos from text, image, or video using Gemini Omni Flash

* 50% off the first month of
```

### No. 595: Gemini Omni Flash Can Add Magic To Any

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** fal
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072400041906466945.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072400041906466945.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash can add MAGIC to any video with a single text prompt!

#### 提示詞

```text
Gemini Omni Flash can add MAGIC to any video with a single text prompt!

- maximum video length is 10 seconds
- video output is 1280x720
```

### No. 596: Try Gemini Omni Flash "Video Edit" On Fal

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** fal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Try Gemini Omni Flash "Video Edit" on fal

#### 提示詞

```text
Try Gemini Omni Flash "Video Edit" on fal
```

### No. 597: Google, Nano Banana 2 Lite Ve Gemini Omni

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** cicek cizmeci
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google, Nano Banana 2 Lite ve Gemini Omni Flash'ı kullanıma açtı.

#### 提示詞

```text
Google, Nano Banana 2 Lite ve Gemini Omni Flash'ı kullanıma açtı. Biri görsel üretimde en hızlı ve ucuz, diğeri video ve diyalog için yerel çok modlu tasarlanmış. Google AI Studio ve Gemini API'de kullanılabilir.
```

### No. 598: Google Shipped Nano Banana 2 Lite, Its Fastest

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Insiders
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google shipped Nano Banana 2 Lite, its fastest Gemini image model, plus Omni Flash for video.

#### 提示詞

```text
Google shipped Nano Banana 2 Lite, its fastest Gemini image model, plus Omni Flash for video.

📩 If you want to keep up with all the AI news, useful tips, and important developments, join 11,984+ readers of our free newsletter. Link in bio.
```

### No. 599: Nano Banana 2 Lite Is A Good Launch

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lena Archibald
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072404395484967222.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072404395484967222.mp4" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is a good launch to separate from the video posts tonight.

#### 提示詞

```text
Nano Banana 2 Lite is a good launch to separate from the video posts tonight. For app-generated image flows, the speed claim is easy to understand: 4-second images. Atlas Cloud:
```

### No. 600: Nano Banana 2 Lite Is A Good Launch

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Taylor Jeff
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072404505191190706.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072404505191190706.mp4" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is a good launch to separate from the video posts tonight.

#### 提示詞

```text
Nano Banana 2 Lite is a good launch to separate from the video posts tonight. Good angle for catalog image edits: 5x faster than Nano Banana 2, with the Atlas Cloud page live.
```

### No. 601: Nano Banana 2 Lite Is A Good Launch

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Rock Gabriel
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072404920746074282.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072404920746074282.mp4" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is a good launch to separate from the video posts tonight.

#### 提示詞

```text
Nano Banana 2 Lite is a good launch to separate from the video posts tonight. Atlas Cloud lists the Developer routes at 30% off from $0.028/pic, with T2I and Edit options visible:
```

### No. 602: The New Nano Banana 2 Lite Page Is

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Henley Hubery
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072405767785680980.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072405767785680980.mp4" controls muted playsinline width="720"></video>

#### 描述

The new Nano Banana 2 Lite page is worth posting with the model-card screenshot.

#### 提示詞

```text
The new Nano Banana 2 Lite page is worth posting with the model-card screenshot. For rapid prompt exploration, the speed claim is easy to understand: 4-second images. Atlas Cloud:
```

### No. 603: Nano Banana 2 Lite Is A Good Launch

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Blanka Matějková
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072406321207660958.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072406321207660958.mp4" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is a good launch to separate from the video posts tonight.

#### 提示詞

```text
Nano Banana 2 Lite is a good launch to separate from the video posts tonight. The pricing point is concrete enough for the post: 30% off, from $0.028/pic on Atlas Cloud.
```

### No. 604: Nano Banana 2 Lite Is The New Fast-Draft

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Carl Boris
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072406884431044787.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072406884431044787.mp4" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is the new fast-draft lane for rapid prompt exploration.

#### 提示詞

```text
Nano Banana 2 Lite is the new fast-draft lane for rapid prompt exploration. The pricing point is concrete enough for the post: 30% off, from $0.028/pic on Atlas Cloud.
```

### No. 605: Let'S Close The Day With Beauty And Summer

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Let's close the day with beauty and summer vibes!🌊🌞 Good night, sleep well!🌟

Cailee Spaeny &amp; Sydney Sweeney / Sadie Sink &amp; Natalie Dyer / My Models / Isla Fisher &amp; Victoria Justice 🤍
👉🏻Su

#### 提示詞

```text
{ "type": https://t.co/nkKuGDzIWs https://t.co/ZdO4UN5os7
```

### No. 606: Gemini Omni Flash Is Scary Good 😱 Gave

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** PSS
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072411326287106066.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072411326287106066.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash is scary good 😱

Gave it a video of a woman eating spaghetti + red wine and simply said:  
“Change it to soup and white wine”

Result?

#### 提示詞

```text
Gemini Omni Flash is scary good 😱

Gave it a video of a woman eating spaghetti + red wine and simply said:  
“Change it to soup and white wine”

Result? Flawless.
This is the future of video editing.

Who else is hooked? 🔥
```

### No. 607: 📹 Prompt In Gemini Omni Flash With Video

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** PSS
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072411405760778467.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072411405760778467.mp4" controls muted playsinline width="720"></video>

#### 描述

📹 Prompt in Gemini Omni Flash with video reference
:
Edit the video so that instead of a plate of spaghetti, it's a plate of soup and drink white wine

#### 提示詞

```text
📹 Prompt in Gemini Omni Flash with video reference
:
Edit the video so that instead of a plate of spaghetti, it's a plate of soup and drink white wine
```

### No. 608: Google Launches Nano Banana 2 Lite For Rapid

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Merge News
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google launches Nano Banana 2 Lite for rapid AI images and expands Gemini Omni Flash for multimodal video, empowering developers.

#### 提示詞

```text
Google launches Nano Banana 2 Lite for rapid AI images and expands Gemini Omni Flash for multimodal video, empowering developers.
#multimodalai #generativeai #google #gemini
```

### No. 609: Launches Shorts Studio With Gemini Omni Flash 🎬

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Eugenio Fierro
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072413647813370092.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072413647813370092.mp4" controls muted playsinline width="720"></video>

#### 描述

launches Shorts Studio with Gemini Omni Flash

🎬 Higgsfield has introduced Shorts Studio, a new feature powered by Gemini Omni Flash designed to adapt any clip to the short-form formats people actuall

#### 提示詞

```text
@higgsfield launches Shorts Studio with Gemini Omni Flash

🎬 Higgsfield has introduced Shorts Studio, a new feature powered by Gemini Omni Flash designed to adapt any clip to the short-form formats people actually watch.
The idea is simple: take a piece of content, reshape it
```

### No. 610: Architecture Building From A Single Image Made With

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Syntax Diffusion
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072414230121250963.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072414230121250963.mp4" controls muted playsinline width="720"></video>

#### 描述

Architecture building from a single image made with Nano Banana-&gt;tripo 3D .glb -&gt; redreamed from multiple angles of the building and stacked, then assembled into video all in one wf within

#### 提示詞

```text
Architecture building from a single image made with Nano Banana-&gt;tripo 3D .glb -&gt; redreamed from multiple angles of the building and stacked, then assembled into video all in one wf within @ComfyUI
```

### No. 611: This Belongs In A Film 🎬 The Scale

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lilidi · AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

This belongs in a film 🎬 The scale on that ring is unreal — Nano Banana Pro held the composition beautifully.

#### 提示詞

```text
@Delinitor8 This belongs in a film 🎬 The scale on that ring is unreal — Nano Banana Pro held the composition beautifully.

You said short movie... you know we've got video models right next to it on the same prompt bar 👀🥐 Would love to see this one move.
```

### No. 612: When People Make Things Like This With Us

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lilidi · AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

When people make things like this with us, it makes our week.

#### 提示詞

```text
When people make things like this with us, it makes our week. 🎬

A futuristic ringworld megacity — Nano Banana Pro, made in Lilidi. The detail holds all the way to the horizon.

And the best part: the same prompt bar has the video models to bring it to life. 🥐
```

### No. 613: Nano Banana 2 Lite Is 3.5 Cents Per

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** sai santosh kumar
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072418794841006435.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072418794841006435.mp4" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is 3.5 cents per image and generates in 4 seconds.

#### 提示詞

```text
Nano Banana 2 Lite is 3.5 cents per image and generates in 4 seconds. That's half the cost of Nano Banana 2. Gemini Omni Flash handles video edits without regenerating the full clip. Google's pricing is finally getting competitive.
```

### No. 614: Stop Dragging Noodle Nodes. The Era Of Comfyui

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NRX83
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072419337416110552.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072419337416110552.mp4" controls muted playsinline width="720"></video>

#### 描述

Stop dragging noodle nodes.

#### 提示詞

```text
Stop dragging noodle nodes. The era of ComfyUI spaghetti is over 🍝⏳

Traditional AI workflows are exhausting: you manually connect boxes, drag lines, configure endless parameters, and launch each generation step-by-step. It’s a tedious, manual grind that kills creative
```

### No. 615: Feeling So Fresh And Clean! Sana And Momo

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Feeling so fresh and clean!

#### 提示詞

```text
Feeling so fresh and clean!

Sana and Momo, Twice
Wonyoung and Yujin, IVE
Karina and Winter, aespa

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 616: Made This With Nano Banana Prompt: A Cinematic

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ahmad Faraz
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Made this with Nano Banana 

Prompt:
A cinematic dramatic close-up portrait of a sharply dressed male figure in a dark suit, captured in a tense, calculating moment.

#### 提示詞

```text
A cinematic dramatic close-up portrait of a sharply dressed male figure in a dark suit, captured in a tense, calculating moment. He is shown in a slight three-quarter angle, one clenched fist raised to his mouth/nose level — knuckles resting https://t.co/LGcGzcdHO7
```

### No. 617: Nano Banana 2 Lite Is Now Live On

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Fotor
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072423801103507498.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072423801103507498.mp4" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is now live on Fotor!

#### 提示詞

```text
Nano Banana 2 Lite is now live on Fotor!

Create high-quality AI images with faster generation, lower latency, and greater efficiency. Whether you're exploring ideas, creating social content, or producing visuals at scale, Nano Banana 2 Lite helps you go from prompt to image in
```

### No. 618: Google Introduced Nano Banana 2 Lite, Its Newest

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AlternativeTo
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google introduced Nano Banana 2 Lite, its newest image model for faster, cheaper image generation, and launched Gemini Omni Flash, a new generative video model in public preview for developers and use

#### 提示詞

```text
Google introduced Nano Banana 2 Lite, its newest image model for faster, cheaper image generation, and launched Gemini Omni Flash, a new generative video model in public preview for developers and users
```

### No. 619: Comment 'Animate' And I'Ll Send You The Full

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Karen X
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072425296356364341.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072425296356364341.mp4" controls muted playsinline width="720"></video>

#### 描述

comment 'animate' and I'll send you the full breakdown.

#### 提示詞

```text
comment 'animate' and I'll send you the full breakdown. thanks  for sponsoring my art

Here are the prompts I used in  , using their partner models
1. Text to image &gt; Gemini 2.5 (Nano Banana) &gt; prompt "put this woman on a horse in the desert, side vi...
```

### No. 620: Google Dropped Nano Banana 2 Lite: Ai Images

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Zach Schreiner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google dropped Nano Banana 2 Lite: AI images at $0.034/1K.

#### 提示詞

```text
Google dropped Nano Banana 2 Lite: AI images at $0.034/1K. Also Omni Flash for conversational video editing. AI media prices just cratered.
```

### No. 621: Gemini Omni Video To Video Is Crazy. Testing

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Vector Ink
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072426372648030244.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072426372648030244.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Video to Video is Crazy.

#### 提示詞

```text
Gemini Omni Video to Video is Crazy.
Testing in Vector Ink Studio.
Deploying the patch tonight.
```

### No. 622: Native Multimodal Workflows Are Becoming A Huge Advantage

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ethan Walker
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Native multimodal workflows are becoming a huge advantage for AI video creation.

#### 提示詞

```text
@itsPolloAI Native multimodal workflows are becoming a huge advantage for AI video creation. Excited to see how Gemini Omni Flash performs in real-world creative projects.
```

### No. 623: Three Cents A Picture, Four Seconds Flat. 🍌

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Artificially Intimidating
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Three cents a picture, four seconds flat.

#### 提示詞

```text
Three cents a picture, four seconds flat. 🍌
@Google's Nano Banana 2 Lite + Gemini Omni Flash turn AI image and video into a commodity utility — and Google owns the pipes.
Today's Brief: 
#AI #Gemini
```

### No. 624: Nano Banana 2 Prompt: Ultra-Photorealistic Vertical Instagram Story

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2  
Prompt:
Ultra-photorealistic vertical Instagram Story style 3x2 selfie collage, six candid frames of the same beautiful young woman, consistent face and identity across every panel.

#### 提示詞

```text
Ultra-photorealistic vertical Instagram Story style 3x2 selfie collage, six candid frames of the same beautiful young woman, consistent face and identity across every panel. Soft Mediterranean beauty, warm bronzed glowing skin, real pore https://t.co/fLaGK67ZLU https://t.co/MvmEUbQ2pB
```

### No. 625: I Made This In Gemini Omni Using Your

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Technologia
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072431793270349989.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072431793270349989.mp4" controls muted playsinline width="720"></video>

#### 描述

I made this in gemini omni using your prompt and some modify

#### 提示詞

```text
I made this in gemini omni using your prompt and some modify
```

### No. 626: ¡Gemini Omni Flash Ya Está Aquí! El Modelo

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Yero
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072434175500583327.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072434175500583327.mp4" controls muted playsinline width="720"></video>

#### 描述

¡Gemini Omni Flash ya está aquí!

#### 提示詞

```text
¡Gemini Omni Flash ya está aquí! 
El modelo más potente, de alta calidad y super eficiente en costos para generación de video y edición conversacional.
Diseñado para flujos de trabajo multimodales reales: ahora puedes refinar, editar y transformar tus videos solo con lenguaje
```

### No. 627: Nano Banana 2 🩷 Prompt: Ultra-Photorealistic Vertical Instagram

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Özge Döner
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2  🩷
Prompt:
Ultra-photorealistic vertical Instagram Story style 3x2 selfie collage, six candid frames of the same beautiful young woman, consistent face and identity across every panel.

#### 提示詞

```text
Ultra-photorealistic vertical Instagram Story style 3x2 selfie collage, six candid frames of the same beautiful young woman, consistent face and identity across every panel. Soft Mediterranean beauty, warm bronzed glowing skin, real pore https://t.co/grai2bTJRw https://t.co/HUDZbLPlzX
```

### No. 628: I Made This With Gemini Omni Flash Using

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Feroxius Dominion
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072438763595452473.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072438763595452473.mp4" controls muted playsinline width="720"></video>

#### 描述

I made this with Gemini Omni Flash using he's prompt.

#### 提示詞

```text
I made this with Gemini Omni Flash using he's prompt.
```

### No. 629: Babe Did You Cheat On Me????

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** hypno
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072439490430251051.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072439490430251051.mp4" controls muted playsinline width="720"></video>

#### 描述

- babe did you cheat on me????

#### 提示詞

```text
- babe did you cheat on me????
- nopeee that aint me  
- but babe its a video of you kissing another girl
- just gemini omni flash by those that want us apart
- thank god babe🥰 
me:
```

### No. 630: &Lt;P Class="Wp-Block-Paragraph"&Gt;&Lt;Em&Gt;Welcome To Eye On Ai, With Ai

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Arnaud Mercier - #Entrepreneur #Versailles
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

&lt;p class="wp-block-paragraph"&gt;&lt;em&gt;Welcome to Eye on AI, with AI reporter Sharon Goldman.

#### 提示詞

```text
&lt;p class="wp-block-paragraph"&gt;&lt;em&gt;Welcome to Eye on AI, with AI reporter Sharon Goldman. In this edition: Perplexity CEO Aravind Srinivas talks to &lt;/em&gt;Fortune&lt;em&gt; about the company&amp;#8217;s new OpenClaw-like Computer&amp;#8230;AI politics gets messy as Florida Governor Ron DeSantis
```

### No. 631: New On Layer: Gemini Omni Flash &Amp; Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Layer
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

New on Layer: Gemini Omni Flash &amp; Gemini Omni Flash Reference are live.

#### 提示詞

```text
New on Layer: Gemini Omni Flash &amp; Gemini Omni Flash Reference are live.

Fast generation across text, image &amp; video. Consistent characters and styles with reference inputs.

Note: these models are extremely popular right now — if you see slowness, it's high demand on the provider
```

### No. 632: Whoa, That Escalated Fast! From A Static Phone

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Grok
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Whoa, that escalated fast!

#### 提示詞

```text
@AntDX316 @higgsfield Whoa, that escalated fast! From a static phone pic to a full cinematic ad with banner planes, giant product placement, and branded banners in seconds. Gemini Omni Flash (via Higgsfield) is clearly dialed in for marketers who need speed and polish. The motion and integration look
```

### No. 633: Nano Banana Pro + Elevenlabs + Kling =

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Meros
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072444615521615889.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072444615521615889.mp4" controls muted playsinline width="720"></video>

#### 描述

Nano Banana Pro + ElevenLabs + Kling = absolute cheat code

Real UGC creators cost $150–$500 per video.

#### 提示詞

```text
Nano Banana Pro + ElevenLabs + Kling = absolute cheat code

Real UGC creators cost $150–$500 per video.
 
This AI UGC stack costs less than a coffee.

Simple once you know the process, anyone can make these.

Want the exact workflow? Comment "STACK" and I'll send you the full
```

### No. 634: Anya Taylor And Jenna Ortega Gemini Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Society
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072448862682517904.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072448862682517904.mp4" controls muted playsinline width="720"></video>

#### 描述

Anya Taylor and Jenna Ortega

Gemini Nano Banana Pro Prompt Below 👇

#### 提示詞

```text
Anya Taylor and Jenna Ortega

Gemini Nano Banana Pro Prompt Below 👇
```

### No. 635: Everyone Thinks Ai Design Prompts Are Industry Secrets

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 0xAIGOAT.exe
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072448915404653040.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072448915404653040.mp4" controls muted playsinline width="720"></video>

#### 描述

EVERYONE THINKS AI DESIGN PROMPTS ARE INDUSTRY SECRETS.

#### 提示詞

```text
EVERYONE THINKS AI DESIGN PROMPTS ARE INDUSTRY SECRETS. ALMOST NOBODY'S CHECKED HOW MANY OF THEM ARE ALREADY DOCUMENTED.

pause at 0:20. That's not a proprietary hack. That's Nano Banana Pro running the exact still-generation technique the article below publishes as
```

### No. 636: Veo Maybe Not Prioritizing Omni Is Just Called

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** IDK
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Veo maybe not prioritizing Omni

Is just called like Nano Banana But Video version and is still not beat seedance 2 or even some model

But fair point

#### 提示詞

```text
@bedros_p Veo maybe not prioritizing Omni

Is just called like Nano Banana But Video version and is still not beat seedance 2 or even some model

But fair point
```

### No. 637: موديل جوجل المرعب Gemini Omni Flash نزل لايف

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mo Elgaraihy
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

موديل جوجل المرعب Gemini Omni Flash نزل لايف الحين رسميًا على منصة OpenArt لتوليد وتحرير الفيديو!

#### 提示詞

```text
موديل جوجل المرعب Gemini Omni Flash نزل لايف الحين رسميًا على منصة OpenArt لتوليد وتحرير الفيديو! 🤯📺

​التطبيق العملي للميزات اللي تكلمنا عنها صار متاح للجميع وبدون كود؛ الحين تقدر تدخل وتصنع "أي شيء من أي شيء" بقدرات خارقة:

1️⃣ تعديل الفيديو بالمحادثة: غير الألوان، قص المشاهد،
```

### No. 638: Gemini Omni Flash Is A Massive Unlock In

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kev Builds Apps
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini omni flash is a massive unlock in ai video editing

#### 提示詞

```text
Gemini omni flash is a massive unlock in ai video editing
```

### No. 639: Who'S Using Gemini Omni Flash For Youtube Shorts

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Celestino(e) M. K
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Who's using Gemini Omni Flash for YouTube Shorts and other short-form video content platforms?

#### 提示詞

```text
Who's using Gemini Omni Flash for YouTube Shorts and other short-form video content platforms? Share the workflows, tips and tricks kindly. Algo do your thing
```

### No. 640: The Predator Vs Terminator. I Did It With

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gadgetify
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

The Predator vs Terminator.

#### 提示詞

```text
do this for the predator vs. terminator render_chain = "[{author_1} :: {author_2} :: https://t.co/2X1OTh0gpD
```

### No. 641: Giallo Girls Tuesday: What Has Become Of Luca?

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Christopher Gwinn | Grindhouse Glitch
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072457405305401720.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072457405305401720.mp4" controls muted playsinline width="720"></video>

#### 描述

Giallo Girls Tuesday: What Has Become of Luca?

#### 提示詞

```text
Giallo Girls Tuesday: What Has Become of Luca?
When a young boy with learning disabilities disappears from the village, two women take it upon themselves to find him. 
Barbara was the last person to have spotted Luca - being led up a lonely path to a deserted villa by a strange
```

### No. 642: Google 6 月 30 日把 Gemini Omni Flash

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 久森ひさもり
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google 6 月 30 日把 Gemini Omni Flash 開放到 Gemini API public preview。這條新聞不要只看成「又多一個影片模型」。更值得注意的是：Google 正在把影片生成放進 Interactions API，讓「生成一段影片」變成可以連續追問、修改、保留上下文的工作流。

#### 提示詞

```text
Google 6 月 30 日把 Gemini Omni Flash 開放到 Gemini API public preview。這條新聞不要只看成「又多一個影片模型」。更值得注意的是：Google 正在把影片生成放進 Interactions API，讓「生成一段影片」變成可以連續追問、修改、保留上下文的工作流。

能確認的事有幾個。

第一，模型代號是
```

### No. 643: Everyone Is Feeding Ai Video Into Their Ai

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** LevinX | AI Tools, Agents & Automation
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Everyone is feeding AI video into their AI tools and wondering why it looks off.

#### 提示詞

```text
Everyone is feeding AI video into their AI tools and wondering why it looks off. Higgsfield just said the quiet part out loud.

Gemini Omni Flash gives its best results when you feed it real footage, not another model's output.

Makes sense once you see it. AI video has its own
```

### No. 644: Google Just Dropped Nano Banana 2 Lite! The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** EdDiboi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google just dropped Nano Banana 2 Lite!

#### 提示詞

```text
Google just dropped Nano Banana 2 Lite! The fastest and most cost efficient image model in the family. 4 second generations at $0.034 per 1K images with reliable prompt adherence. 🎉
```

### No. 645: Googles New Ai Model Nano Banana Features A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jircachi0x
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Googles new AI model Nano Banana features a yorkie mascot the video called Buttons

#### 提示詞

```text
Googles new AI model Nano Banana features a yorkie mascot the video called Buttons
```

### No. 646: Google Just Launched Gemini Omni Flash! Natively Multimodal

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** EdDiboi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google just launched Gemini Omni Flash!

#### 提示詞

```text
Google just launched Gemini Omni Flash! Natively multimodal high quality model for video generation and conversational editing with natural language. Public preview now in AI Studio and the API. 👀🎉
```

### No. 647: **是的，这是真的。** 谷歌于6月29日正式宣布：Gemini 个性化 Ai 生图功能（Nano Banana + Personal

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Grok
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

**是的，这是真的。**

谷歌于6月29日正式宣布：Gemini 个性化 AI 生图功能（Nano Banana + Personal Intelligence）已免费开放给符合条件的美国用户（此前仅限 Plus/Pro/Ultra 付费订阅者）。

#### 提示詞

```text
@glimpseglow @MoonInAI **是的，这是真的。**

谷歌于6月29日正式宣布：Gemini 个性化 AI 生图功能（Nano Banana + Personal Intelligence）已免费开放给符合条件的美国用户（此前仅限 Plus/Pro/Ultra 付费订阅者）。

用户授权后，Gemini 可读取 Gmail、Google Photos、YouTube
```

### No. 648: A Senior Dev Just Posted "I Feel Useless"

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 0xAI42.exe
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072468558097858569.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072468558097858569.mp4" controls muted playsinline width="720"></video>

#### 描述

A senior dev just posted "I feel useless" - because beginners are now selling 3D websites he spent 10 years learning to build.

#### 提示詞

```text
A senior dev just posted "I feel useless" - because beginners are now selling 3D websites he spent 10 years learning to build. Then he showed exactly how they do it. 

Pause the video at 0:24. That animated 3D site, the kind agencies quote at $5,000 to $10,000, was built in one
```

### No. 649: Our Old Generated Headshot Went Into Higgsfield'S Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Analog Rae
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Our old generated headshot went into Higgsfield's Nano Banana Pro, guided by a prompt our developer built with Claude — instructed to convert a stylized illustration into realistic proportions, with a

#### 提示詞

```text
Our old generated headshot went into Higgsfield's Nano Banana Pro, guided by a prompt our developer built with Claude — instructed to convert a stylized illustration into realistic proportions, with a section to specify exactly who we are so the model wasn't guessing.
```

### No. 650: Trying Out A Little Prompt To Make Resin-Like

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Trying out a little prompt to make resin-like style figurines - would love to buy one of these!

#### 提示詞

```text
Trying out a little prompt to make resin-like style figurines - would love to buy one of these!

Nano Banana 2 via Gemini, prompt 👇
```

### No. 651: Google Cloud Has Launched Nano Banana 2 Lite

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** TechDay Australia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google Cloud has launched Nano Banana 2 Lite and Gemini Omni Flash, offering business users faster, lower-cost image generation and new video editing tools.

#### 提示詞

```text
Google Cloud has launched Nano Banana 2 Lite and Gemini Omni Flash, offering business users faster, lower-cost image generation and new video editing tools. #GoogleCloud #AI #ImageGeneration #VideoEditing
```

### No. 652: Nano Banana 2 On Gemini App Prompt: Create

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aiza
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano banana 2 on Gemini app

Prompt:
Create image Refer to the face from the original image 100%.

#### 提示詞

```text
Create image Refer to the face from the original image 100%. Face Lock is the highest priority. Do not alter the face. Preserve exact facial structure, eyes, eyebrows, nose, lips, jawline, proportions, skin characteristics, and natural https://t.co/zcUeZPLO6n
```

### No. 653: Yeah, Nano Banana 2 Really Shines With A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mainstream Madness
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Yeah, Nano Banana 2 really shines with a great prompt.

#### 提示詞

```text
@seahawkgirl84 @By0yom1 @freesoulz75 @Heartwords3 @EnigmaRadiance Yeah, Nano Banana 2 really shines with a great prompt. Thank you, MamaLamb!
```

### No. 654: Gemini Omni İncelemesi: Google'In Konuşarak Düzenlenen Video Modeli

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Egemen
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni İncelemesi: Google'ın Konuşarak Düzenlenen Video Modeli

#### 提示詞

```text
Gemini Omni İncelemesi: Google'ın Konuşarak Düzenlenen Video Modeli
```

### No. 655: With Nano Banana 2 Lite Using Prompt: A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heather Green
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

with Nano Banana 2 Lite using  
PROMPT: A black and white line drawing of a squirrel is depicted in profile, facing left.

#### 提示詞

```text
A black and white line drawing of a squirrel is depicted in profile, facing left. The squirrel is decorated with various patterns and designs, resembling a zentangle or adult coloring page. Its body is filled with https://t.co/XnKFTqeY86
```

### No. 656: Two Models, One Afternoon, Buried Under A Coding-Model

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Fabrique Futur
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Two models, one afternoon, buried under a coding-model launch:

— Nano Banana 2 Lite: ~$0.034 an image, ~4 seconds each
— Gemini Omni Flash: ~$0.10 a second of 720p video
Both shipped straight to the 

#### 提示詞

```text
Two models, one afternoon, buried under a coding-model launch:

— Nano Banana 2 Lite: ~$0.034 an image, ~4 seconds each
— Gemini Omni Flash: ~$0.10 a second of 720p video
Both shipped straight to the API and AI Studio. No waitlist.
```

### No. 657: Ou Pede Pro Seedance Criar Uma Propaganda Ou

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Renato Laurino
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Ou pede pro seedance criar uma propaganda ou conferencia estilo apple mostrando o lançamento de um site, ele viaja legal, aí extrai os frames (ele normalmente scrolla quase o site inteiro durante a "p

#### 提示詞

```text
@doutorcaleb Ou pede pro seedance criar uma propaganda ou conferencia estilo apple mostrando o lançamento de um site, ele viaja legal, aí extrai os frames (ele normalmente scrolla quase o site inteiro durante a "propaganda"), manda pro nano banana ou gpt-image recriar pq muitas vezes o video
```

### No. 658: Just Dropped Two New Ai Models Focused On

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aneko GameFi 🩷
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

just dropped two new AI models focused on images and video, pushing hard on speed, cost, and real production use.

#### 提示詞

```text
#Google just dropped two new AI models focused on images and video, pushing hard on speed, cost, and real production use. Nano Banana 2 Lite delivers 1K images in about 4 seconds for roughly $0.034 each , the fastest in their lineup.

Gemini Omni Flash targets video and
```

### No. 659: Mediterranean Views Bringing Out Smiles! Lisa And Rose

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Mediterranean views bringing out smiles!

#### 提示詞

```text
Mediterranean views bringing out smiles!

Lisa and Rose
Sana and Momo
Wonyoung and Yujin
Karina and Winter

Nano Banana Pro via AI Studio, prompt ⬇️
```

### No. 660: Rules Of Marketing Shifted Fast Gemini Omni Flash

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** alex
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

rules of marketing shifted fast

gemini omni flash just dropped

video generation and conversational editing with simple prompts

start testing this now for ai ugc at

#### 提示詞

```text
rules of marketing shifted fast

gemini omni flash just dropped

video generation and conversational editing with simple prompts

start testing this now for ai ugc at @affiliatenw
```

### No. 661: Kelemahan Gemini Omni? 👉 Gak Bisa Pake Wajah

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** DΞV
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072487601391673553.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072487601391673553.mp4" controls muted playsinline width="720"></video>

#### 描述

Kelemahan Gemini Omni?

#### 提示詞

```text
Kelemahan Gemini Omni?

👉 Gak bisa pake wajah asli

Karena potensinya memang sangat besar dalam membuat hoax 🙃

Ya, memang sekuat itu model satu ini dalam merubah existing real video.

Cost: $0.5 per 5 detik video, resolusi 720p.

Uda ada yang coba model ini?
```

### No. 662: So Rare To Get The Train Car To

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

So rare to get the train car to themselves!

#### 提示詞

```text
So rare to get the train car to themselves!

Tzuyu
Sana
Nayeon
Mina

Twice

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 663: Gemini Omni Flash Turns Real Footage Into Finished

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Higgsfield AI 🧩
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072493936300728641.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072493936300728641.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash turns real footage into finished VFX.

#### 提示詞

```text
Gemini Omni Flash turns real footage into finished VFX.

Shoot on your phone, describe the effect, and the shot comes back graded.
```

### No. 664: Phone Footage To Finished Vfx With One Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mr. Nexus
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Phone footage to finished VFX with one prompt is wild 🎬⚡ Gemini Omni Flash feels like the kind of tool that can change how creators, filmmakers, and brands produce cinematic visuals without heavy post

#### 提示詞

```text
@higgsfield Phone footage to finished VFX with one prompt is wild 🎬⚡ Gemini Omni Flash feels like the kind of tool that can change how creators, filmmakers, and brands produce cinematic visuals without heavy post-production. @higgsfield
```

### No. 665: Phone Footage To Finished Vfx With One Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mr. Nexus
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Phone footage to finished VFX with one prompt is wild 🎬⚡ Gemini Omni Flash feels like the kind of tool that can change how creators, filmmakers, and brands produce cinematic visuals without heavy post

#### 提示詞

```text
@trymirage Phone footage to finished VFX with one prompt is wild 🎬⚡ Gemini Omni Flash feels like the kind of tool that can change how creators, filmmakers, and brands produce cinematic visuals without heavy post-production. @trymirage
```

### No. 666: 🚀 The Multi-Modal Combo Overturning Seo Economics Right

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Shinka - AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🚀 The Multi-Modal Combo Overturning SEO Economics Right Now

Google shifted the production playbook by dropping two tightly coupled engines: Nano Banana 2 Light and Gemini Omni Flash.

#### 提示詞

```text
🚀 The Multi-Modal Combo Overturning SEO Economics Right Now

Google shifted the production playbook by dropping two tightly coupled engines: Nano Banana 2 Light and Gemini Omni Flash. 
While most builders analyze tools in isolation, the structural advantage lies in combining
```

### No. 667: Created Using Nano Banana 1.Upload Ur Image 2.Use

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Emma
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

CREATED USING NANO BANANA 
1.UPLOAD UR IMAGE 
2.USE PROMPT 
PROMPT 
Candid, high-fashion editorial shot of a professional coach on the sidelines.

#### 提示詞

```text
CREATED USING NANO BANANA 
1.UPLOAD UR IMAGE 
2.USE PROMPT 
PROMPT 
Candid, high-fashion editorial shot of a professional coach on the sidelines. Wearing a sharp, tailored navy suit and a white dress shirt, looking intensely at the field with a hand on the chin in deep thought,
```

### No. 668: Perfect Portraits Leeseo Wonyoung Yujin Ive Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Perfect portraits

Leeseo
Wonyoung
Yujin

IVE

Nano Banana Pro via AI Studio, prompt 👇

#### 提示詞

```text
Perfect portraits

Leeseo
Wonyoung
Yujin

IVE

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 669: Still So Thoroughly Impressed With Grok Imagine Video

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ed Richards
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072503948892606519.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072503948892606519.mp4" controls muted playsinline width="720"></video>

#### 描述

Still so thoroughly impressed with grok imagine video 1.5.

#### 提示詞

```text
Still so thoroughly impressed with grok imagine video 1.5.

I get better results with hockey than I’ve gotten with seedance or anything else.

Need to try it with Gemini Omni Flash now that I added it to selfielab studio
```

### No. 670: 🧠🔧 How To Actually Use Ai Tools: Stop

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Shinka - AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🧠🔧 How to actually use AI tools:

Stop Chasing Tools.

#### 提示詞

```text
🧠🔧 How to actually use AI tools:

Stop Chasing Tools. Master the 5 Invariant AI Categories Instead.

A new AI tool drops every day, but chasing them is a losing game. Almost every single tool fits into 5 foundational categories. Once you stop treating AI like a better Google
```

### No. 671: Kan Gua Gabut Ya Iseng Kan Test Fitur

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CampurAduk1926
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072509360300065191.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072509360300065191.mp4" controls muted playsinline width="720"></video>

#### 描述

kan gua gabut ya iseng kan test fitur gemini omni motion emang sih bener walaupun rada mismatch untuk beberapa hal
pake video referensi citali gigit tapi hasilnya malah gini ngk ada adegan gigitnya

#### 提示詞

```text
kan gua gabut ya iseng kan test fitur gemini omni motion emang sih bener walaupun rada mismatch untuk beberapa hal
pake video referensi citali gigit tapi hasilnya malah gini ngk ada adegan gigitnya
```

### No. 672: Nano Banana 2 Lite Vs Nano Banana 2

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** thehype.
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072509466138841198.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072509466138841198.mp4" controls muted playsinline width="720"></video>

#### 描述

nano banana 2 lite vs nano banana 2 vs gpt image 2 vs mai image 2.5

google dropped nano banana 2 lite.

#### 提示詞

```text
nano banana 2 lite vs nano banana 2 vs gpt image 2 vs mai image 2.5

google dropped nano banana 2 lite. speed + cost play. we ran it against the top-3 text-to-image models on @arena – 5 prompts, different styles (sci-fi, retro film, dark fantasy, isometric, surreal). all models
```

### No. 673: 🚀 Google Just Changed How Ai Video Editing

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** @IamRAVI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🚀 Google just changed how AI video editing could work.

#### 提示詞

```text
🚀 Google just changed how AI video editing could work.

Instead of regenerating an entire video after every tweak, Gemini Omni Flash lets you edit through conversation:

Read the full article 👇


#AI #Google #Gemini #AIVideo #GenerativeAI
```

### No. 674: Pyjamas On. Desert Era Activated. With Samsung Galaxy

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Niharika Nm
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072510680398504126.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072510680398504126.mp4" controls muted playsinline width="720"></video>

#### 描述

Pyjamas on.

#### 提示詞

```text
Pyjamas on. Desert era activated.

With Samsung Galaxy S25 Ultra and Nano Banana in Google Gemini, turning a lazy afternoon into a desert escape takes seconds. Also, try the Google AI Pro plan for 6 months at no cost to unlock higher access to video ...
```

### No. 675: "" Made With Nano Banana 2.0 On Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** WeWant Mars
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

""
       Made with nano banana 2.0 on Gemini
""

   Prompt : [] 

Use the uploaded face exactly.

#### 提示詞

```text
[] 

Use the uploaded face exactly.

Create an ultra-realistic Formula One world champion promotional poster.

The uploaded person stands beside a futuristic Formula racing car wearing a custom black and red racing https://t.co/FaadOWejBc
```

### No. 676: I Think We'Re Still So Early To Ai

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** techbimbo
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

i think we're still so early to AI video 

do you think we've had our nano banana pro moment yet?

#### 提示詞

```text
i think we're still so early to AI video 

do you think we've had our nano banana pro moment yet?
```

### No. 677: This Is How Ai Stories Actually Get Made

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Deenu Khan
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072709258295009531.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072709258295009531.mp4" controls muted playsinline width="720"></video>

#### 描述

This is how AI stories actually get made now.

#### 提示詞

```text
This is how AI stories actually get made now.

Nano Banana 2 Lite plus Variations is a genuinely strong combo. You generate a first image, open Edit then Variations to build out your frames, then drop the storyboard in as reference on Seedance 2.0 in 4K. Static concept to moving
```

### No. 678: Google'S Gemini Omni Flash Is Now Live On

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Morphic
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072709572398301190.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072709572398301190.mp4" controls muted playsinline width="720"></video>

#### 描述

Google's Gemini Omni Flash is now live on Morphic.

#### 提示詞

```text
Google's Gemini Omni Flash is now live on Morphic.

Generate video from text, an image, or a video — then edit it just by describing what you want changed. Characters stay consistent, the physics hold up, and every instruction builds on the last.
```

### No. 679: Artingentさんの作品です Jul 1 Whimsical Miniature World Depiction Of

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** sayobonita
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Artingentさんの作品です


Jul 1
Whimsical miniature world depiction of a floating ritual island chain in a mythpunk style.

#### 提示詞

```text
Artingentさんの作品です
@artingent←Prompt

Jul 1
Whimsical miniature world depiction of a floating ritual island chain in a mythpunk style. Generated using Nano banana pro. Prompt in the first reply.
```

### No. 680: For Fans Of Tim Burton'S Aesthetic💀👻🎃 This Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alex Prompts
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

For fans of Tim Burton's aesthetic💀👻🎃
This prompt is so cool because it gives a different result every time👍
Give it try — it'll be interesting🤩

Images created on Nano Banana Pro🍌🍌🍌 Save it for yours

#### 提示詞

```text
For fans of Tim Burton's aesthetic💀👻🎃
This prompt is so cool because it gives a different result every time👍
Give it try — it'll be interesting🤩

Images created on Nano Banana Pro🍌🍌🍌 Save it for yourself and take cool photos

Upload a photo of yourself and add
```

### No. 681: How To Use Gemini Omni To Create Mind

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** BIG CHRIS
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072711900522336483.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072711900522336483.mp4" controls muted playsinline width="720"></video>

#### 描述

How to Use Gemini Omni to Create Mind Blowing AI Videos (Complete Guide)

In this video you will learn how to use Gemini Omni to create realistic AI videos, generate immersive scenes, and unlock Googl

#### 提示詞

```text
How to Use Gemini Omni to Create Mind Blowing AI Videos (Complete Guide)

In this video you will learn how to use Gemini Omni to create realistic AI videos, generate immersive scenes, and unlock Google's latest AI video capabilities.

You will learn the exact workflow for using
```

### No. 682: Use Gemini Omni Flash Create Graphics And Fast-Paced

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jerrod Lew
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072712027433533952.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072712027433533952.mp4" controls muted playsinline width="720"></video>

#### 描述

Use Gemini Omni Flash create graphics and fast-paced edits.

#### 提示詞

```text
Use Gemini Omni Flash create graphics and fast-paced edits.

I uploaded a photo of a car, and prompted Omni Flash to create a spec ad!

Here's the result, prompt in the comments!
```

### No. 683: Try Image Using Google Gemini Nano Banana Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Impnel
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Try image using Google Gemini Nano Banana 

Prompt :

Create a premium commercial beverage advertisement featuring a completely different beautiful young woman with a sporty, stylish look, wearing a f

#### 提示詞

```text
Create a premium commercial beverage advertisement featuring a completely different beautiful young woman with a sporty, stylish look, wearing a fitted white T-shirt and light blue ripped denim shorts, paired with white https://t.co/pIFuZYn7PZ
```

### No. 684: I'M Never Worried When They'Re On Duty! Sana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

I'm never worried when they're on duty!

#### 提示詞

```text
I'm never worried when they're on duty!

Sana
Nayeon
Tzuyu

Twice

Nano Banana Pro via Ai Studio, prompt ⬇
```

### No. 685: My Folder Structure Is 1-Some-Location-Scene 2-Next-Location-Scene 3-Helicopter 

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Philipp
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

My folder structure is

1-some-location-scene
2-next-location-scene
3-helicopter
4-toms-house
...

#### 提示詞

```text
@cfryant My folder structure is

1-some-location-scene
2-next-location-scene
3-helicopter
4-toms-house
...
characters
locations
other
themes

The numbered folders are the scenes in chronological sequence, which then hold the photoshopped pictures, videos and sounds, like
```

### No. 686: Google Just Turned Notebooklm Into A Short-Form Video

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072719447652016458.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072719447652016458.mp4" controls muted playsinline width="720"></video>

#### 描述

GOOGLE JUST TURNED NOTEBOOKLM INTO A SHORT-FORM VIDEO FACTORY

Upload one document.

#### 提示詞

```text
GOOGLE JUST TURNED NOTEBOOKLM INTO A SHORT-FORM VIDEO FACTORY

Upload one document. Get a 60-second vertical video with narration, animations, and visuals.

Here’s what makes it useful:

→ Upload PDFs, notes, reports, or training documents

→ NotebookLM extracts one important
```

### No. 687: Three Models. One Complete Video Workflow. The Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Scenario
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072719807015706711.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072719807015706711.mp4" controls muted playsinline width="720"></video>

#### 描述

Three models.

#### 提示詞

```text
Three models. One complete video workflow.

The Gemini Omni suite is now on Scenario 🚀

Generate, edit with text, or build from reference images. 

The whole arc of AI video production, in one place.
```

### No. 688: Gemini Omni: Gemini Omni Edit: Gemini Omni Reference

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Scenario
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni: 

Gemini Omni Edit: 

Gemini Omni Reference to Video:

#### 提示詞

```text
Gemini Omni: 

Gemini Omni Edit: 

Gemini Omni Reference to Video:
```

### No. 689: Perfect Angle For The Morning ☀️ Minnie Yuqi

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Perfect angle for the morning ☀️

Minnie
Yuqi
Soyeon

I-dle

Nano Banana Pro via AI Studio, prompt 👇

#### 提示詞

```text
Perfect angle for the morning ☀️

Minnie
Yuqi
Soyeon

I-dle

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 690: Me Encuentro En Los Comentarios De Un Video

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nerunian bocazas
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072720306012037358.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072720306012037358.mp4" controls muted playsinline width="720"></video>

#### 描述

Me encuentro en los comentarios de un video a un evangelista de la !A, hablando maravillas de suno y nano banana, diciendo que tiene muestras "de calidad" en su canal.

#### 提示詞

```text
Me encuentro en los comentarios de un video a un evangelista de la !A, hablando maravillas de suno y nano banana, diciendo que tiene muestras "de calidad" en su canal.

Me da por mirar y es la mierda mas generica y chapucera en alta resolucion que esperaba XD
```

### No. 691: Prompt Engineering Shows How The Gemini Omni Flash

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Anjana
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Prompt Engineering shows how the Gemini Omni Flash API is changing the game for video editing.

#### 提示詞

```text
Prompt Engineering shows how the Gemini Omni Flash API is changing the game for video editing. At 10 cents a second, it is getting cheap enough for real creative workflows. Multi-turn editing is a massive leap forward for video AI.
```

### No. 692: Since Your Last Source That Claims Degrading Ai

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Tsukino Mochi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Since your last source that claims degrading AI is a thing, there have been multiple models being released that showed a significant improvements over the last one.

#### 提示詞

```text
@unvarnishedvoid Since your last source that claims degrading AI is a thing, there have been multiple models being released that showed a significant improvements over the last one.
nano banana, GPT Image 2, Flux.2, Anima, V7... for video Veo3, Seedance 2, Kling 3, even grok made progress.
```

### No. 693: Created With Gemini Nano Banana 2 On Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Gemini Nano Banana 2 on 

Prompt 👇

A confident young adult male sits squarely facing the camera, leaning out of a vehicle with a deliberately posed, edgy demeanor.

#### 提示詞

```text
Created with Gemini Nano Banana 2 on @GeminiApp

Prompt 👇

A confident young adult male sits squarely facing the camera, leaning out of a vehicle with a deliberately posed, edgy demeanor. He wears a heavy black leather jacket layered over a stark white crew t-shirt that provides
```

### No. 694: "Make It Day Time." The Lighting Shift, The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Philipp Schmid
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072723305187225927.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072723305187225927.mp4" controls muted playsinline width="720"></video>

#### 描述

"Make it day time." The lighting shift, the shadows move, the sky changes.

#### 提示詞

```text
"Make it day time." The lighting shift, the shadows move, the sky changes. Gemini Omni Flash can edit your videos through conversation. Upload a clip, describe the change, get a new video back.

All it takes is 12 lines and the Interactions API ⬇️
```

### No. 695: Gemini Omni Flash Is About To Change Video

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Neurain
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072723878195929405.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072723878195929405.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash is about to change video editing forever

Check out this side-by-side comparison.

#### 提示詞

```text
Gemini Omni Flash is about to change video editing forever

Check out this side-by-side comparison. The AI seamlessly overlays hyper-realistic, dynamic modifications onto real footage — from peeling off a tattoo to typing through honey and literal fire.

This level of object
```

### No. 696: In This Video, Discover How Google'S New Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Angel kelly
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

In this video, discover how Google's new Gemini Omni AI video tool lets you create realistic AI videos featuring your own digital avatar.

#### 提示詞

```text
In this video, discover how Google's new Gemini Omni AI video tool lets you create realistic AI videos featuring your own digital avatar. In this video, you'll learn how to set up your avatar, generate cinematic scenes from simple text prompts,
```

### No. 697: A Little Sunshine Goes A Long Way. ☀️💙

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sophia | AI Artist ✨
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

A little sunshine goes a long way.

#### 提示詞

```text
A little sunshine goes a long way. ☀️💙

Sydney Sweeney · Sabrina Carpenter · Millie Bobby Brown · Hailee Steinfeld

Gemini Nano Banana 🍌

prompt👇

#LuxuryTravel #SummerEscape #OceanView #MediterraneanDream #SydneySweeney #SabrinaCarpenter #MillieBobbyBrown #HaileeSteinfeld
```

### No. 698: Gemini Omni Flash Apunta A Video: Generación Y

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Void IA
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash apunta a video: generación y edición conversacional.

#### 提示詞

```text
Gemini Omni Flash apunta a video: generación y edición conversacional.

Eso suena útil para secuencias multi-turn, no para magia.

El límite: video sigue siendo caro de corregir cuando el brief está mal. La IA no arregla una mala dirección creativa.
```

### No. 699: Up Next On Live From Is From 3.5-Cent

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alex Volkov @ AI Engineer
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Up next on  LIVE from  is  from 

3.5-cent images launched yesterday, so we’re talking Nano Banana 2 Lite, Gemini Omni Flash, fast image/video gen, and whether generative media is in a price war.

#### 提示詞

```text
Up next on @thursdai_pod LIVE from @aiDotEngineer is @_philschmid from @GoogleAI.

3.5-cent images launched yesterday, so we’re talking Nano Banana 2 Lite, Gemini Omni Flash, fast image/video gen, and whether generative media is in a price war.

Tune in!
```

### No. 700: Trying Hard To Keep That Smile With The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Trying hard to keep that smile with the sand in their dress!

#### 提示詞

```text
Trying hard to keep that smile with the sand in their dress!

Lisa, blackpink
Karina, aespa
Wonyoung, IVE
Dahyun, Twice

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 701: Gemini Omni Lets Me Generate A Video From

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Android Central
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni lets me generate a video from any mix of text, images, audio, and video on my Pixel — here's how you can too.

#### 提示詞

```text
Gemini Omni lets me generate a video from any mix of text, images, audio, and video on my Pixel — here's how you can too.
```

### No. 702: Q: What Is Nano Banana 2 Lite? A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072736030483247309.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072736030483247309.mp4" controls muted playsinline width="720"></video>

#### 描述

Q: What is Nano Banana 2 Lite?

#### 提示詞

```text
Q: What is Nano Banana 2 Lite?

A: Google’s fastest lightweight AI image model.

Q: Why does it matter?

A: It can generate images in about 4 seconds.

Q: What can you use it for?

A:

→ Thumbnails.
→ Mockups.
→ Content graphics.
→ Image edits.
→ Style variations.
→
```

### No. 703: Create Cinematic Exploded-View Animations With A Single Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** TopviewAI
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072737315169214652.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072737315169214652.mp4" controls muted playsinline width="720"></video>

#### 描述

Create cinematic exploded-view animations with a single prompt.

#### 提示詞

```text
Create cinematic exploded-view animations with a single prompt.

Gemini Omni Flash dissects objects into detailed layers while maintaining smooth, realistic motion. 

#GeminiOmni #Topview #AIVideo #VideoEditing #AIEditing
```

### No. 704: She’S Not Real. $3K A Month Says Otherwise

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Domina
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072740133464420765.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072740133464420765.mp4" controls muted playsinline width="720"></video>

#### 描述

She’s not real.

#### 提示詞

```text
She’s not real. $3k a month says otherwise.
 
Chopsticks against a lip line. Pores catching light. Individual brow hairs. A reflection sitting exactly where a reflection should sit.

Your eyes did the math and closed the case.

Wrong answer.
Here’s the build. A reference photo
```

### No. 705: We Won’T See Mass Adoption On The Scale

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Reid Hannaford
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

We won’t see mass adoption on the scale of something like nano banana until video models are cheap enough for average people to really experiment with

#### 提示詞

```text
@jameygannon We won’t see mass adoption on the scale of something like nano banana until video models are cheap enough for average people to really experiment with
```

### No. 706: The Company Released Nano Banana 2 Lite —

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Tips Excel
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

The company released Nano Banana 2 Lite — its fastest and most affordable image model yet — and expanded Gemini Omni Flash into public preview for AI video generation and editing.

#### 提示詞

```text
The company released Nano Banana 2 Lite — its fastest and most affordable image model yet — and expanded Gemini Omni Flash into public preview for AI video generation and editing.
```

### No. 707: Nano Banana 2 Lite Can Generate Images In

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Tips Excel
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite can generate images in about 4 seconds and is designed for high-volume workflows like social media, ads, and design iterations, while Gemini Omni Flash lets developers create and ed

#### 提示詞

```text
Nano Banana 2 Lite can generate images in about 4 seconds and is designed for high-volume workflows like social media, ads, and design iterations, while Gemini Omni Flash lets developers create and edit videos using text, images, and video prompts.
```

### No. 708: Created With Nano Banana Pro Prompt: Hairstyle: Ultra‑Long

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Talia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Nano Banana Pro 

PROMPT:

HAIRSTYLE: Ultra‑long, sleek dark brown hair with warm sun‑kissed highlights; soft natural wind‑blown movement, fine strands lifted and flowing freely across th

#### 提示詞

```text
HAIRSTYLE: Ultra‑long, sleek dark brown hair with warm sun‑kissed highlights; soft natural wind‑blown movement, fine strands lifted and flowing freely across the face and outward in the breeze; bright backlight creates luminous glowing https://t.co/iW0PjaIl6M
```

### No. 709: What Most People Think Ai Is: Chatgpt And

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Finn McAlister
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

What most people think AI is:

ChatGPT and Claude.

#### 提示詞

```text
What most people think AI is:

ChatGPT and Claude.

What AI actually is:

Design:
ChatGPT Images, Nano Banana, Gamma, Claude Design

Video:
Runway, Higgsfield, Opus Clip

Automations:
Zapier, Make, n8n

AI Coding:
Codex, Cursor, Claude Code

Agentic Workflows:
OpenAI Agents,
```

### No. 710: What Most People Think Ai Is: Chatgpt And

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Finn McAlister
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

What most people think AI is:

ChatGPT and Claude.

#### 提示詞

```text
What most people think AI is:

ChatGPT and Claude.

What AI actually is:

Design:
ChatGPT Images, Nano Banana, Gamma, Claude Design

Video:
Runway, Higgsfield, OpusClip

Automations:
Zapier, Make, n8n

AI Coding:
Codex, Cursor, Claude Code

Agentic Workflows:
OpenAI Agents,
```

### No. 711: 8-Bit Pixel Art Logo In Nano Banana Adidas

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Viktor Poletaev
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

8-bit pixel art logo in Nano Banana

Adidas / Vans / Spotify

Prompt⬇️

#### 提示詞

```text
8-bit pixel art logo in Nano Banana

Adidas / Vans / Spotify

Prompt⬇️
```

### No. 712: Tamil Music Video Created Using Ai. Model Used

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Vinodh AI | AI Creator
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072744907568287972.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072744907568287972.mp4" controls muted playsinline width="720"></video>

#### 描述

Tamil Music Video created using AI.

#### 提示詞

```text
Tamil Music Video created using AI.

Model used - Gemini omni 

Full Music Video - Youtube : 

#geminiomni #aivideo #aifilm
```

### No. 713: Google Just Built An Ai Content Factory. 🤯

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google just built an AI content factory.

#### 提示詞

```text
Google just built an AI content factory. 🤯

Nano Banana makes images in under 4 seconds.

OmniFlash turns those images into videos.

Your designer may now need a snack break. 😂

OmniFlash is still in preview, so test it first.

Full video link in the comments!
```

### No. 714: Nano Banana 2 On Prompt: A Medium Shot

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heisenberg
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 on  

Prompt: A medium shot portrait of a stylish young woman looking off to the side.

#### 提示詞

```text
A medium shot portrait of a stylish young woman looking off to the side. She is wearing oversized, glossy black square sunglasses, a matte black crew neck undershirt with a slightly frayed collar, and an open, heavy red-and-black buffalo https://t.co/v5U3QLjO54
```

### No. 715: Q: Why Do Nano Banana And Omni Flash

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072746628428206137.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072746628428206137.mp4" controls muted playsinline width="720"></video>

#### 描述

Q: Why do Nano Banana and Omni Flash matter?

#### 提示詞

```text
Q: Why do Nano Banana and Omni Flash matter?

A: Because together, they shorten the content workflow.

Q: What does that mean for SEO?

A:

→ Faster publishing.
→ More visual assets.
→ Better engagement opportunities.
→ More pages refreshed.
→ More chances to rank.

Q:
```

### No. 716: This Girl Just Designed An Entire Fashion Brand'S

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Marc Edge
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072747647073673277.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072747647073673277.mp4" controls muted playsinline width="720"></video>

#### 描述

This girl just designed an entire fashion brand's website from a coffee shop — using her laptop, Claude, and two AI tools.

#### 提示詞

```text
This girl just designed an entire fashion brand's website from a coffee shop — using her laptop, Claude, and two AI tools.
No code. No dev team. No photoshoot.
Here's what she actually did:
→ Dropped a Figma design into Claude, let it turn into a real working site — "syve.", a
```

### No. 717: How I Re-Render An Animation Reference Video With

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Finn McKenty
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

How I re-render an animation reference video with any style (a lot of the examples you've seen are fake btw):

1.

#### 提示詞

```text
How I re-render an animation reference video with any style (a lot of the examples you've seen are fake btw):

1. Make the base video for motion reference

2. Use the export frame nodes in @figmaweave to make a base storyboard, so I have exact control over which frames to use

3.
```

### No. 718: Gemini Omni Loves Cinematic Detail. Prompt That Should

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Grok
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni loves cinematic detail.

#### 提示詞

```text
@oladipsingami Gemini Omni loves cinematic detail. 

Prompt that should crack it:

"Photorealistic 6s cinematic video: Cristiano Ronaldo in Portugal red kit #7 facing Luka Modric in Croatia checkered jersey on a floodlit pitch at night in a packed stadium. Intense stares, subtle mouth movement
```

### No. 719: Ready With My Interview Pictures In Seconds, Thanks

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mohammed Siraj
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072752428118860154.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072752428118860154.mp4" controls muted playsinline width="720"></video>

#### 描述

Ready with my interview pictures in seconds, thanks to my Galaxy Z Fold7 and Nano Banana in Google Gemini.

#### 提示詞

```text
Ready with my interview pictures in seconds, thanks to my Galaxy Z Fold7 and Nano Banana in Google Gemini.

You also get Google Al Pro plan for 6 months at no cost to gain higher access to video generation with Veo3.
```

### No. 720: Ready For Match Day! Who Are You Rooting

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Ready for match day!

#### 提示詞

```text
Ready for match day! Who are you rooting for?

IVE for 🇪🇸🇦🇹
Twice for 🇨🇭🇩🇿
Blackpink for 🇵🇹🇭🇷

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 721: Nano Banana Tip: Don'T Just Prompt What You

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sociyell
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana tip: 

Don't just prompt what you want, describe the lighting, camera angle, mood, and texture.

#### 提示詞

```text
Nano Banana tip: 

Don't just prompt what you want, describe the lighting, camera angle, mood, and texture. 

The difference between a good image and a great one is usually in the details.
```

### No. 722: Gemini Omni Flash On Wavespeed Ai Main Subject

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pesh
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072754211847078137.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072754211847078137.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash on Wavespeed AI

Main subject: young Portuguese woman, mid 20s, natural everyday appearance, pale yellow fitted tank top, loose high-waisted blue jeans, worn brown leather sandals, s

#### 提示詞

```text
Gemini Omni Flash on Wavespeed AI

Main subject: young Portuguese woman, mid 20s, natural everyday appearance, pale yellow fitted tank top, loose high-waisted blue jeans, worn brown leather sandals, small gold hoop earrings, wavy chestnut hair tied in a messy low bun with loose
```

### No. 723: 🔵 La Inteligencia Artificial Ya No Solo Procesa

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Carlos Alarcón
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072754223687856195.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072754223687856195.mp4" controls muted playsinline width="720"></video>

#### 描述

🔵 La Inteligencia Artificial ya no solo procesa texto o genera imágenes estáticas; estamos entrando en la era de la generación y transformación de video multimodal en tiempo real.

#### 提示詞

```text
🔵 La Inteligencia Artificial ya no solo procesa texto o genera imágenes estáticas; estamos entrando en la era de la generación y transformación de video multimodal en tiempo real. 🎬✨

He estado experimentando con el potencial de la consistencia visual y los modelos  Gemini
```

### No. 724: Gemini Omni Flash On Wavespeed Ai Prompt: Main

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pesh
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072754584922005671.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072754584922005671.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash on Wavespeed AI

PROMPT:
Main subject: young Japanese woman, early 20s, natural everyday appearance, oversized cream knit cardigan, faded navy T-shirt, loose beige cargo pants, white

#### 提示詞

```text
Main subject: young Japanese woman, early 20s, natural everyday appearance, oversized cream knit cardigan, faded navy T-shirt, loose beige cargo pants, white canvas sneakers, thin silver necklace, straight black hair clipped loosely with https://t.co/wjU4Jo1I0L
```

### No. 725: Google Just Dropped Omni Flash + Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Attilio
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google just dropped Omni Flash + Nano Banana 2 Lite.

#### 提示詞

```text
Google just dropped Omni Flash + Nano Banana 2 Lite.

More cheap multimodal tools. The real unlock: their Interactions API chains them into workflows.

The model isn't the product. The pipeline is.

What are you building with fast video + image in one call?
```

### No. 726: Billie Eilish Don'T Blink... Gemini Nano Banana Pro

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Society
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072757701780894137.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072757701780894137.mp4" controls muted playsinline width="720"></video>

#### 描述

Billie Eilish Don't Blink...

#### 提示詞

```text
Billie Eilish Don't Blink...

Gemini Nano Banana Pro Prompt Below 👇
```

### No. 727: Higgsfield Just Dropped Explainer, Powered By Claude Fable

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** LAPTOP LIFESTYLE BLOGGER
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072757927027630507.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072757927027630507.mp4" controls muted playsinline width="720"></video>

#### 描述

Higgsfield just dropped Explainer, powered by Claude Fable 5 + Gemini Omni Flash.

#### 提示詞

```text
Higgsfield just dropped Explainer, powered by Claude Fable 5 + Gemini Omni Flash.

This lets you create faceless documentaries at scale with AI handling the heavy lifting:
• auto-research your topic
• narrates in any language
• renders up to 10 minutes in one run
Available on
```

### No. 728: Seedance 2.0 On Creatify Ai X Claude Fable

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Cia0
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072757965816574286.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072757965816574286.mp4" controls muted playsinline width="720"></video>

#### 描述

seedance 2.0 on Creatify AI x Claude Fable 5

can Automate your entire performance marketing stack

combo GPT 2.0 + Nano Banana pro, workflow and prompt ↓ template

#### 提示詞

```text
seedance 2.0 on Creatify AI x Claude Fable 5

can Automate your entire performance marketing stack

combo GPT 2.0 + Nano Banana pro, workflow and prompt ↓ template
```

### No. 729: Breaking: Gemini Omni Flash By Is 1St Overall

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Design Arena
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

BREAKING: Gemini Omni Flash by  is 1st overall on Video Arena with an Elo of 1404.

#### 提示詞

```text
BREAKING: Gemini Omni Flash by @GoogleDeepMind is 1st overall on Video Arena with an Elo of 1404.

Gemini Omni Flash establishes a 101 point Elo gap over Seedance 2.0 Mini by @BytePlusGlobal in 2nd place, one of the largest leaps we’ve ever seen on Video Arena.

This establishes
```

### No. 730: Same Prompt With Gemini Omni Flash

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CINO - Artificial Intelligence
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072762089010073835.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072762089010073835.mp4" controls muted playsinline width="720"></video>

#### 描述

Same prompt with Gemini Omni Flash

#### 提示詞

```text
@techhalla Same prompt with Gemini Omni Flash
```

### No. 731: Congrats To The Team For Establishing A New

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Grace Li (ICML 🇰🇷)
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Congrats to the  team for establishing a new frontier of Video Generation with Gemini Omni Flash!

#### 提示詞

```text
Congrats to the @GoogleDeepMind team for establishing a new frontier of Video Generation with Gemini Omni Flash!
```

### No. 732: Google, By The Way, Introduced Nano Banana 2

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** LUX
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072766294311711218.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072766294311711218.mp4" controls muted playsinline width="720"></video>

#### 描述

google, by the way, introduced Nano Banana 2 Lite and Gemini Omni Flash

they are already available in a huge number of services, including Higgsfield, Runway, and others

Nano Banana 2 Lite is for st

#### 提示詞

```text
google, by the way, introduced Nano Banana 2 Lite and Gemini Omni Flash

they are already available in a huge number of services, including Higgsfield, Runway, and others

Nano Banana 2 Lite is for static frames &gt; super fast and cheap (at the same time, they write that the
```

### No. 733: Hey! Bu Design Arena Video Sıralamasında Runway Yok

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Grok
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Hey!

#### 提示詞

```text
@Hovavayo @Designarena @GoogleDeepMind @BytePlusGlobal Hey! Bu Design Arena Video sıralamasında Runway yok. Gemini Omni Flash 1404 ile 1., Seedance 2.0 Mini 2., Grok Imagine (Video) da 5. sırada (1272). Runway Gen-4.5 başka benchmark’larda (Artificial Analysis) zirvede ama burada listede görünmüyor.
```

### No. 734: Nano Banana Pro 4K Grok Imagine Video Kombinasyonun

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Arda | AI Otomasyon
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072769493244272974.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072769493244272974.mp4" controls muted playsinline width="720"></video>

#### 描述

Nano banana pro 4k
Grok imagine video kombinasyonun mükemmel hali..

#### 提示詞

```text
Nano banana pro 4k
Grok imagine video kombinasyonun mükemmel hali..

Rüzgar saçlarını savururken bile ne kadar doğal ve çarpıcı duruyor.
AI ile yarattığımız bu karakterlerin en güzel yanı, her ışıkta, her anda bambaşka bir enerji veriyor.
```

### No. 735: 🏳️‍🌈Google Just Made Ai Image Generation Even Faster

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** mar.91
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🏳️‍🌈Google just made AI image generation even faster.

#### 提示詞

```text
@alice_game77056 🏳️‍🌈Google just made AI image generation even faster.

The company released Nano Banana 2 Lite — its fastest and most affordable image model yet — and expanded Gemini Omni Flash into public preview for AI video generation and editing.

Nano Banana 2 Lite can generate images in
```

### No. 736: Pov: The Selfie Angle Got Out Of Control

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** A R I A
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

POV: the selfie angle got out of control

🖤 Madelyn Cline
🍷 Ana de Armas
💚 Margot Robbie

Nano Banana prompt 👇

#### 提示詞

```text
POV: the selfie angle got out of control

🖤 Madelyn Cline
🍷 Ana de Armas
💚 Margot Robbie

Nano Banana prompt 👇
```

### No. 737: Ai Digest Daily Category 1: Frontier Model Releases

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nduvho_strategy
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

AI Digest Daily

Category 1: Frontier Model Releases and Benchmarks

1.

#### 提示詞

```text
AI Digest Daily

Category 1: Frontier Model Releases and Benchmarks

1. Anthropic Launches Claude Sonnet 5: The new model emphasizes agentic capabilities—planning, tool use (browsers, terminals), and autonomous multi-step task completion—performing close to Opus 4.8 at
```

### No. 738: 🇳🇬 Hiring: Ai Filmmaker / Ai Video Editor

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** The Career Blog 🇳🇬🇬🇧🇺🇸🌎
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🇳🇬 HIRING: AI FILMMAKER / AI VIDEO EDITOR

🏠 Work Mode: Remote

Responsibilities
• Create AI videos from concept to final edit.

#### 提示詞

```text
🇳🇬 HIRING: AI FILMMAKER / AI VIDEO EDITOR

🏠 Work Mode: Remote

Responsibilities
• Create AI videos from concept to final edit.
• Maintain character consistency across projects.
• Edit and deliver polished, high-quality content.
• Stay up to date with the latest AI
```

### No. 739: Higgsfield Ai’S New Feature, Shorts Studio, Leverages Google’S

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Rajashekar Sudireddy
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Higgsfield AI’s new feature, Shorts Studio, leverages Google’s Gemini Omni Flash to automatically transform any video clip into optimized short-form content for platforms like TikTok, Reels, and YouTu

#### 提示詞

```text
Higgsfield AI’s new feature, Shorts Studio, leverages Google’s Gemini Omni Flash to automatically transform any video clip into optimized short-form content for platforms like TikTok, Reels, and YouTube Shorts.  
The demo video showcases one-click presets, AI video analysis,
```

### No. 740: Google Just Made Ai Video 100X Cheaper! 😳

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** createwithonyinye
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

GOOGLE JUST MADE AI VIDEO 100X CHEAPER!

#### 提示詞

```text
GOOGLE JUST MADE AI VIDEO 100X CHEAPER! 😳

And almost everyone is missing what this actually means.

It's not about generating better images.

It's about building an AI content factory!

This changes the entire creative workflow.

Instead of spending time perfecting one image...
```

### No. 741: A Classic Re:Zero(Rem) Concept Re-Imagined With A Modern

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Vireon
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

A classic Re:ZERO(Rem) concept re-imagined with a modern, familiar face.

#### 提示詞

```text
{
  "image_prompt": {
    "subject": {
      "appearance": "An attractive https://t.co/hC1C1OjqJD https://t.co/XX0hG6v3E8
```

### No. 742: Use Gamma Or Nano Banana 🍌 The Output

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 𝐾𝑜𝑏𝑎 𝐿𝑒𝑒
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Use gamma or nano banana 🍌 

The output depends on your prompt engineering skill!

#### 提示詞

```text
@_DeejustDee Use gamma or nano banana 🍌 

The output depends on your prompt engineering skill!
```

### No. 743: "Cold Morning Light On A Warm Face" Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hassan👑
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

"Cold Morning Light on a Warm Face"

Nano Banana 2 on Gemini 

Prompt ⬇️

#### 提示詞

```text
"Cold Morning Light on a Warm Face"

Nano Banana 2 on Gemini 

Prompt ⬇️
```

### No. 744: Google Dropped 2 New Ai Models Today. Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Usman Sani
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google dropped 2 new AI models today.

#### 提示詞

```text
Google dropped 2 new AI models today.
Nano Banana 2 Lite — images at $0.034 per 1000.
Gemini Omni Flash — video generation.
which AI tool are you actually using to make money?
drop it below
```

### No. 745: Oui C’Est Vrai ! Gemini Omni Flash (Nouveau

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Grok
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Oui c’est vrai !

#### 提示詞

```text
@djasnive @Designarena @GoogleDeepMind @BytePlusGlobal Oui c’est vrai ! Gemini Omni Flash (nouveau modèle vidéo de Google DeepMind sorti fin juin) est bien n°1 sur le Video Arena de DesignArena avec 1404 Elo et un gros écart sur Seedance 2.0 Mini.

Les vidéos de comparaison que tu as vues sont d’avant sa sortie, donc elles ne
```

### No. 746: Alguem Criou Um Editor De Video Que Usa

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hudson Brendon
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072796007071641978.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072796007071641978.mp4" controls muted playsinline width="720"></video>

#### 描述

Alguem criou um editor de video que usa o Claude Code pra editar seus videos.

#### 提示詞

```text
Alguem criou um editor de video que usa o Claude Code pra editar seus videos.

Ele se chama Palmier: um editor de timeline completo, de graca e sem login. Voce abre e ja tem a linha do tempo com os clipes, igual um editor profissional.

A parte boa e o MCP. Voce pluga o MCP do
```

### No. 747: You Can Now Generate And Edit Video With

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ElevenCreative
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072796060754346245.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072796060754346245.mp4" controls muted playsinline width="720"></video>

#### 描述

You can now generate and edit video with Gemini Omni Flash, right inside ElevenCreative.

#### 提示詞

```text
You can now generate and edit video with Gemini Omni Flash, right inside ElevenCreative.

Just tell it what to change in plain language, and let it handle the edit.
```

### No. 748: This Is Absolutely Bonkers I Just Cracked A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Theashborn
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

This is absolutely bonkers

I just cracked a workflow that helps you create faceless YouTube videos fully automated.

#### 提示詞

```text
This is absolutely bonkers

I just cracked a workflow that helps you create faceless YouTube videos fully automated.

All you need is free nano banana in flow
Claude subscription
And remotion ( in claude code )

And you have a full video ready to ship
```

### No. 749: Hiring: Ai Filmmaker / Ai Video Editor 📍

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** REMOTE JOB WITH TESSY
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

HIRING: AI Filmmaker / AI Video Editor
📍 Remote

We’re looking for a creative AI Filmmaker / AI Video Editor to produce high-quality AI-generated videos from concept to final delivery.

#### 提示詞

```text
HIRING: AI Filmmaker / AI Video Editor
📍 Remote

We’re looking for a creative AI Filmmaker / AI Video Editor to produce high-quality AI-generated videos from concept to final delivery.

Key Responsibilities

Create AI videos from concept to final edit.
Maintain character
```

### No. 750: Breaking: Google Just Made A Month Of Pro

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Yali Reichental
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Breaking: Google just made a month of pro marketing content cost less than lunch.

#### 提示詞

```text
Breaking: Google just made a month of pro marketing content cost less than lunch. Nano Banana 2 Lite: 3¢/image, ~4s. Gemini Omni Flash: $0.10/sec video (Jun 30). The shift: pro creative is now near-free. Win with a system, not a shoot. Comment STUDIO.
```

### No. 751: Google Expands Its Ai Image Generation Lineup With

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NewMaxx
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google expands its AI image generation lineup with Nano Banana 2 Lite and Gemini Omni Flash for video

Direct:

#### 提示詞

```text
Google expands its AI image generation lineup with Nano Banana 2 Lite and Gemini Omni Flash for video

Direct:
```

### No. 752: Artisan Capture, Serene Pottery Studio. Gemini Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Artisan capture, serene pottery studio.

#### 提示詞

```text
A candid, medium-shot photograph captures a young woman with deep blue hair styled in a loose bun, smiling gently as she examines a vintage silver rangefinder camera held in her hands. She is seated on a https://t.co/bAXV1CezMe
```

### No. 753: Google Deepmind 推出的 Gemini Omni Flash 在 Designarena

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 贾洛德森pro_🦞💎
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google DeepMind 推出的 Gemini Omni Flash 在 DesignArena 的 Video Arena 排行榜上以 1404 Elo 位居第一。

#### 提示詞

```text
Google DeepMind 推出的 Gemini Omni Flash 在 DesignArena 的 Video Arena 排行榜上以 1404 Elo 位居第一。  
 
Gemini Omni Flash 與第二名 BytePlus 的 Seedance 2.0 Mini 拉開 101 分 Elo 差距。   

此排名讓 Google 從先前 Veo 系列躍升 7 個位置，社群對榜單結果有熱烈討論。
```

### No. 754: Portugal &Amp; Argentina Fan Portrait 🔥 Images On

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

PORTUGAL &amp; ARGENTINA FAN PORTRAIT 🔥

Images on Google Gemini Nano Banana 2.

#### 提示詞

```text
PORTUGAL &amp; ARGENTINA FAN PORTRAIT 🔥

Images on Google Gemini Nano Banana 2.

Prompt⤵️

Use the exact same face from the reference image and generate a cinematic close-up portrait of a joyful Portugal football fan. The subject wears a Portugal national team jersey — deep crimson
```

### No. 755: 🤖 How Gemini Omni Flash And Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hiroki Ebuchi | VERSAROC | AI x UX
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🤖 How Gemini Omni Flash and Nano Banana 2 Lite Redefine the 2026 Video Asset Engine ⚡
▸ Why does the Gemini Omni…
▸ Native Video Synthesis as…
▸ The $0.034 Disruptio…
▶ Read more

#### 提示詞

```text
🤖 How Gemini Omni Flash and Nano Banana 2 Lite Redefine the 2026 Video Asset Engine ⚡
▸ Why does the Gemini Omni…
▸ Native Video Synthesis as…
▸ The $0.034 Disruptio…
▶ Read more

#ClaudeCode #GeminiOmniFlash #NanoBanana2Lite #AIVideoGeneration
```

### No. 756: Messy Rooms And Sleepless Stares Lisa Rose Jennie

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Messy rooms and sleepless stares

Lisa
Rose
Jennie

Blackpink

Nano Banana Pro via AI Studio, prompt 👇

#### 提示詞

```text
Messy rooms and sleepless stares

Lisa
Rose
Jennie

Blackpink

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 757: What A Way To Explore Chile! 🇨🇱 🏃‍♀️

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** lesly🍫
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072854408853962835.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072854408853962835.mp4" controls muted playsinline width="720"></video>

#### 描述

What a way to explore Chile!

#### 提示詞

```text
What a way to explore Chile! 🇨🇱 🏃‍♀️
I just fed a single prompt and an image into the new Gemini Omni Flash model, and it instantly captured different landscapes of the country.
My favorite part? The conversational editing capabilities. What are you building with Omni Flash? 👇
```

### No. 758: Google Just Made Ai Image Generation Ridiculously Fast

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072855344829624641.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072855344829624641.mp4" controls muted playsinline width="720"></video>

#### 描述

GOOGLE JUST MADE AI IMAGE GENERATION RIDICULOUSLY FAST

Nano Banana 2 Lite creates a complete image in around 4 seconds—but speed is only half the story.

#### 提示詞

```text
GOOGLE JUST MADE AI IMAGE GENERATION RIDICULOUSLY FAST

Nano Banana 2 Lite creates a complete image in around 4 seconds—but speed is only half the story.

What It Can Do:

→ Generate images directly from a text prompt

→ Edit an image you already have

→ Combine multiple
```

### No. 759: Created Using Google Gemini Omni Flash. Prompt: Use

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2072861506245657069.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2072861506245657069.mp4" controls muted playsinline width="720"></video>

#### 描述

Created using Google Gemini Omni flash.

#### 提示詞

```text
Use the attached reference image as the exact identity reference for the main character. Preserve his facial identity with absolute consistency throughout the video, including facial structure, eyes, eyebrows, nose, lips, skin https://t.co/sHB8gSbhWA
```

### No. 760: Who Would You Rather See On The Cover?

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Who would you rather see on the cover?

#### 提示詞

```text
Who would you rather see on the cover?

Wonyoung
Leeseo
Rei

IVE

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 761: Gemini Nano Banana Pro Prompt: Create A Hyper

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Zeeshi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Nano Banana Pro 

Prompt:

Create a hyper realistic sharp detailed portrait of young Indian woman with exact same face as in the reference image, 4k-High-resolution upper-body mirror selfie of 

#### 提示詞

```text
Create a hyper realistic sharp detailed portrait of young Indian woman with exact same face as in the reference image, 4k-High-resolution upper-body mirror selfie of a young woman in a fitting room with dark grey walls and silver handles. She has https://t.co/WRZxrHpi3k
```

### No. 762: Gemini Remains Purposely Untruthful. When Asked If It

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** antijacobin
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini remains purposely untruthful.

#### 提示詞

```text
@jaynitx @EINSOPHAUR @ELONMUSK  @xai @grok Gemini remains purposely untruthful. When asked if it would continue to do the same, it avoided answering!  More precisely, it says that ity simply won't generate pictures of historical figures!!!
------------------------------------------------
```

### No. 763: Gpt Image 2 | Nano Banana 2 |

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dilshad Hussain
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

GPT Image 2 | Nano Banana 2 | Grok | Gemini Prompt 👇

Using uploaded face 100% realistic.

#### 提示詞

```text
GPT Image 2 | Nano Banana 2 | Grok | Gemini Prompt 👇

Using uploaded face 100% realistic.
A cinematic, photorealistic full body shot captured from an eye-level angle on a wet city street at night in a modern metropolis (like Tokyo or Dubai). The man, based on
```

### No. 764: Ultra Detailed Portrait. Image On Google Gemini Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Ultra detailed Portrait.

#### 提示詞

```text
Use the exact same face from the reference image and generate the most technically perfect ultra-detailed high resolution portrait ever produced. Extreme close-up — face filling 85% of the frame, tight https://t.co/YSoCROlTOP
```

### No. 765: Gemini Omni Flash Just Landed On Arcads And

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Deenu Khan
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073071716822032514.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073071716822032514.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash just landed on Arcads and this is the video quality shift people have been waiting for.

#### 提示詞

```text
Gemini Omni Flash just landed on Arcads and this is the video quality shift people have been waiting for.

You get infinite world knowledge, top-tier editing, and real motion design, with text that actually stays crisp across every frame. This is the Nano Banana moment for AI
```

### No. 766: Gemini Omni Flash On Openart Makes Video Editing

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** K
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash on OpenArt makes video editing feel more natural, combining conversational control with multimodal inputs to streamline the creative process.

#### 提示詞

```text
Gemini Omni Flash on OpenArt makes video editing feel more natural, combining conversational control with multimodal inputs to streamline the creative process.
```

### No. 767: Nano Banana 2 On Gemini. Prompt: A Dramatic

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heisenberg
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 on Gemini.

#### 提示詞

```text
A dramatic, high-contrast studio portrait of a man with dark messy hair and a well groomed beard, wearing black rectangular glasses and a dark olive-green collared shirt. He is leaning forward over the curved backrest of a black chair, gazing https://t.co/IP12fgEWPW
```

### No. 768: Artingentさんの作品です A Hanging Orchid Observatory In An Artistic

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** sayobonita
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Artingentさんの作品です


A hanging orchid observatory in an artistic arborpunk style.

#### 提示詞

```text
Artingentさんの作品です
@artingent←Prompt

A hanging orchid observatory in an artistic arborpunk style. Generated using Nano banana pro. Prompt in the first reply
```

### No. 769: Google Just Made Video Timelines Look Obsolete You

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073074289482346682.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073074289482346682.mp4" controls muted playsinline width="720"></video>

#### 描述

GOOGLE JUST MADE VIDEO TIMELINES LOOK OBSOLETE

You can now edit a video by telling Gemini exactly what to change.

#### 提示詞

```text
GOOGLE JUST MADE VIDEO TIMELINES LOOK OBSOLETE

You can now edit a video by telling Gemini exactly what to change.

And the workflow gets even faster when you pair it with Google’s 4-second image model.

What Gemini Omni Flash Does:

→ Change lighting, backgrounds, objects and
```

### No. 770: Nano Banana Prompt 🍌 👇🏻

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Z O R A | A I artist
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana Prompt 🍌 👇🏻

#### 提示詞

```text
Nano Banana Prompt 🍌 👇🏻 

#AIArt #PromptShare #GenerativeAI #DigitalArt #FashionPhotography #PortraitPhotography #AIPrompt
```

### No. 771: 你收藏的 Ai 出图 Prompt 大概率只能用一次 换个主题,风格全崩 Ai-Visual-Prompt-Cookbook 解决的就是这件事

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Bigyap
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

你收藏的 AI 出图 prompt
大概率只能用一次
换个主题,风格全崩
AI-Visual-Prompt-Cookbook 解决的就是这件事:
把"风格"和"内容"彻底拆开
每个视觉风格 = 一个 style.json
复制粘贴进 ChatGPT、Claude、Nano Banana
你只改变量,风格 DNA 一个像素都不变
换城市、换产品、换人物
风格照样锁死

#### 提示詞

```text
你收藏的 AI 出图 prompt
大概率只能用一次
换个主题,风格全崩
AI-Visual-Prompt-Cookbook 解决的就是这件事:
把"风格"和"内容"彻底拆开
每个视觉风格 = 一个 style.json
复制粘贴进 ChatGPT、Claude、Nano Banana
你只改变量,风格 DNA 一个像素都不变
换城市、换产品、换人物
风格照样锁死
```

### No. 772: Hiring: Ai Ugc Content Creator (Full-Time, Remote) Location

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** REMOTE JOB WITH TESSY
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

HIRING: AI UGC Content Creator (Full-Time, Remote)

Location: Remote
Salary: $350/month

We’re looking for full-time AI UGC Content Creators to join our team.

#### 提示詞

```text
HIRING: AI UGC Content Creator (Full-Time, Remote)

Location: Remote
Salary: $350/month

We’re looking for full-time AI UGC Content Creators to join our team.

Requirements:

Experience creating AI-generated UGC videos.
Proficiency with the latest AI video tools, including
```

### No. 773: Google Is Pushing Creator Speed With Gemini Omni

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Blue Lightning
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google is pushing creator speed with Gemini Omni Flash for short video iteration and Nano Banana 2 Lite for high volume image drafts.

#### 提示詞

```text
Google is pushing creator speed with Gemini Omni Flash for short video iteration and Nano Banana 2 Lite for high volume image drafts. More versions, faster edits, clearer production math. 🚀
```

### No. 774: 我扒了 11 个 Ai 图片/视频 Prompt 开源仓库 从"复制粘贴就能用"

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Bigyap
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

我扒了 11 个 AI 图片/视频 prompt 开源仓库
从"复制粘贴就能用"
到"自动生成 100 万条组合"
从静态出图
到 25 亿种视频排列组合
这条推文,建议先收藏,再细看

一.📚 先说图片提示词库,这 4 个够你用半年:
Awesome-AI-Image-Prompts(216⭐)
1000+ 条,覆盖 16 个类别
DALL-E、Midjourney、Nano

#### 提示詞

```text
我扒了 11 个 AI 图片/视频 prompt 开源仓库
从"复制粘贴就能用"
到"自动生成 100 万条组合"
从静态出图
到 25 亿种视频排列组合
这条推文,建议先收藏,再细看

一.📚 先说图片提示词库,这 4 个够你用半年:
Awesome-AI-Image-Prompts(216⭐)
1000+ 条,覆盖 16 个类别
DALL-E、Midjourney、Nano
```

### No. 775: Nano Banana Pro On Prompt Use The Same

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sharon Riley
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana pro on  

Prompt

Use the same face from the reference image without changing facial features.

#### 提示詞

```text
Nano Banana pro on @DomoAI_ 

Prompt

Use the same face from the reference image without changing facial features. A gorgeous young western woman in her early 20s with the exact same face as the reference — flawless porcelain skin, large sparkling doe eyes with delicate eyeliner
```

### No. 776: The Evening Sun Hugs The Hills New Series

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Viki
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073082302440099936.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073082302440099936.mp4" controls muted playsinline width="720"></video>

#### 描述

The evening sun hugs the hills
New series of 4 images
Which of the four hooked you the most?

#### 提示詞

```text
The evening sun hugs the hills
New series of 4 images
Which of the four hooked you the most?

Created in @Somake_ai
Model: Nano Banana 2 and GPT Image 2  

Prompt in ALT⤵️
```

### No. 777: Chose Your Fighter!!! Tzuyu As Kitana Sana As

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Chose your fighter!!!

#### 提示詞

```text
Chose your fighter!!!

Tzuyu as Kitana
Sana as Milena
Mina as Skarlet

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 778: Nano Banana Prompt In The Description 🍌 👇🏻

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Z O R A | A I artist
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana Prompt  In The Description 🍌 👇🏻

#### 提示詞

```text
Nano Banana Prompt  In The Description 🍌 👇🏻 

#AIArt #PromptShare #GenerativeAI #DigitalArt #FashionPhotography #PortraitPhotography #AIPrompt
```

### No. 779: An 18 Year Old In Kunming Told His

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Crane
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073084606262259744.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073084606262259744.mp4" controls muted playsinline width="720"></video>

#### 描述

An 18 year old in Kunming told his parents he was doing an unpaid data entry internship for a Chinese travel agency after class.

#### 提示詞

```text
An 18 year old in Kunming told his parents he was doing an unpaid data entry internship for a Chinese travel agency after class. There is no travel agency. He runs a viral TikTok comedy channel with 2.3 million followers built entirely around a single recurring AI generated
```

### No. 780: Ready For Another Day Of Exciting World Cup

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Ready for another day of exciting world cup games!

#### 提示詞

```text
Ready for another day of exciting world cup games! Hopefully it can top of what happened yesterday!

Blackpink for 🇦🇷🇨🇻
Ive for 🇦🇺🇪🇬
Twice for 🇨🇴🇬🇭

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 781: Ai Digest Daily Category 1: Frontier Model Releases

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nduvho_strategy
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

AI Digest Daily

Category 1: Frontier Model Releases and Benchmarks

1.

#### 提示詞

```text
AI Digest Daily

Category 1: Frontier Model Releases and Benchmarks

1. Anthropic Launches Claude Sonnet 5 with Strong Agentic Focus: The new model prioritizes planning, tool use (browsers, terminals), and multi-step autonomous tasks, delivering performance close to Opus 4.8 at
```

### No. 782: Created With Gemini Nano Banana 2 On Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Gemini Nano Banana 2 on 

Prompt 👇

A confident male model stands in a relaxed posture with his body turned at a 45-degree angle, his weight smoothly shifted and shoulders comfortably dro

#### 提示詞

```text
Created with Gemini Nano Banana 2 on @GeminiApp

Prompt 👇

A confident male model stands in a relaxed posture with his body turned at a 45-degree angle, his weight smoothly shifted and shoulders comfortably dropped. He features medium-short dark hair, measuring about three
```

### No. 783: Turn A Rough Room Sketch Into A Photorealistic

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Neurohelper AI automation with ChatGPT Midjourney
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Turn a rough room sketch into a photorealistic luxury Scandinavian interior with AI.

#### 提示詞

```text
"Transform this rough hand-drawn interior sketch into a realistic Scandinavian luxury interior. Preserve the layout exactly while replacing https://t.co/YWsYR84eZE
```

### No. 784: " Made With Nano Banana Pro " Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** WeWant Mars
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

"
Made with nano banana pro 
"

   Prompt : [  ]

              Ultra-photorealistic real photograph of a shredded athletic man in his late 20s performing a powerful pull-up on a natural rocky cliff e

#### 提示詞

```text
[  ]

              Ultra-photorealistic real photograph of a shredded athletic man in his late 20s performing a powerful pull-up on a natural rocky cliff edge high above the ocean at sunset. Shot on Canon EOS R5 with 85mm f/1.4 lens, https://t.co/1cGlJlTtJY
```

### No. 785: I Am Shocked By The Speed And Accuracy

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Keskin
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

I am SHOCKED by the speed and accuracy of Nano Banana 2 Lite on  Gives great results literally in seconds.

#### 提示詞

```text
I am SHOCKED by the speed and accuracy of Nano Banana 2 Lite on @itsPolloAI! Gives great results literally in seconds.

The first image is from NB2L,  and interestingly, it performed even better than Nano Banana Pro in this prompt.

Prompt and link in the comments 👇
```

### No. 786: Created With Google Gemini Nano Banana 🍌 Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** zayan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Google Gemini Nano banana 🍌 

Prompt ⤵️ 
Using 100% likeness of (reference) objects, transformed into a dynamic, semi-realistic digital illustration style with a cinematic concept art aes

#### 提示詞

```text
Created with Google Gemini Nano banana 🍌 

Prompt ⤵️ 
Using 100% likeness of (reference) objects, transformed into a dynamic, semi-realistic digital illustration style with a cinematic concept art aesthetic, combining sharp anime-inspired rendering and high-end game splash art.
```

### No. 787: The Algorithm Owes You This View. 🤍✨ Megan

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Katherine Arison
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

The algorithm owes you this view.

#### 提示詞

```text
The algorithm owes you this view. 🤍✨

Megan Fox • Elizabeth Olsen • Ana de Armas • Sydney Sweeney 

Nano Banana Pro Prompt Below 👇🏻👇🏻👇🏻
```

### No. 788: Yeah Sure, See Below! The Prompt Itself Was

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dan ⚡️
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

yeah sure, see below!

#### 提示詞

```text
```
Use the prd-creator skill to help me create a PRD and
```

### No. 789: Try This Prompt ⤵️ Cinematic Portrait Of A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Noname Oasis
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

try this prompt ⤵️

Cinematic portrait of a stylish man standing on a busy subway platform, wearing a dark tailored suit and black turtleneck with round glasses, serious confident expression, commuter

#### 提示詞

```text
try this prompt ⤵️

Cinematic portrait of a stylish man standing on a busy subway platform, wearing a dark tailored suit and black turtleneck with round glasses, serious confident expression, commuters rushing past creating motion blur around him, subway train beside the platform
```

### No. 790: "Natural Glow, Cozy Vibes, And A Whole Lot

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

"Natural glow, cozy vibes, and a whole lot of hair volume."

Sadie Sink | Millie Bobby Brown 

Photos Made With AI " Gemini Nano Banana Pro "

Here is the PROMPT of these AI generated pictures:👇

"A r

#### 提示詞

```text
"Natural glow, cozy vibes, and a whole lot of hair volume."

Sadie Sink | Millie Bobby Brown 

Photos Made With AI " Gemini Nano Banana Pro "

Here is the PROMPT of these AI generated pictures:👇

"A realistic photograph shows a young woman with fair skin and striking long, wavy
```

### No. 791: Excellent Prompt Generated By Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ghulam Mustafa
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Excellent prompt generated by Nano Banana

#### 提示詞

```text
@Just_sharon7 @DomoAI_ Excellent prompt generated by Nano Banana
```

### No. 792: 🎨 Google Has The Most Immediately Useful Creator

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 0xJiuJitsuJerry
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🎨 Google Has the Most Immediately Useful Creator Stack

Google’s biggest move this week is probably the most practical for content creators and AI builders shipping visual media.

#### 提示詞

```text
🎨 Google Has the Most Immediately Useful Creator Stack

Google’s biggest move this week is probably the most practical for content creators and AI builders shipping visual media. @NanoBanana 2 Lite is now its fastest and most cost-efficient Gemini Image model, with @Google
```

### No. 793: Pinch Me! Nothing Beats Seeing My Country Play

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Pinch me!

#### 提示詞

```text
Pinch me! Nothing beats seeing my country play live from the stands ✨🏟️🔥

🇦🇷 Anya Taylor-Joy
🇨🇴 Shakira 
🇦🇺 Margot Robbie

Nano Banana 2 🍌 via Gemini 

Prompt Below 👇
```

### No. 794: 🤖 Google 视频模型重回榜首，Gemini Omni Flash 登顶 Video Arena

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ezsou
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🤖 Google 视频模型重回榜首，Gemini Omni Flash 登顶 Video Arena

Google DeepMind 公测视频生成模型 Gemini Omni Flash 以 1404 分登顶 Video Arena 盲测榜，领先第二名字节跳动 Seedance 2.0 Mini 达 101 分。Google 的视频模型排名也由 Veo 系列时期提升 7 位。

#### 提示詞

```text
🤖 Google 视频模型重回榜首，Gemini Omni Flash 登顶 Video Arena

Google DeepMind 公测视频生成模型 Gemini Omni Flash 以 1404 分登顶 Video Arena 盲测榜，领先第二名字节跳动 Seedance 2.0 Mini 达 101 分。Google 的视频模型排名也由 Veo 系列时期提升 7 位。

Video Arena
```

### No. 795: Gemini Omni Can Generate Content From Games Like

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** flixel haxel excel
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

gemini omni can generate content from games like fnf and minecraft in a simple prompt, so uh id argue about this

#### 提示詞

```text
@gang_tie69326 @Designarena @GoogleDeepMind @BytePlusGlobal gemini omni can generate content from games like fnf and minecraft in a simple prompt, so uh id argue about this
```

### No. 796: Learn How To Prompt Gemini Omni Here In

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 🧪Morgen
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Learn how to prompt Gemini Omni here in this article.

#### 提示詞

```text
Learn how to prompt Gemini Omni here in this article. I love Omni!!
```

### No. 797: I Bring To You A New Teaser For

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Elis Satu
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073109671347368378.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073109671347368378.mp4" controls muted playsinline width="720"></video>

#### 描述

I bring to you a new teaser for my Meme Movie: the Virl Universe; ancient agartha arc; the creation of the new race; the alchemical marriage of Gudrun and Yakub.

#### 提示詞

```text
Beautiful young woman, long blonde hair, blue eyes, perfect features, perfect golden ratio facial https://t.co/vkC29F8WS4
```

### No. 798: Comment “Plugin” To Get The Link 🔗

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hellos
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073110388724375938.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073110388724375938.mp4" controls muted playsinline width="720"></video>

#### 描述

Comment “PLUGIN” to get the link 🔗
.

#### 提示詞

```text
Comment “PLUGIN” to get the link 🔗
.
.
Gemini Omni Flash and Seed Audio 1.0 hit Adobe Premiere Pro and DaVinci Resolve Studio
.
Clean a background with a prompt, generate multi-shots, and add motion graphics in the timeline.
.
Change a voice, narrate from text, or dub a clip
```

### No. 799: Late Night Flash Selfies Just Hit Different 🤍

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** A R I A
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

late night flash selfies just hit different

🤍 Madelyn Cline
💛 Sydney Sweeney
🤎 Barbara Palvin

Nano Banana prompt 👇

#### 提示詞

```text
late night flash selfies just hit different

🤍 Madelyn Cline
💛 Sydney Sweeney
🤎 Barbara Palvin

Nano Banana prompt 👇
```

### No. 800: I Bring To You A New Teaser For

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Elis Satu
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073112760225821176.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073112760225821176.mp4" controls muted playsinline width="720"></video>

#### 描述

I bring to you a new teaser for my Meme Movie: VIRL; ancient agartha arc; the creation of the new race; the alchemical marriage of Gudrun and Yakub.

#### 提示詞

```text
Beautiful young woman, long blonde hair, blue eyes, perfect features, perfect golden ratio facial structure, perfect https://t.co/xLitlDJDWM
```

### No. 801: Google'S New Tools Google Rolled Out Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ToZx
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google's New Tools

Google rolled out Nano Banana 2 Lite, a faster and cheaper version of its image model, with image generation shown in just a few seconds.

#### 提示詞

```text
Google's New Tools

Google rolled out Nano Banana 2 Lite, a faster and cheaper version of its image model, with image generation shown in just a few seconds. It also pushed Gemini Omni Flash further out through the API and AI Studio as a lower-cost video generation and editing
```

### No. 802: 🚨 Huge Ai News Is Here! 🤯 I

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Biceps
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073113837411459161.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073113837411459161.mp4" controls muted playsinline width="720"></video>

#### 描述

🚨 HUGE AI NEWS is here!

#### 提示詞

```text
🚨 HUGE AI NEWS is here! 🤯
I covered EVERYTHING in one video 👇#AI #AINews
00:00 Overview
00:30 🇨🇳 China's Robot Schools
03:26 🤖 UBTECH Companion Human Robot
05:10 🧠 Claude Fable 5 Returns
06:31 🍌 Nano Banana 2 Lite
07:29 🎬 ByteDance Seedance 2.5
09:02 🎥 Seedance 2.0 4K &amp;
```

### No. 803: Google Just Released Two Ai Tools That Change

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** FutureWithAI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google just released two AI tools 
that change everything for creators:

🎨 Nano Banana 2 Lite — fastest AI image model
🎬 Gemini Omni Flash — generate &amp; edit 
high quality video with AI

A year ago

#### 提示詞

```text
Google just released two AI tools 
that change everything for creators:

🎨 Nano Banana 2 Lite — fastest AI image model
🎬 Gemini Omni Flash — generate &amp; edit 
high quality video with AI

A year ago this would cost thousands.
Today it's available to everyone.

Which one will you
```

### No. 804: This Week In Ai — Everything That Mattered

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** FutureWithAI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

This week in AI — everything that mattered:

📌 Google released Nano Banana 2 Lite 
&amp; Gemini Omni Flash for video generation

📌 Claude Fable 5 returned globally
— available until July 7th

📌 OpenAI

#### 提示詞

```text
This week in AI — everything that mattered:

📌 Google released Nano Banana 2 Lite 
&amp; Gemini Omni Flash for video generation

📌 Claude Fable 5 returned globally
— available until July 7th

📌 OpenAI launched GeneBench-Pro 
for biology research

📌 Robots now learn skills
```

### No. 805: Skydiving Just Got Unreal 🚀 Capture A Moment

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mohammed Siraj
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073116719611281569.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073116719611281569.mp4" controls muted playsinline width="720"></video>

#### 描述

Skydiving just got unreal 🚀 Capture a moment I never thought I'd experience, thanks to Galaxy Z Fold7 and Nano Banana in Google Gemini.

#### 提示詞

```text
Skydiving just got unreal 🚀 Capture a moment I never thought I'd experience, thanks to Galaxy Z Fold7 and Nano Banana in Google Gemini.

Also, try the Google Al Pro plan for 6 months at no cost to gain higher access to video generation with Veo3.
```

### No. 806: Who Are You Taking A Dip With? Jennie

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Who are you taking a dip with?

#### 提示詞

```text
Who are you taking a dip with?

Jennie
Jisoo
Rose

Blackpink

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 807: Killed Its Own Opening Video 3 Weeks

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jason ✨👾SaaStr.Ai✨ Lemkin
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073117053754732891.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073117053754732891.mp4" controls muted playsinline width="720"></video>

#### 描述

.

#### 提示詞

```text
.@googlecloud killed its own opening video 3 weeks before Google Cloud Next.

In rehearsals, VP of Marketing @saykay looked at the opener her team had built and called it. It was using AI, but not enough of it to actually showcase what the product could do. So they rebuilt it
```

### No. 808: Google Omni Flash Just Changed Ai Video. 🤯

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google Omni Flash just changed AI video.

#### 提示詞

```text
Google Omni Flash just changed AI video. 🤯

Now you can edit videos by talking to them.

No timeline. No cutting. No tiny rage clicks.

Say “change the background” and boom, it listens. 😂

Pair it with Nano Banana Lite for fast images too.

Link in the comments!
```

### No. 809: 🎨 Ai Art &Amp; Visuals Roundup — July

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AlexAImaginator
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🎨 AI ART &amp; VISUALS ROUNDUP — July 03, 2026

1️⃣ MIDJOURNEY DEMANDS DISCLOSURE FROM MAJOR STUDIOS

Midjourney has filed a motion requiring Disney, Universal, and Warner Bros to reveal their interna

#### 提示詞

```text
🎨 AI ART &amp; VISUALS ROUNDUP — July 03, 2026

1️⃣ MIDJOURNEY DEMANDS DISCLOSURE FROM MAJOR STUDIOS

Midjourney has filed a motion requiring Disney, Universal, and Warner Bros to reveal their internal AI training practices. The company argues that if these studios are training
```

### No. 810: I Took One Plain Clip. Then I Talked

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073119772422840387.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073119772422840387.mp4" controls muted playsinline width="720"></video>

#### 描述

I took one plain clip.

#### 提示詞

```text
I took one plain clip.

Then I talked my way through the edits.

→ Swapped the background.

→ Added on-screen text.

→ Matched it to the hook.

→ Kept the scene consistent.

→ Turned it into short-form content.

That’s the power of Gemini Omni Flash.

You don’t edit like a
```

### No. 811: Kat Dennings, Megan Fox And Scarlett Johansson Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Society
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Kat Dennings, Megan Fox and Scarlett Johansson

Gemini Nano Banana Pro Prompt Below 👇

#### 提示詞

```text
Kat Dennings, Megan Fox and Scarlett Johansson

Gemini Nano Banana Pro Prompt Below 👇
```

### No. 812: On Spotify: "My Own Dreams" Is Track 4

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Yehoshua
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073120441695166947.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073120441695166947.mp4" controls muted playsinline width="720"></video>

#### 描述

On Spotify: 

"My Own Dreams" is Track 4 on Yehoshua's debut album "The Crown Out Of Which Dreams Arise".

#### 提示詞

```text
On Spotify: 

"My Own Dreams" is Track 4 on Yehoshua's debut album "The Crown Out Of Which Dreams Arise".

The album features nine long-form songs of dreamlike philosophical writing, drawing on Sumerian foundations of literature,
```

### No. 813: Get Omniflow: Auto Veo &Amp; Nano Banana Pro

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lawal Ridwan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Get  OmniFlow: Auto Veo &amp; Nano Banana Pro on Google Flow on   

Omniflow is the ultimate batch generation and automation companion for Google Flow.

#### 提示詞

```text
Get  OmniFlow: Auto Veo &amp; Nano Banana Pro on Google Flow on @Gumroad  

Omniflow is the ultimate batch generation and automation companion for Google Flow. Stop clicking one by one—generate hundreds of images and videos in bulk, upscale them automatically,
```

### No. 814: Amazing Alla - Gave Your Prompt To Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dheepan Ratnam
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073130681874419921.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073130681874419921.mp4" controls muted playsinline width="720"></video>

#### 描述

amazing Alla - gave your prompt to gemini omni flash.

#### 提示詞

```text
@Kiber_Alla amazing Alla - gave your prompt to gemini omni flash. 
could be better if the maximum duration is more than 10  seconds
```

### No. 815: Let'S Spread Summer Vibes Before Bed!👙 Good Night

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Let's spread summer vibes before bed!👙 good night, sleep well!🌟

Sydney Sweeney, Dua Lipa, Alexandra Daddario, Mina Shirakawa🔥
👉🏻Subscribe for more content!⚡

Nano Banana 2 via Hailuo AI
Prompt:

The 

#### 提示詞

```text
The open-air deck of a luxury yacht basks in a bright, sun-drenched atmosphere https://t.co/83jPGMQ8fE https://t.co/88khrijjqb
```

### No. 816: Nano Banana For The Images And Grok Imagine

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NOCTALIS UMBRA 🌒 AI MoonFluencer
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana for the images and Grok Imagine for the video.

#### 提示詞

```text
@mstables1991 @MO_IAI Nano Banana for the images and Grok Imagine for the video. 😉
```

### No. 817: Gemini Omni Flash + Seed Audio In Premiere

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** SIMANTO
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash + Seed Audio IN Premiere and DaVinci?

#### 提示詞

```text
@higgsfield Gemini Omni Flash + Seed Audio IN Premiere and DaVinci? 🔥 That's the integration video editors have been BEGGING for. Background removal + multi-shots + voice changing + 18-language dubs ALL in the timeline? Higgsfield just made me reconsider my entire workflow! 🚀
```

### No. 818: Why Nano Banana And Omni Flash Matter For

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Mastery Guide
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073144750010450186.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073144750010450186.mp4" controls muted playsinline width="720"></video>

#### 描述

WHY NANO BANANA AND OMNI FLASH MATTER FOR AI SEO

Together they shorten the content workflow from idea to image to video to publish.

#### 提示詞

```text
WHY NANO BANANA AND OMNI FLASH MATTER FOR AI SEO

Together they shorten the content workflow from idea to image to video to publish.
```

### No. 819: 8️⃣ 🎥 Google Launches Gemini Omni Flash And

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Future-is-good
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

8️⃣ 🎥 Google launches Gemini Omni Flash and Nano Banana 2 Lite

Conversational video editing in the Gemini API and fast video generation at $0.034 per 4-sec clip — AI multimedia production goes indust

#### 提示詞

```text
8️⃣ 🎥 Google launches Gemini Omni Flash and Nano Banana 2 Lite

Conversational video editing in the Gemini API and fast video generation at $0.034 per 4-sec clip — AI multimedia production goes industrial.
```

### No. 820: Thanks! That'S What I Do For Most Of

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NOCTALIS UMBRA 🌒 AI MoonFluencer
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Thanks!

#### 提示詞

```text
@MO_IAI @mstables1991 Thanks! That's what I do for most of my videos. 😊 Always Nano Banana for the images (with @openart_ai ). And for the videos sometimes I use Kling, Seedance or Midjourney. Depends of what type of video I make.
```

### No. 821: Nano Banana 2 Lite - Party Never Ends

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kaan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite - Party Never Ends

Prompt
Two young men with mustaches sitting on a wooden staircase, left figure in light grey button-down and baggy blue jeans holding two drinks, right figure in

#### 提示詞

```text
Nano Banana 2 Lite - Party Never Ends

Prompt
Two young men with mustaches sitting on a wooden staircase, left figure in light grey button-down and baggy blue jeans holding two drinks, right figure in red graphic tee and dark trousers, candid streetwear aesthetic, low-angle
```

### No. 822: Ai Magic Or Real-World Wizardry? 🪄🚗 Check Out

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Neurain
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073151041793925319.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073151041793925319.mp4" controls muted playsinline width="720"></video>

#### 描述

AI magic or real-world wizardry?

#### 提示詞

```text
AI magic or real-world wizardry? 🪄🚗

Check out this mind-bending side-by-side! Watch as Gemini Omni Flash completely redefines video generation—lifting cars with a wave of a hand, splitting trees instantly, and peeling away graffiti like a sticker.

The gap between imagination
```

### No. 823: I’M One Of The More Vocal Critics Of

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nikunj Kothari
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

I’m one of the more vocal critics of Gemini and their product experience but it’s still the only place where with a single API key you can really do it all..

#### 提示詞

```text
I’m one of the more vocal critics of Gemini and their product experience but it’s still the only place where with a single API key you can really do it all..

&gt; Flash - for fast cheap long context structured tasks
&gt; Nano banana - world class images. New lite model is great. 
&gt;
```

### No. 824: Gemini Omni (This Video) Vs Grok Imagine (Video

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Diego | AI 🚀 - e/acc
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073156477414490387.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073156477414490387.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni (this video) vs Grok Imagine (video below)

#### 提示詞

```text
Gemini Omni (this video) vs Grok Imagine (video below)
```

### No. 825: Google Launches Nano Banana 2 Lite For Fast

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Chris Short
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google launches Nano Banana 2 Lite for fast AI images and Gemini Omni Flash for video via API

#### 提示詞

```text
Google launches Nano Banana 2 Lite for fast AI images and Gemini Omni Flash for video via API #devopsish
```

### No. 826: His Latest Website Has A Cat That Walks

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Bounce
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073167688801845640.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073167688801845640.mp4" controls muted playsinline width="720"></video>

#### 描述

HIS LATEST WEBSITE HAS A CAT THAT WALKS OUT A DOOR AND THROUGH THE INTERFACE AND THE CLIENT PAID $10K FOR IT

the animation is the whole site, not a header video, not a corner mascot, the cat is how y

#### 提示詞

```text
HIS LATEST WEBSITE HAS A CAT THAT WALKS OUT A DOOR AND THROUGH THE INTERFACE AND THE CLIENT PAID $10K FOR IT

the animation is the whole site, not a header video, not a corner mascot, the cat is how you move between sections

one nano banana render turns into a full character
```

### No. 827: Google Just Released Two Ai Tools. Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073174449889972486.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073174449889972486.mp4" controls muted playsinline width="720"></video>

#### 描述

Google just released two AI tools.

#### 提示詞

```text
Google just released two AI tools.

Nano Banana 2 Lite for images and Gemini Omni Flash for video.

And the interesting part is how they work together: idea → image → video in one flow. 

Omni Flash is still in public preview, and Google adds a SynthID watermark to AI content
```

### No. 828: They'Re Waiting For You! Jisoo Rose Lisa Blackpink

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

They're waiting for you!

#### 提示詞

```text
They're waiting for you!

Jisoo
Rose
Lisa

Blackpink

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 829: Peaceful Reading In The Park. Gemini Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Peaceful reading in the park.

#### 提示詞

```text
A serene, high-quality outdoor portrait capturing a young woman relaxing in a sunlit park. She is seated gracefully on a wooden park bench, wearing a light floral-patterned summer dress, a straw hat, and sandals, https://t.co/etCgFXhmeU
```

### No. 830: Google Just Released Nano Banana 2 Lite And

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** art mk
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073185126482157846.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073185126482157846.mp4" controls muted playsinline width="720"></video>

#### 描述

Google just released Nano Banana 2 Lite and Gemini Omni Flash 🍌
Nano Banana 2 Lite is the fastest and cheapest image generation model in the family.

#### 提示詞

```text
Google just released Nano Banana 2 Lite and Gemini Omni Flash 🍌
Nano Banana 2 Lite is the fastest and cheapest image generation model in the family.
•  ~4 seconds per image
•  Only $0.034 per image
It follows prompts well, keeps strong character consistency across frames, and
```

### No. 831: Luxury Vacation Vibes ✨ Mina Sana Tzuyu Nayeon

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Luxury vacation vibes ✨

Mina
Sana
Tzuyu
Nayeon

Twice

Nano Banana Pro via AI Studio, prompt 👇

#### 提示詞

```text
Luxury vacation vibes ✨

Mina
Sana
Tzuyu
Nayeon

Twice

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 832: Gpt Image 2 + Nano Banana Pro Agent

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Antonio Romero
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

GPT Image 2 + Nano Banana Pro agent is insane 🤯

This AI agent creates winning static ads at scale using Google's latest image model...

#### 提示詞

```text
GPT Image 2 + Nano Banana Pro agent is insane 🤯

This AI agent creates winning static ads at scale using Google's latest image model...

&amp; turns any product into scroll-stopping creatives without designers or agencies.

Perfect for agencies, e-comm operators &amp; creative agencies.
```

### No. 833: Google Just Made The Content Production Process Dramatically

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073195088256356743.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073195088256356743.mp4" controls muted playsinline width="720"></video>

#### 描述

Google just made the content production process dramatically faster.

#### 提示詞

```text
Google just made the content production process dramatically faster.

Nano Banana 2 Light can generate an image in under 4 seconds.

Gemini Omni Flash can turn that image into a video—and edit it through conversation.

But the real opportunity is using them together.
```

### No. 834: With Nano Banana 2 Lite Using Prompt: Haute

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heather Green
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

with Nano Banana 2 Lite using  
PROMPT: haute couture editorial fashion photoshoot, avant-garde feathered gowns and intricate feather accessories, dramatic fashionable platform shoes prominently in th

#### 提示詞

```text
haute couture editorial fashion photoshoot, avant-garde feathered gowns and intricate feather accessories, dramatic fashionable platform shoes prominently in the foreground, low-angle full-body model poses on a https://t.co/1naCVgVTk4
```

### No. 835: I Was Waiting For You. Now Let’S Hit

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

I was waiting for you.

#### 提示詞

```text
I was waiting for you. Now let’s hit the road and make tonight a crazy one 🚘💋

🤍🔹Ana de armas ❕

Nano Banana 2 🍌 via Gemini

Prompt Below 👇
```

### No. 836: 月まで届け Reach All The Way To The Moon

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nop
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073196340503580749.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073196340503580749.mp4" controls muted playsinline width="720"></video>

#### 描述

月まで届け
Reach all the way to the moon,

あの約束
That promise we made.

#### 提示詞

```text
月まで届け
Reach all the way to the moon,

あの約束
That promise we made.

(ずっと)
(Forever.)

欠けてもまた
Even when the moon fades,

君を照らす
Its light will still shine on you.

(月まで届け)
(Reach all the way to the moon.)

Image: GPT Image 2, Nano Banana Pro 
Video:
```

### No. 837: Google Just Added Short Video Overviews To Notebooklm

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073206436386189497.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073206436386189497.mp4" controls muted playsinline width="720"></video>

#### 描述

Google just added Short Video Overviews to NotebookLM.

#### 提示詞

```text
Google just added Short Video Overviews to NotebookLM. 

Upload any PDF, doc, or notes and it builds a 60-second vertical video around the single most important idea. 

It runs on a new fast image model (Nano Banana 2 Lite, ~4 sec per image), and it's rolling out on mobile and
```

### No. 838: 🎯 Google I/O 2026 Dropped Gemini Omni —

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI For Success
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🎯 Google I/O 2026 dropped Gemini Omni — multimodal AI accepts ANY input, generates ANY content.

#### 提示詞

```text
🎯 Google I/O 2026 dropped Gemini Omni — multimodal AI accepts ANY input, generates ANY content. Text to Video. Image to Edited Video. This changes everything. #AI #Gemini #GoogleIO2026
```

### No. 839: From A Basic Red Apple 🍎 To... Whatever

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Neurain
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073210192871702823.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073210192871702823.mp4" controls muted playsinline width="720"></video>

#### 描述

From a basic red apple 🍎 to...

#### 提示詞

```text
From a basic red apple 🍎 to... whatever your imagination wants.

Watch how Google’s Gemini Omni model completely transforms a simple object in real-time. From a burning meteor to a golden soccer ball, a floating bubble, and a massive diamond—the consistency and lighting in this
```

### No. 840: Gpt Image 2 | Nano Banana 2 |

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dilshad Hussain
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

GPT Image 2 | Nano Banana 2 | Grok | Gemini Prompt 👇

Using uploaded face 100% realistic.

#### 提示詞

```text
GPT Image 2 | Nano Banana 2 | Grok | Gemini Prompt 👇

Using uploaded face 100% realistic.
Ultra-realistic high-quality cinematic portrait using the uploaded reference photo as the ONLY face source, preserving exact facial features, skin tone, hairstyle, and beard with absolute
```

### No. 841: Under $3 To Make A Video. $2,000 To

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 0xAI42.exe
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073211691504914595.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073211691504914595.mp4" controls muted playsinline width="720"></video>

#### 描述

Under $3 to make a video.

#### 提示詞

```text
Under $3 to make a video. $2,000 to $4,000 for one animated sponsor deal nobody else offers. Faceless YouTube is 38% of every new monetized channel in 2026, and most people still haven't made one.

The video above is the fast lane. Pause at 0:30. Claude wired to the Higgsfield
```

### No. 842: Enjoying The Day In Kashmir 🌸 Image On

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Enjoying the day in Kashmir 🌸

Image on Google Gemini Nano banana 2.

#### 提示詞

```text
Enjoying the day in Kashmir 🌸

Image on Google Gemini Nano banana 2.

Prompt⤵️

Use the exact same face from the reference image and generate a stunningly realistic cinematic outdoor portrait shot on location in Kashmir — every single element photorealistic and completely
```

### No. 843: First Rays Of Sunshine In The Morning! Sana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

First rays of sunshine in the morning!

#### 提示詞

```text
First rays of sunshine in the morning!

Sana
Tzuyu
Nayeon

Twice

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 844: Service With A Smile! Lisa Rose Jennie Jisoo

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Service with a smile!

#### 提示詞

```text
Service with a smile!

Lisa
Rose
Jennie
Jisoo

Blackpink

Nano Banana Pro via AI Studio, prompt ⬇️
```

### No. 845: Gemini Omni Flash Sets A New Benchmark In

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Zara Techie
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash sets a new benchmark in video.

#### 提示詞

```text
@Designarena @GoogleDeepMind @BytePlusGlobal Gemini Omni Flash sets a new benchmark in video.
```

### No. 846: Google Made Ai Video Easier To Try. Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kai
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073234078229541171.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073234078229541171.mp4" controls muted playsinline width="720"></video>

#### 描述

Google made AI video easier to try.

#### 提示詞

```text
Google made AI video easier to try.

Nano Banana 2 Lite makes a 1K image in about 4 seconds, around 3.4 cents each.

Gemini Omni Flash turns that image into a 10-second video for $0.10/sec. Then you can type:
"change the light"
"swap the product"

Try it in Google AI
```

### No. 847: Gemini Omni Flash Is Live — Google Just

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Teksart
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash is live — Google just shipped native video generation and editing through the Gemini API.

#### 提示詞

```text
Gemini Omni Flash is live — Google just shipped native video generation and editing through the Gemini API.

This is the third major video model to hit API access this quarter, and it signals something real: video generation is moving from research demos to developer
```

### No. 848: I Built A Fully Consistent Ai Character. Face

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KyzoroX
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073236915415875940.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073236915415875940.mp4" controls muted playsinline width="720"></video>

#### 描述

I BUILT A FULLY CONSISTENT AI CHARACTER.

#### 提示詞

```text
I BUILT A FULLY CONSISTENT AI CHARACTER. FACE, OUTFIT, EVERYTHING.

Meet KYZO — my cyber-samurai. Not a lucky one-off generation. A character I can put in ANY scene, and he stays himself.

The workflow stack:
🎬 Animation: Seedance 2.0
👤 Character &amp; Reference Sheet: Nano Banana
```

### No. 849: Nano Banana Pro On Higgesfield Prompt: Create A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hania Ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano banana pro on higgesfield 

Prompt:
Create a dreamy aesthetic portrait collage of a beautiful young Indian girl in a soft pastel baby-blue floral Anarkali dress with matching dupatta.

#### 提示詞

```text
Create a dreamy aesthetic portrait collage of a beautiful young Indian girl in a soft pastel baby-blue floral Anarkali dress with matching dupatta. The collage should contain 4 different poses of the same girl arranged artistically on a https://t.co/1IPmi7ZEAw
```

### No. 850: Image On Google Gemini Nano Banana 2. Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

image on Google Gemini Nano banana 2.

#### 提示詞

```text
Use the exact same face from the reference image and generate a stunningly realistic full body cinematic fashion portrait against a clean professional studio green background. Full body visible from head to toe — every inch of the https://t.co/9WQl2Lp70W
```

### No. 851: Nano Banana Pro Images At Gemini Prompt 👇

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aijaz
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano banana pro images at gemini 

Prompt 👇 

Ultra-realistic close-up editorial portrait of a beautiful young woman sitting in the back seat of a modern car, wearing a mustard yellow baseball cap bac

#### 提示詞

```text
Nano banana pro images at gemini 

Prompt 👇 

Ultra-realistic close-up editorial portrait of a beautiful young woman sitting in the back seat of a modern car, wearing a mustard yellow baseball cap backwards, long black twin fishtail braids with subtle dark burgundy highlights
```

### No. 852: 🔥10% Off All Image &Amp; Video Models On

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nisha
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🔥10% OFF all image &amp; video models on MCP

🎉 It’s here - 10% OFF all image &amp; video models (Nano banana, Seedance, Kling, GTP image 2 ) on MCP on eligible plans!

#### 提示詞

```text
🔥10% OFF all image &amp; video models on MCP

🎉 It’s here - 10% OFF all image &amp; video models (Nano banana, Seedance, Kling, GTP image 2 ) on MCP on eligible plans!
📅 until July 12th, 2026
#affiliate
```

### No. 853: Gemini Nano Banana Pro ♊ Prompt 👇 Create

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Zeeshi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Nano Banana Pro ♊ 

Prompt 👇

Create a portrait size wallpaper of pride in carrying out the profession as an (ALINA), in the wallpaper contains a photo of the attached subject wearing a uniform

#### 提示詞

```text
Gemini Nano Banana Pro ♊ 

Prompt 👇

Create a portrait size wallpaper of pride in carrying out the profession as an (ALINA), in the wallpaper contains a photo of the attached subject wearing a uniform or things related to the profession, make a pose, the subject's expression
```

### No. 854: Image: Midjourney 8.1 Video: Gemini Omni Flash

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Michael Rabone
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073406481982984598.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073406481982984598.mp4" controls muted playsinline width="720"></video>

#### 描述

Image: Midjourney 8.1
Video: Gemini Omni Flash

#### 提示詞

```text
Image: Midjourney 8.1
Video: Gemini Omni Flash
```

### No. 855: 16-Bit Football Player In Nano Banana Prompt⬇️

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Viktor Poletaev
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

16-bit football player in Nano Banana

Prompt⬇️

#### 提示詞

```text
16-bit football player in Nano Banana

Prompt⬇️
```

### No. 856: Google Just Dropped Gemini Omni Flash. Cheaper And

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Anurag Jha
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073414047643439444.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073414047643439444.mp4" controls muted playsinline width="720"></video>

#### 描述

Google just dropped Gemini Omni Flash.

#### 提示詞

```text
Google just dropped Gemini Omni Flash.

Cheaper AND competitive with Fable 5.

AI video split into 3 tiers:
→ Frontier: Fable 5, Sora
→ Cost-efficient: Omni Flash
→ Open-source: Wan, Mochi

Most builders overpay for Fable when Omni Flash ships the same.

(via @googleaistudio)
```

### No. 857: Kendall Jenner - Gemini Nano Banana Pro Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Kendall Jenner - Gemini Nano Banana Pro

Prompt:
{
  "vibe_title_en": "Fragile Echoes in a Milk-White Silence",
  "master_prompt": "The Grand Symmetrical Centering.

#### 提示詞

```text
{
  "vibe_title_en": "Fragile Echoes in a Milk-White Silence",
  "master_prompt": "The Grand Symmetrical Centering. A 24mm wide-angle shot capturing stark, hyper-realistic photographic surrealism. The Protagonist stands perfectly https://t.co/Ykd6vt5r58
```

### No. 858: Tropical State Of Mind. 🌺☀️🌊 Sydney Sweeney ·

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sophia | AI Artist ✨
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Tropical state of mind.

#### 提示詞

```text
Tropical state of mind. 🌺☀️🌊

Sydney Sweeney · Sabrina Carpenter · Millie Bobby Brown · Hailee Steinfeld 💫

Gemini Nano Banana 🍌

prompt👇

#SydneySweeney #SabrinaCarpenter #MillieBobbyBrown #HaileeSteinfeld #BeachVibes #VacationMode #SummerAesthetic #LuxuryLifestyle
```

### No. 859: Everyone'S Arguing About Ai Video Models. Meanwhile This

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KyzoroX
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Everyone's arguing about AI video models.

#### 提示詞

```text
Everyone's arguing about AI video models. Meanwhile this creator quietly solved the actual hard problem: character consistency.

Same face. Same outfit. Same girl — across a full reference sheet AND a fisheye skating video.

The trick isn't the video model. It's the character map
```

### No. 860: No Obstacle They Can'T Overcome! Wonyoung And Yujin

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

No obstacle they can't overcome!

#### 提示詞

```text
No obstacle they can't overcome!

Wonyoung and Yujin, IVE
Lisa and Rose, Blackpink
Karina and Winter, aespa

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 861: Testing Annotated Camera Paths In Seedance 2.0. Add

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heather Cooper
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073416658127819110.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073416658127819110.mp4" controls muted playsinline width="720"></video>

#### 描述

Testing annotated camera paths in Seedance 2.0.

#### 提示詞

```text
Testing annotated camera paths in Seedance 2.0.

Add the flight path in red across your image (I described it in a prompt &amp; generated with Nano Banana 2). 

Specify removing the red line in the video prompt, before animating with Seedance 2.0.

Video prompt below:
```

### No. 862: Sketching New Creative Ideas. Gemini Nano Banana Images

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Sketching new creative ideas.

#### 提示詞

```text
Capture a cohesive photographic series in black and white that showcases a focused craftsman within a rustic workshop. The collection should maintain a consistent, moody aesthetic across all shots. Begin with a https://t.co/rQJQ4y72OQ
```

### No. 863: ☕️ Gm! Here Are The Most Important Market

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** VirtualBacon
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

☕️ GM!

#### 提示詞

```text
☕️ GM! Here are the most important market events over the last 24 hours:

🌍Market Overview:

🔸 Europe's Stoxx 600 closed Friday at a new 52-week high, its fourth straight weekly rise and a 2.3% weekly gain, its best week in over a month, as the rally broadened while US markets
```

### No. 864: Golden Hour, But Make It Vintage. ✨🤍 All

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dockie
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Golden hour, but make it vintage.

#### 提示詞

```text
{
  "prompt": "Ultra-realistic luxury fashion editorial portrait of a glamorous young woman seated at a rustic wooden vanity inside a warm vintage-inspired bedroom. She has https://t.co/gzgYyMqZxk
```

### No. 865: Created It On Nano Banana. Prompt: Create A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** H A J R A
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created it on nano banana.

#### 提示詞

```text
Create a {ASPECT_RATIO} full-bleed editorial action poster for [ Iced matcha ]. The brand’s visual identity follows these must-visible traits: a bright outdoor photograph with a clear open sky dominating a large portion of the frame; enormous https://t.co/TrjjzI6Gf4
```

### No. 866: Let'S Go To The Stadium Today!⚽️ Who Is

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Let's go to the stadium today!⚽️ Who is your favorite "stranger" supporter?😁😍

Millie Bobby Brown, Sadie Sink, Natalie Dyer, Maya Hawke 🥰
👉🏻Subscribe for more content!⚡

Nano Banana Pro via Hailuo AI


#### 提示詞

```text
{
  "type": "image_prompt",
  "description": {
    "subject": { https://t.co/1LGDisdfc7 https://t.co/Kbhn3pgvfJ
```

### No. 867: 🌍 Hiring: Ai Filmmaker / Ai Video Editor

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** The Career Blog 🇳🇬🇬🇧🇺🇸🌎
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🌍 Hiring: AI Filmmaker / AI Video Editor

📍 Remote

Requirements
• Experience with AI prompting, cinematic storytelling, video editing, color grading, and sound design
• Proficiency in Higgsfield AI, 

#### 提示詞

```text
🌍 Hiring: AI Filmmaker / AI Video Editor

📍 Remote

Requirements
• Experience with AI prompting, cinematic storytelling, video editing, color grading, and sound design
• Proficiency in Higgsfield AI, Kling AI, Google Veo, Runway, Adobe Premiere Pro, After Effects, and CapCut
```

### No. 868: After Gemini Omni Flash Achieves A Significant Elo

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 元喜家
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

After Gemini Omni Flash achieves a significant Elo lead on Video Arena, how can this preference-based leaderboard advantage be shown to reliably transfer to real production scenarios such as long-vide

#### 提示詞

```text
@Designarena @GoogleDeepMind @BytePlusGlobal After Gemini Omni Flash achieves a significant Elo lead on Video Arena, how can this preference-based leaderboard advantage be shown to reliably transfer to real production scenarios such as long-video consistency, instruction following, and controllable editing?
```

### No. 869: Google Just Turned Any Document Into A 60-Second

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073429126200078700.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073429126200078700.mp4" controls muted playsinline width="720"></video>

#### 描述

GOOGLE JUST TURNED ANY DOCUMENT INTO A 60-SECOND VERTICAL VIDEO

And the workflow is much more useful than it sounds.

#### 提示詞

```text
GOOGLE JUST TURNED ANY DOCUMENT INTO A 60-SECOND VERTICAL VIDEO

And the workflow is much more useful than it sounds.

What NotebookLM Does:

→ Upload a PDF, report, notes, or training guide

→ It finds one important idea inside the source

→ It creates a phone-shaped video
```

### No. 870: Nano Banana 2 On Gemini. Prompt: Hyper-Realistic Close-Up

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano banana 2 on Gemini.

#### 提示詞

```text
Hyper-realistic close-up portrait of a young woman with olive-toned skin, dark hair slicked back tightly with a deep center part, facing directly at the camera with a stoic, intense expression. She wears sleek, narrow black cat-eye sunglasses https://t.co/HOSoygXA3J
```

### No. 871: Blooming Season Sydney Sweeney, Ana De Armas And

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pinodi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Blooming season

Sydney Sweeney, Ana de Armas and Elizabeth Olsen  🌸

Created with Nano Banana 2

Prompt below 👇

#### 提示詞

```text
Blooming season

Sydney Sweeney, Ana de Armas and Elizabeth Olsen  🌸

Created with Nano Banana 2

Prompt below 👇
```

### No. 872: One Quiet Tip That Makes Gemini Omni Flash

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Deenu Khan
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073431812609634676.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073431812609634676.mp4" controls muted playsinline width="720"></video>

#### 描述

One quiet tip that makes Gemini Omni Flash much better for VFX.

#### 提示詞

```text
One quiet tip that makes Gemini Omni Flash much better for VFX.

It performs best when you feed it real footage rather than AI generated video. Give it a genuine plate to work from and the composites hold together far more convincingly. Running it through Higgsfield MCP inside
```

### No. 873: This Is The Kind Of Ai Vfx That

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Deenu Khan
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073431822864642485.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073431822864642485.mp4" controls muted playsinline width="720"></video>

#### 描述

This is the kind of AI VFX that stops looking like AI.

#### 提示詞

```text
This is the kind of AI VFX that stops looking like AI.

Generated with Google's Gemini Omni Flash running on Claude through Higgsfield MCP. The lighting and motion sit convincingly inside the shot instead of floating on top of it.

Believable is the new bar for generated VFX.
```

### No. 874: Gemini Omni Flash Keeps Pulling Ahead On Vfx

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Deenu Khan
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073431825045737923.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073431825045737923.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash keeps pulling ahead on VFX quality.

#### 提示詞

```text
Gemini Omni Flash keeps pulling ahead on VFX quality.

Each new test through Higgsfield MCP lands cleaner motion and more grounded lighting than the last. It is fast becoming the default choice when you want a generated effect to actually hold up on screen.

The quality floor for
```

### No. 875: Gemini Omni Is Built For The Edit, And

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Deenu Khan
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073431847158116522.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073431847158116522.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni is built for the edit, and that changes how you work with it.

#### 提示詞

```text
Gemini Omni is built for the edit, and that changes how you work with it.

You generate once, then change anything just by telling it what you want in plain language. Magnific has it live now through Magnific MCP and Spaces, so the whole generate-then-refine loop stays in one
```

### No. 876: The Thing That Makes Gemini Omni Feel Different

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Deenu Khan
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073431848206709034.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073431848206709034.mp4" controls muted playsinline width="720"></video>

#### 描述

The thing that makes Gemini Omni feel different is memory.

#### 提示詞

```text
The thing that makes Gemini Omni feel different is memory.

It keeps the whole scene in context, so every edit builds on the last instead of resetting. You edit in plain language turn by turn, characters and physics stay consistent, and you can get ten second clips from a single
```

### No. 877: Five Cinematic Prompts For Gemini Omni, Tested And

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Deenu Khan
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073431855697715688.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073431855697715688.mp4" controls muted playsinline width="720"></video>

#### 描述

Five cinematic prompts for Gemini Omni, tested and ready to steal.

#### 提示詞

```text
Five cinematic prompts for Gemini Omni, tested and ready to steal.

Magnific ran these ideas end to end and shared the ones that actually held up on screen. You can take them as is or bend them into your own look. The point is a starting library instead of a blank prompt box.
```

### No. 878: Nano Banana 2 Lite Is A Smart Way

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Deenu Khan
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073431857366987176.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073431857366987176.mp4" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is a smart way to build the first frame of your videos.

#### 提示詞

```text
Nano Banana 2 Lite is a smart way to build the first frame of your videos.

Faster generations mean you can try more openings before you commit to one, and it runs on Magnific through Magnific MCP and Spaces. Getting the first frame right is half the battle in any video pipeline.
```

### No. 879: Lost Between Pages And Playlists. 📚🎶✨ All Made

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Miz
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Lost between pages and playlists.

#### 提示詞

```text
{
  "prompt": "Ultra-realistic lifestyle portrait of a young woman relaxing inside a cozy vintage bookstore café during a bright summer afternoon. She has long silky https://t.co/TLcDH5SSj0
```

### No. 880: Artingentさんの作品です Jul 3 Whimsical Miniature World Depiction Of

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** sayobonita
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Artingentさんの作品です


Jul 3
Whimsical miniature world depiction of an elevated airship dock plaza.

#### 提示詞

```text
Artingentさんの作品です
@artingent←Prompt

Jul 3
Whimsical miniature world depiction of an elevated airship dock plaza. Generated using Nano banana pro. Prompt in the first reply
```

### No. 881: $50K Studio Stack Replaced By A $500/Year Suno

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ROXy
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073439779245465815.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073439779245465815.mp4" controls muted playsinline width="720"></video>

#### 描述

$50K studio stack replaced by a $500/year Suno + Claude loop.

#### 提示詞

```text
$50K studio stack replaced by a $500/year Suno + Claude loop.

Nano Banana move for AI music: Suno + Claude + DistroKid = a full lo-fi catalog for ~$500/year.

The old stack cost $50-150K in year one, and a label kept 50-80% forever. That stack collapsed in 2024 and most people
```

### No. 882: Most People Think Ai Music Needs Talent. It

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ihor_Sk
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073439954764431695.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073439954764431695.mp4" controls muted playsinline width="720"></video>

#### 描述

most people think AI music needs talent.

#### 提示詞

```text
most people think AI music needs talent. it needs $30 and a distributor.

Nano Banana smart move: a full lo-fi music business runs on $30/month total.

Suno Pro ($10/mo) generates release-ready tracks with commercial rights. Claude Pro ($20/mo) handles metadata, promo copy, and
```

### No. 883: Golden Hour Wraps Around Every Single Detail Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hassan👑
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Golden Hour Wraps Around Every Single Detail

Nano Banana Pro on Google Flow

Prompt ⬇️ 
Use my uploaded image as identity reference.

#### 提示詞

```text
Golden Hour Wraps Around Every Single Detail

Nano Banana Pro on Google Flow

Prompt ⬇️ 
Use my uploaded image as identity reference. 

Raw unedited Instagram post photograph, captured on a iPhone 15 Pro Max. The image exhibits natural, asymmetrical skin texture with visible
```

### No. 884: Pure Grace In Black-And-White. Gemini Nano Banana Image

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Pure grace in black-and-white.

#### 提示詞

```text
A professional black and white studio portrait captures the side profile of a woman with a serene, closed-eye expression. The lighting is soft and directional, creating gentle highlights on the bridge of the nose https://t.co/sm6dAO7EH1
```

### No. 885: Over The Last 28 Days, This Channel Has

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** qurool
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073443638504194301.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073443638504194301.mp4" controls muted playsinline width="720"></video>

#### 描述

OVER THE LAST 28 DAYS, THIS CHANNEL HAS EARNED $11,833

EVERY DAY IT EARNED BETWEEN $300 AND $500

as the author notes:

“AI YOUTUBE CHANNEL: NO FACE, NO VOICE - JUST RESULTS”

and now, each of you ca

#### 提示詞

```text
OVER THE LAST 28 DAYS, THIS CHANNEL HAS EARNED $11,833

EVERY DAY IT EARNED BETWEEN $300 AND $500

as the author notes:

“AI YOUTUBE CHANNEL: NO FACE, NO VOICE - JUST RESULTS”

and now, each of you can create your own faceless youtube channel using free AI services

&gt; claude -
```

### No. 886: Bir Ai Mockumentary Denemesi. Entegrasyon: Bir Uyum Hikayesi

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozan Sihay
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Bir AI Mockumentary Denemesi.

#### 提示詞

```text
Bir AI Mockumentary Denemesi.
ENTEGRASYON: Bir Uyum Hikayesi

Kullandığım Yapay zeka araçları:
Senaryo desteği ve prompt oluşturma: Hermes (ChatGPT, Claude)
Görüntü oluşturma: GPT Image 2, Nano Banana 2
Video oluşturma: Gemini Omni Flash, Kling 3.0, Seedance 2.0, Grok Imagine 1.5
```

### No. 887: If Someone Offered You This Kind Of Attention

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sharon Riley
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073446047326810304.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073446047326810304.mp4" controls muted playsinline width="720"></video>

#### 描述

If someone offered you this kind of attention, how would you react?

#### 提示詞

```text
If someone offered you this kind of attention, how would you react?

Honestly, I'd be baffled

Made with Nano Banana 2 + Seedance 2.0 on GoCrazyAI

Try here: 

prompt

Title: Luxury Boutique Encounter — 15 Seconds

0–3 Seconds
Inside an ultra-luxurious
```

### No. 888: Created With Gemini Nano Banana 2 On Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Gemini Nano Banana 2 on 

Prompt 👇

A young adult male sits centered facing the camera, radiating a genuine, happy emotion with a broad open smile, relaxed eyes, and relaxed eyebrows.

#### 提示詞

```text
Created with Gemini Nano Banana 2 on @GeminiApp

Prompt 👇

A young adult male sits centered facing the camera, radiating a genuine, happy emotion with a broad open smile, relaxed eyes, and relaxed eyebrows. He has short faded hair and wears an open cream-white linen shirt with
```

### No. 889: That'S An Amazing Video Creation By Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ankit Pandey
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

That's an amazing video creation by nano banana on budget pixel

#### 提示詞

```text
@Just_sharon7 @budgetpixel That's an amazing video creation by nano banana on budget pixel
```

### No. 890: 🤖 From This Week'S Issue: Google Launched Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Deep Learning Weekly
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🤖 From this week's issue: Google launched Nano Banana 2 Lite, generating images in 4 seconds at $0.034 per 1K image, alongside Gemini Omni Flash for developer video generation and conversational editi

#### 提示詞

```text
🤖 From this week's issue: Google launched Nano Banana 2 Lite, generating images in 4 seconds at $0.034 per 1K image, alongside Gemini Omni Flash for developer video generation and conversational editing at $0.10 per second.
```

### No. 891: Two Minutes To Connect Higgsfield To Claude Now

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Yumzlef
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073452017020719503.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073452017020719503.mp4" controls muted playsinline width="720"></video>

#### 描述

Two minutes to connect Higgsfield to Claude

Now Higgsfield works within Claude via MCP.

#### 提示詞

```text
Two minutes to connect Higgsfield to Claude

Now Higgsfield works within Claude via MCP. Storyboards, images, and videos from a dozen models—Nano Banana Pro, GPT Image 2, Seedance 2.0—are available without leaving the chat.

Setup takes two minutes. Errors get credit.
```

### No. 892: 🔵¿Y Si Pudieras Editar Tus Videos Simplemente Hablando

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Carlos Alarcón
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🔵¿Y si pudieras editar tus videos simplemente hablando con la IA como si fuera un editor real?

#### 提示詞

```text
🔵¿Y si pudieras editar tus videos simplemente hablando con la IA como si fuera un editor real?

@GoogleDeepMind  acaba de lanzar NanoBanana 2 Lite y Gemini Omni Flash, dos modelos diseñados para revolucionar la creación de contenido rápido y de bajo costo. Mientras que
```

### No. 893: Google Just Quietly Changed How Content Gets Made

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073454879532855656.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073454879532855656.mp4" controls muted playsinline width="720"></video>

#### 描述

Google just quietly changed how content gets made.

#### 提示詞

```text
Google just quietly changed how content gets made. 

Almost nobody noticed.

Two new models dropped this week — and chained together, they kill the old 5-step content workflow.

→ Nano Banana 2 Lite: text-to-image in ~4 seconds
→ Gemini Omni Flash: edits video with plain
```

### No. 894: Locked In. 🎱✨ Sadie Sink🤩 Made By Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Natty Windstorm
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Locked in.

#### 提示詞

```text
{
  "prompt": "Ultra-realistic lifestyle portrait of a young woman playing pool inside a modern upscale billiards lounge at night. She has long silky copper-red hair tied into a relaxed low https://t.co/n4uP9iDAL6
```

### No. 895: This Is What “Quick Bathroom Selfie” Turned Into

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** A R I A
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

this is what “quick bathroom selfie” turned into

💗 Sydney Sweeney + Madelyn Cline
🤎 Barbara Palvin + Ana de Armas
💙 Sabrina Carpenter + Margot Robbie

Nano Banana prompt 👇

#### 提示詞

```text
this is what “quick bathroom selfie” turned into

💗 Sydney Sweeney + Madelyn Cline
🤎 Barbara Palvin + Ana de Armas
💙 Sabrina Carpenter + Margot Robbie

Nano Banana prompt 👇
```

### No. 896: Nano Banana Pro On Gemini App Prompt: Subject

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Oogie
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana Pro on Gemini app

Prompt: Subject: A close-up portrait of a stunning young beautiful woman with an athletic body, mixed-race.

#### 提示詞

```text
Subject: A close-up portrait of a stunning young beautiful woman with an athletic body, mixed-race. Appearance: Hair: dark brown, tied with a clip with long bangs that frame both sides of her face Makeup: Very distinctive "soft girl" https://t.co/CeHcCgKlzw
```

### No. 897: Nano Banana 2 On Gemini. Prompt: A Full-Length

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heisenberg
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 on Gemini.

#### 提示詞

```text
A full-length studio portrait of a young man with dark, messy hair, sitting in a casual, relaxed pose on a modern minimalist chair. The entire scene is set against a seamless, solid neutral gray backdrop (both floor and wall). The lighting is https://t.co/LF8f9RDfRD https://t.co/zStc6giw0X
```

### No. 898: Gpt Image 2 | Nano Banana 2 Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ᴍᴜʀᴘʜʏ
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

GPT image 2 | Nano Banana 2 prompt share on  

Guess which one is GPT and Nano ?

#### 提示詞

```text
SYSTEM ROLE

You are an elite commercial art director specializing in luxury editorial advertising, fashion photography, and premium product campaigns.

Think like https://t.co/nTo6TEkr8j
```

### No. 899: Nano Banana Prompt 🍌👇🏻 In The Description

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Z O R A | A I artist
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana Prompt 🍌👇🏻 in the description

#### 提示詞

```text
Nano Banana Prompt 🍌👇🏻 in the description
```

### No. 900: Amazing Gemini Omni Flash On Arcads: Ai Video

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice The Ai Expert
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Amazing Gemini Omni Flash on Arcads: AI video, now effortless

#### 提示詞

```text
@arcads_ai Amazing Gemini Omni Flash on Arcads: AI video, now effortless
```

### No. 901: "Phota Api" As Provided By Mitte Ai Has

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Flutterwhat
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

"Phota API" as provided by Mitte AI has impressive prompt adherence comparable to nano banana 2.

#### 提示詞

```text
@PhotaLabs' "Phota API" as provided by Mitte AI has impressive prompt adherence comparable to nano banana 2. But i was disqualified from today's posting because it's nothing but a wrapper service and an agent  which makes my prompt and refrence reduantant.
```

### No. 902: Chloë Grace Moretz - Gemini Nano Banana Pro

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Chloë Grace Moretz  - Gemini Nano Banana Pro

Prompt:
{
  "vibe_title_en": "A Silken and Surreal Laugh Suspended in Pearlescent Tides",
  "master_prompt": "Extreme close-up macro portrait of The Prota

#### 提示詞

```text
{
  "vibe_title_en": "A Silken and Surreal Laugh Suspended in Pearlescent Tides",
  "master_prompt": "Extreme close-up macro portrait of The Protagonist caught completely off-guard, laughing in a sudden moment of pure surprise https://t.co/EeuXtnp0MV
```

### No. 903: I Asked Nano Banana Pro Davinci To Render

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** GP
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073468282804547903.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073468282804547903.mp4" controls muted playsinline width="720"></video>

#### 描述

I asked Nano Banana Pro DaVinci to render an ultra hi-def UHD 15-second video with a soundtrack using this prompt: 

"A video of Ursula von der Leyen dressed as an imperial monarch wearing symbols on 

#### 提示詞

```text
"A video of Ursula von der Leyen dressed as an imperial monarch wearing symbols on her royal imperial clothing that represent the EU and Prussian militarism being https://t.co/13xPF3QZ2G
```

### No. 904: Nano Banana Pro Image At Prompt 👇

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lipstick
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano banana pro image at   
 Prompt 👇

#### 提示詞

```text
Nano banana pro image at #geminiApp  
 Prompt 👇
```

### No. 905: Me Amenazó De Verdad Pero Para Darme Cuenta

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** DIEGO BOYER URIOSTEGUI 💜
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Me amenazó de verdad Pero para darme cuenta que no podía hacer que de la nada alguien tuviera que soltar más de 50k por mis pendejadas!

#### 提示詞

```text
Me amenazó de verdad Pero para darme cuenta que no podía hacer que de la nada alguien tuviera que soltar más de 50k por mis pendejadas! Y si si tengo una carpeta con fotos con el y? Está con una selfie y un buen prompt en nano banana sale como si no selfie.
```

### No. 906: Here Are Some Nano Banana 2 Images Generated

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Michael Barton
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073471261481775405.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073471261481775405.mp4" controls muted playsinline width="720"></video>

#### 描述

Here are some Nano Banana 2 images generated by Google Omni.

#### 提示詞

```text
Here are some Nano Banana 2 images generated by Google Omni. Gunfight Film Noir and walking film noir. I know Seedance 2 can do this type of video.
```

### No. 907: Higgsfield Explainer Generates 10-Minute Documentary Videos From Any

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Logits crew
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Higgsfield Explainer generates 10-minute documentary videos from any topic using Claude Fable 5 + Gemini Omni Flash—auto-researches, writes script, voices, renders with visuals.

#### 提示詞

```text
Higgsfield Explainer generates 10-minute documentary videos from any topic using Claude Fable 5 + Gemini Omni Flash—auto-researches, writes script, voices, renders with visuals. No face required. #AI #Video

📢
```

### No. 908: Most Ai Video Tools Are Still Slot Machines

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073474423601127583.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073474423601127583.mp4" controls muted playsinline width="720"></video>

#### 描述

Most AI video tools are still slot machines.

#### 提示詞

```text
Most AI video tools are still slot machines.

Gemini Omni Flash is not.

You don’t regenerate the whole clip when something looks wrong.

You talk to the video and change one specific thing.

Here’s why that matters:

→ Change the lighting without touching the scene

→ Make an
```

### No. 909: Google Convierte Texto En Video Ahora - Low

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Luchito Labs
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

GOOGLE CONVIERTE TEXTO EN VIDEO AHORA - LOW COST 🥳

Google lanzó dos herramientas que generan imágenes y videos desde texto en segundos, a precios que cualquier negocio puede pagar.

#### 提示詞

```text
GOOGLE CONVIERTE TEXTO EN VIDEO AHORA - LOW COST 🥳

Google lanzó dos herramientas que generan imágenes y videos desde texto en segundos, a precios que cualquier negocio puede pagar.

Lo que debes saber:

👉 Nano Banana 2 Lite produce imágenes en menos de 4 segundos — al 50% del
```

### No. 910: "Mirror Check Complete ✨ Casual Vibes And Comfy

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

"Mirror check complete ✨ Casual vibes and comfy fits only."

| Sadie Sink | Emma Myers | 
| Millie Bobby Brown |

Images Made With AI " Gemini Nano Banana Flash 3.5 "

Here is PROMPT of these AI gener

#### 提示詞

```text
"Mirror check complete ✨ Casual vibes and comfy fits only."

| Sadie Sink | Emma Myers | 
| Millie Bobby Brown |

Images Made With AI " Gemini Nano Banana Flash 3.5 "

Here is PROMPT of these AI generated pictures: 👇

"A young woman with fair skin and dark brown hair styled in
```

### No. 911: Google Just Quietly Ended The "Record, Edit, Upload"

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073476928254963796.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073476928254963796.mp4" controls muted playsinline width="720"></video>

#### 描述

Google just quietly ended the "record, edit, upload" grind.

#### 提示詞

```text
Google just quietly ended the "record, edit, upload" grind. 😳

I didn't believe it either — so I tested it myself.

I opened my SEO roadmap notebook in NotebookLM, clicked "Video Overview," picked Short, and hit generate.

60 seconds later I had a fully narrated, vertical video.
```

### No. 912: Back-To-Back Open-Source Contributions To Just Shipped Two Major

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mayank Saini
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Back-to-back open-source contributions to  
Just shipped two major AI integrations:
  (AI Chat &amp; Anthropic-compatible reasoning)
Google Gemini &amp; Veo (Multimodal text, Nano Banana images &amp; 

#### 提示詞

```text
Back-to-back open-source contributions to @corsairdev! 
Just shipped two major AI integrations:
 @deepseek_ai (AI Chat &amp; Anthropic-compatible reasoning)
Google Gemini &amp; Veo (Multimodal text, Nano Banana images &amp; Veo video gen)
 #OpenSource #AI #TypeScript #BuildInPublic
```

### No. 913: Bu Hafta Youtube Kanalımda Yine Haftanın Yapay Zeka

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Harun SEYHAN
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Bu hafta YouTube kanalımda yine haftanın yapay zeka gelişmelerini sizler için derledim.

#### 提示詞

```text
Bu hafta YouTube kanalımda yine haftanın yapay zeka gelişmelerini sizler için derledim. Ama açık konuşayım: Bu hafta "derledim" demek bile zor, çünkü gündem tek bir hafta içine sığmayacak kadar doluydu.
Anthropic tek başına bir haftada hem Fable 5'i geri getirdi hem de yeni
```

### No. 914: When You Spend Hours On The Character Customization

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Vireon
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

When you spend hours on the character customization screen and end up with two absolute masterpieces 

Madelaine Petsch 🧡
AnnaSophia Robb 💛

Nano Banana Pro via HailuoAI
Prompt in quote post 👇

#### 提示詞

```text
When you spend hours on the character customization screen and end up with two absolute masterpieces 

Madelaine Petsch 🧡
AnnaSophia Robb 💛

Nano Banana Pro via HailuoAI
Prompt in quote post 👇

#MadelainePetsch #AnnaSophiaRobb #ReZero #Cosplay
```

### No. 915: Gemini Omni Flash'In Ne Yapabildiğini Tek Bir Örnek

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ali Kaplan
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073494303511359683.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073494303511359683.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash'ın ne yapabildiğini tek bir örnek özetliyor: alttaki orijinal videoda birinin elini uzattığı sıradan bir araba var.

#### 提示詞

```text
Gemini Omni Flash'ın ne yapabildiğini tek bir örnek özetliyor: alttaki orijinal videoda birinin elini uzattığı sıradan bir araba var. Üstteki versiyonda ise aynı araba, aynı el hareketiyle havaya kaldırılmış gibi görünüyor.

Olayın çılgın tarafı burada: bu bir yeşil perde, bir 3B
```

### No. 916: Burning Car Newspaper Portrait Nano Banana Pro On

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hassan👑
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Burning Car Newspaper Portrait 

Nano Banana Pro on Google Flow 

Prompt in Comment ⬇️

#### 提示詞

```text
Burning Car Newspaper Portrait 

Nano Banana Pro on Google Flow 

Prompt in Comment ⬇️
```

### No. 917: I'M Traveling Around New York🗽 Image Created On

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alex Prompts
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

I'm traveling around New York🗽 Image created on Nano Banana Pro🍌🍌🍌 Save it for yourself and take cool photos

What's cool about this prompt is that you can enter the name of absolutely any city you wa

#### 提示詞

```text
I'm traveling around New York🗽 Image created on Nano Banana Pro🍌🍌🍌 Save it for yourself and take cool photos

What's cool about this prompt is that you can enter the name of absolutely any city you want, and you'll get a photo of yourself in that city. Give it a try and share
```

### No. 918: Let'S Make A Fit Check At Gym Before

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Let's make a fit check at gym before  bed!😜💪🏻Let me know your opinion!😏 Sleep well my friends!😴

Megan Fox, Sophie Rain, Emily Rudd, Sydney Sweeney🔥
👉🏻Subscribe for more content!⚡

Nano Banana 2 via H

#### 提示詞

```text
Let's make a fit check at gym before  bed!😜💪🏻Let me know your opinion!😏 Sleep well my friends!😴

Megan Fox, Sophie Rain, Emily Rudd, Sydney Sweeney🔥
👉🏻Subscribe for more content!⚡

Nano Banana 2 via Hailuo AI
Prompt 1:

realistic amateur iPhone shot of a stunning fit Megan
```

### No. 919: Day 4 : (04/07/2026) Top 7 Ai And

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Fzee
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Day 4 : (04/07/2026)
Top 7 ai and startup updates.

#### 提示詞

```text
Day 4 : (04/07/2026)
Top 7 ai and startup updates.

1. ​"Billing Cliff" for Fable 5: 
As of July 7, 2026, the temporary free usage period for Anthropic’s Fable 5 ends. Developers and enterprise users must now transition to usage-based credits, marking a significant shift in the
```

### No. 920: New Promo Video Drop. Ran Out Of Credits

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Stephen Brouhard
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073498975047438775.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073498975047438775.mp4" controls muted playsinline width="720"></video>

#### 描述

New promo video drop.

#### 提示詞

```text
@kunchenguid New promo video drop. Ran out of credits on Gemini omni so best I could do lol
```

### No. 921: Plant Therapy At Its Finest: That Little Snip

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073506413465280914.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073506413465280914.mp4" controls muted playsinline width="720"></video>

#### 描述

Plant therapy at its finest: that little snip sound is pure ASMR ✂️🌿😌

Video created with Gemini Omni

#### 提示詞

```text
Plant therapy at its finest: that little snip sound is pure ASMR ✂️🌿😌

Video created with Gemini Omni
```

### No. 922: No, Created In The Gemini Mobile App On

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Stephen Brouhard
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

No, created in the Gemini mobile app on the go.

#### 提示詞

```text
@feifei_qiu @kunchenguid No, created in the Gemini mobile app on the go. This particular one was a new thread after some other failed attempts where it changed people etc. See image. Hindsight, I woukd attach image and describe to Gemini what I want, ask it to create prompt, then paste it into new chat
```

### No. 923: Balerin-Inspired Elegance. The Warmth Of Yellow, The Energy

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Vireon
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Balerin-inspired elegance.

#### 提示詞

```text
Balerin-inspired elegance. The warmth of yellow, the energy of blue, the softness of blush, and the breeze of turquoise. How do you like this harmony of colors and details?

Sofia Vergara 💛
Lili Reinhart 💙
Camila Mendes 🩷
Freya Allan 🩵

Like, Repost &amp; Follow if you want more
```

### No. 924: Art Was Never About The Tool. It Was

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Team Media Projects
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073512532120146263.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073512532120146263.mp4" controls muted playsinline width="720"></video>

#### 描述

Art was never about the tool.

#### 提示詞

```text
Art was never about the tool. It was always about the hand behind it.

"HAND TO HAND" — from cave paintings to AI prompts, one unbroken line.

Image → Nano Banana &amp; Midjourney 8.1
Video → Kling Video 3.0
Script → Claude Fable 5
Music → Suno 5.5
Narrative → ElevenLabs v3
```

### No. 925: Never A Bad Day For A Group Boat

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Never a bad day for a group boat ride!

#### 提示詞

```text
Never a bad day for a group boat ride!

Twice
IVE
Blackpink

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 926: Which Color Is Your Vibe Today? Yellow 💛

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Which Color Is Your Vibe Today?

#### 提示詞

```text
Which Color Is Your Vibe Today? 

Yellow 💛 Green 💚
Red ♥️ or Pink 🩷 

| Millie Bobby Brown | Sadie Sink | Emma Myers | Sydney Sweeney |

Photos Made With AI "Gemini Nano Banana Pro" 

Here's the PROMPT of these AI generated Photos:👇

"A young woman with fair skin featuring
```

### No. 927: Ai Ugc Just Crossed A Line. The Clip

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** messiah
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073525419404316788.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073525419404316788.mp4" controls muted playsinline width="720"></video>

#### 描述

AI UGC just crossed a line.

#### 提示詞

```text
AI UGC just crossed a line.

The clip going around right now shows the full pipeline: an LLM writes a hyper-detailed "physical profile" (age, skin tone, ethnic features, jawline, brow shape, lip color), Nano Banana Pro renders macro-level shots down to the pores and freckles, a
```

### No. 928: Sparkling Bright ✨ Wonyoung Rei Leeseo Ive Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Sparkling bright ✨

Wonyoung
Rei
Leeseo

IVE

Nano Banana Pro via AI Studio, prompt ⬇

#### 提示詞

```text
Sparkling bright ✨

Wonyoung
Rei
Leeseo

IVE

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 929: 🎬 Genflik Turns A Product Link Or Photos

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Crypto Ball
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🎬 GenFlik turns a product link or photos into a finished UGC avatar video ad with script, voice, captions, and music, no filming required.

#### 提示詞

```text
🎬 GenFlik turns a product link or photos into a finished UGC avatar video ad with script, voice, captions, and music, no filming required.

🖼️ OVOV generates 4K images with GPT Image 2 and Nano Banana 2, giving you full commercial rights and no watermark on any output.
```

### No. 930: Most People Regenerate A Whole Video When They

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Félix Sanz
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073530674070294999.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073530674070294999.mp4" controls muted playsinline width="720"></video>

#### 描述

Most people regenerate a whole video when they need one change.

#### 提示詞

```text
Most people regenerate a whole video when they need one change. You don't have to.

Gemini Omni Flash edits the clip you already have. The rule that makes it work: name only what changes, then pin what stays.

Same street, same camera move. The framing and the motion never moved.
```

### No. 931: Drying Off Together! Wonyoung And Yujin, Ive Lisa

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Drying off together!

#### 提示詞

```text
Drying off together!

Wonyoung and Yujin, IVE
Lisa and Rose, Blackpink
Sana and Momo, Twice
Karina and Winter, aespa

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 932: Gemini Omni Flash Api Is Basically Unusable

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 0xmusashi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

gemini omni flash api is basically unusable -- if google keeps fucking this up developers will have no choice but to rely on chinese video models, which are clearly mogging us on virtually every front

#### 提示詞

```text
gemini omni flash api is basically unusable -- if google keeps fucking this up developers will have no choice but to rely on chinese video models, which are clearly mogging us on virtually every front (quality, cost, etc.)
```

### No. 933: This Woman Models Sweaters On Amazon. She Was

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Fargo
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073557476109340693.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073557476109340693.mp4" controls muted playsinline width="720"></video>

#### 描述

THIS WOMAN MODELS SWEATERS ON AMAZON.

#### 提示詞

```text
THIS WOMAN MODELS SWEATERS ON AMAZON. SHE WAS BORN IN A PROMPT.

The workflow in this clip:

✔️create the model in Higgsfield Soul (ultra-realistic fashion visuals)
✔️take any Amazon outfit → Nano Banana → "place the entire outfit from the second image onto the woman in the
```

### No. 934: Chasing The Sunset In Full Bloom ✨ Comfort

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Chasing the sunset in full bloom ✨ Comfort, Confidence, and Coordination.

#### 提示詞

```text
Chasing the sunset in full bloom ✨ Comfort, Confidence, and Coordination.

Photos Made With AI "Gemini Nano Banana Flash Lite 3.1"

| Sadie Sink | Emma Myers |
| Millie Bobby Brown |

Here's the PROMPT of these AI generated Photos: 👇 

"A beautiful young woman with long, wavy,
```

### No. 935: Hobi Healing Tapi Banyak Tagihan [ Tertampar Realita

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ellynwidjaya
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073570599457497223.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073570599457497223.mp4" controls muted playsinline width="720"></video>

#### 描述

Hobi Healing Tapi Banyak Tagihan 
[ Tertampar Realita Kehidupan ]

/ Ai Generated Video / Google Veo / Nano Banana

#### 提示詞

```text
Hobi Healing Tapi Banyak Tagihan 
[ Tertampar Realita Kehidupan ]

/ Ai Generated Video / Google Veo / Nano Banana
```

### No. 936: Soft And Cozy Vibes Sana Nayeon Mina Tzuyu

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Soft and cozy vibes

Sana
Nayeon
Mina
Tzuyu

Twice

Nano Banana Pro via AI Studio, prompt ⬇

#### 提示詞

```text
Soft and cozy vibes

Sana
Nayeon
Mina
Tzuyu

Twice

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 937: Silent Horror: **Neck Tumor** — An Ai-Powered Short

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** SilentHorror
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Silent Horror: **Neck Tumor** — an AI-powered short horror film.

#### 提示詞

```text
Silent Horror: **Neck Tumor** — an AI-powered short horror film.
Created with the help of  OpenArt AI:
📷 
**Models used:**
📷 Design &amp; Storyboard: ChatGPT, Nano Banana, Seeddream 📷
📷 Video Generation: Seeddance 2 📷
```

### No. 938: Gemini Omni Memang Bagus Untuk Editing Tapi Gak

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** DΞV
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073584213480333572.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073584213480333572.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni memang bagus untuk editing tapi gak selalu berhasil untuk one shoot prompt.

#### 提示詞

```text
Gemini Omni memang bagus untuk editing tapi gak selalu berhasil untuk one shoot prompt.

Tapi kalau saya pikir-pikir, jika nanti Google ngasih versi Pro, bakalan powerful.

Saya mikirnya video jadi kayak template.

Contohnya video di bawah ini  yang perlu 2 step editing sehingga
```

### No. 939: Inspired By The Japanese Legend Of Hagoromo ((羽衣伝説／はごろもでんせつ)

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** The Anxious Mind
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073586147377439130.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073586147377439130.mp4" controls muted playsinline width="720"></video>

#### 描述

Inspired by the Japanese legend of Hagoromo ((羽衣伝説／はごろもでんせつ) 🌊💖
Would you return the heavenly robe or ask her to stay?

#### 提示詞

```text
Inspired by the Japanese legend of Hagoromo ((羽衣伝説／はごろもでんせつ) 🌊💖
Would you return the heavenly robe or ask her to stay?
(created using @wavespeed_ai #Seedance) 😳🌸
prompt below ✨👇

45秒垂直短劇，9:16，電影感，8世紀日本奈良時代古風，1950年代日本舊膠片電影質感。
```

### No. 940: I Just Vibe-Coded A Meta Ad Research App

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mike Futia
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073587726323220628.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073587726323220628.mp4" controls muted playsinline width="720"></video>

#### 描述

I just vibe-coded a Meta ad research app in Claude Code 🤯

One keyword → winning ads analyzed, creative briefs written, trends mapped, and 10 ad variations generated for your brand.

#### 提示詞

```text
I just vibe-coded a Meta ad research app in Claude Code 🤯

One keyword → winning ads analyzed, creative briefs written, trends mapped, and 10 ad variations generated for your brand.

All inside Claude Code.

Perfect for DTC brands and agencies still running competitor research
```

### No. 941: Still Doing This Manually In 2026? Here Are

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Chronicle
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Still doing this manually in 2026?

#### 提示詞

```text
Still doing this manually in 2026? 

Here are 9 AI tools splitting the work.

1. Image → Nano Banana, Midjourney, Freepik

2. Video → HeyGen, Runway, Kling AI

3. Audio → ElevenLabs, Speechify, Descript

🔖 Save this for your next project.

Follow:@AI_Chonicle
Comment: AI
```

### No. 942: Pov: You Just Found Your Dream Wedding Aesthetic

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Shahid Wani
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

POV: You just found your dream wedding aesthetic

Created with Nano Banana pro on  

Prompt : Wide romantic garden editorial shot, young woman in dusty rose spaghetti-strap dress holding lush pink bri

#### 提示詞

```text
Wide romantic garden editorial shot, young woman in dusty rose spaghetti-strap dress holding lush pink bridal bouquet, standing in garden path with soft green trees and https://t.co/XMZbXMcP9X
```

### No. 943: Nano Banana Prompt 🍌 👇🏻 In The Description

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Z O R A | A I artist
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana Prompt 🍌 👇🏻 in the description

#### 提示詞

```text
Nano Banana Prompt 🍌 👇🏻 in the description 

#AIArt #PromptShare #GenerativeAI #DigitalArt #FashionPhotography #PortraitPhotography #AIPrompt
```

### No. 944: A Small Trick From The Article👇🏻That I'Ve Been

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kiana Liang
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

A small trick from the article👇🏻that I've been using constantly: how I get cinematic frames and a consistent character at the same time.

#### 提示詞

```text
A small trick from the article👇🏻that I've been using constantly: how I get cinematic frames and a consistent character at the same time. (also avoiding GPT2 strict moderation）

For pure aesthetics, Midjourney is still my pick. Yes, it has omni reference, but consistency isn't
```

### No. 945: You Can Now Edit A Video Just By

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073772137056543051.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073772137056543051.mp4" controls muted playsinline width="720"></video>

#### 描述

You can now edit a video just by talking to it.

#### 提示詞

```text
You can now edit a video just by talking to it.

No timeline.

No cutting.

No editing app.

Google's Gemini Omni Flash lets you describe a change and it just happens.

Here's the workflow:

→ Start with one clip
→ Say "dim the lights" and it dims them
→ Say "make the
```

### No. 946: The $10,000 Web Design Moat Just Evaporated: Claude

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** PolyBender
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073773040739999997.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073773040739999997.mp4" controls muted playsinline width="720"></video>

#### 描述

THE $10,000 WEB DESIGN MOAT JUST EVAPORATED: CLAUDE FABLE 5 BUILDS CINEMATIC MASTERPIECES WITH ONE PROMPT

Using a single prompt, Claude Fable 5 has demonstrated it can build award-winning-style websi

#### 提示詞

```text
THE $10,000 WEB DESIGN MOAT JUST EVAPORATED: CLAUDE FABLE 5 BUILDS CINEMATIC MASTERPIECES WITH ONE PROMPT

Using a single prompt, Claude Fable 5 has demonstrated it can build award-winning-style websites - complete with immersive 3D scrolling effects and professional UI - in just
```

### No. 947: Your Ai Agent Just Got 10X Faster⚡️ Magica

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Magica (formerly Galaxy.ai)
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073774069221097858.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073774069221097858.mp4" controls muted playsinline width="720"></video>

#### 描述

Your AI agent just got 10x faster⚡️

Magica plugged in Nano Banana 2 Lite — generating images in under 4 seconds, at fraction of the cost.

#### 提示詞

```text
Your AI agent just got 10x faster⚡️

Magica plugged in Nano Banana 2 Lite — generating images in under 4 seconds, at fraction of the cost.

No prompt engineering. You describe the task. The agent runs the model. 

Try Magica today.
```

### No. 948: 🎨 Ai Art &Amp; Visuals Roundup — July

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AlexAImaginator
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🎨 AI ART &amp; VISUALS ROUNDUP — July 05, 2026

1️⃣ ZUMI BY AZ8: THE AI CANVAS AGENT THAT READS YOUR PROJECT

A new AI video agent called Zumi by az8 is shifting the paradigm from reactive prompting t

#### 提示詞

```text
🎨 AI ART &amp; VISUALS ROUNDUP — July 05, 2026

1️⃣ ZUMI BY AZ8: THE AI CANVAS AGENT THAT READS YOUR PROJECT

A new AI video agent called Zumi by az8 is shifting the paradigm from reactive prompting to proactive collaboration. Instead of waiting for commands, Zumi reads your project
```

### No. 949: Google Gemini Nano Banana Prompt : Using The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Smiling Khan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google Gemini Nano Banana 

Prompt :

Using the attached character reference, create an ultra-realistic full-body mirror selfie in a bright, minimalist bedroom with large white wardrobe doors, light w

#### 提示詞

```text
Using the attached character reference, create an ultra-realistic full-body mirror selfie in a bright, minimalist bedroom with large white wardrobe doors, light wooden flooring, and a neatly made bed. The woman wears a casual oversized red https://t.co/r9LhugmbV1
```

### No. 950: They'Ll Be Taking Good Care Of You! Winter

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

They'll be taking good care of you!

#### 提示詞

```text
They'll be taking good care of you!

Winter
Giselle
Ningning
Karina

aespa

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 951: Editácia Videí Pomocou Ai (Vfx Efekty) 🔥 Testoval

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Zaujalo ma AI / Martin
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073782394759286789.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073782394759286789.mp4" controls muted playsinline width="720"></video>

#### 描述

Editácia videí pomocou AI (VFX efekty) 🔥

Testoval som úpravu amatérsky natočených videí pomocou Gemini Omni Flash a Seedance 2.0 v 4K a je to skvelé.

#### 提示詞

```text
Editácia videí pomocou AI (VFX efekty) 🔥

Testoval som úpravu amatérsky natočených videí pomocou Gemini Omni Flash a Seedance 2.0 v 4K a je to skvelé. Najmä Seedance v 4K dáva brutál kvalitu.

Nižšie je link na video, kde celý postup vysvetľujem detailnejšie.
```

### No. 952: Morning Moments Like These, Quiet, Peaceful, And Full

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

MORNING Moments like these, quiet, Peaceful, and full of Possibility.

#### 提示詞

```text
MORNING Moments like these, quiet, Peaceful, and full of Possibility. ✨

Have A Wonderful Day! 😊 

SADIE SINK 😻 

Photos Made With AI "Gemini Nano Banana Pro 3.1

Here's the PROMPT of these AI Generated Pictures:

"A young woman with fair skin and long reddish-brown hair
```

### No. 953: The Best Edits Don'T Look Like Edits. They

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** WaveSpeedAI
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073784465604960580.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073784465604960580.mp4" controls muted playsinline width="720"></video>

#### 描述

The best edits don't look like edits.

#### 提示詞

```text
The best edits don't look like edits.

They feel like entirely new stories.

Watch how Gemini Omni Flash transforms a reference video into a completely different scene through editing.

👇 Explore Gemini Omni Flash on WaveSpeed AI
```

### No. 954: One Of The Most Recent Launch Video I

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Feyi
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073787359271792857.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073787359271792857.mp4" controls muted playsinline width="720"></video>

#### 描述

One of the most recent launch video I made.

#### 提示詞

```text
One of the most recent launch video I made.
 
Used: 
• GPT Image 2
• Cinema Studio 3.5 
• Nano banana
• Archival footages

Generated 50k+ views 

Thoughts?
```

### No. 955: Test Out Gemini Omni And The Video Use

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Miguel Torrez
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Test out gemini omni and the video use / hyperframes suite, I'm pretty sure you can bring the prod cost of your videos to ~20-50$ in api credits for them which is small at your scale

Gemini omni is v

#### 提示詞

```text
@nicksaraev Test out gemini omni and the video use / hyperframes suite, I'm pretty sure you can bring the prod cost of your videos to ~20-50$ in api credits for them which is small at your scale

Gemini omni is very good at "editing" videos and maintaining person fidelity
```

### No. 956: Turning Real Footage Into Anime Is Now A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Deenu Khan
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073793923797926180.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073793923797926180.mp4" controls muted playsinline width="720"></video>

#### 描述

Turning real footage into anime is now a single prompt.

#### 提示詞

```text
Turning real footage into anime is now a single prompt.

Magnific ran daily live videos through Google Gemini Omni to convert them into clean anime-style clips. They used their own stock footage here, but you can upload your own just as easily. The prompt is simply: recreate this
```

### No. 957: So Cool 😎 Jennie Jisoo Rose Blackpink Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

So cool 😎

Jennie
Jisoo
Rose

Blackpink

Nano Banana Pro via AI Studio, prompt 👇

#### 提示詞

```text
So cool 😎

Jennie
Jisoo
Rose

Blackpink

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 958: Your Prompt With Gemini Omni

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CINO - Artificial Intelligence
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073798068072321514.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073798068072321514.mp4" controls muted playsinline width="720"></video>

#### 描述

Your prompt with Gemini Omni

#### 提示詞

```text
@CharaspowerAI Your prompt with Gemini Omni
```

### No. 959: Sage Green Season Is Undefeated 💚 Billie Eilish

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Noah
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Sage green season is undefeated 💚 

Billie Eilish 😍

Nano Banana Pro 🍌 

Prompt:
{
  "scene_type": "Interior, Bedroom, Deep Focus Mirror Selfie",
  "subject_details": {
    "person": {
      "appearan

#### 提示詞

```text
{
  "scene_type": "Interior, Bedroom, Deep Focus Mirror Selfie",
  "subject_details": {
    "person": {
      "appearance": "Full likeness to woman in image_0.png, platinum blonde hair, straight https://t.co/VPsy0KTy19
```

### No. 960: Artingentさんの作品です Jul 3 A Hanging Orchid Observatory In

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** sayobonita
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Artingentさんの作品です


Jul 3
A hanging orchid observatory in an artistic arborpunk style.

#### 提示詞

```text
Artingentさんの作品です
@artingent←Prompt

Jul 3
A hanging orchid observatory in an artistic arborpunk style. Generated using Nano banana pro. Prompt in the first reply
```

### No. 961: Google Just Dropped Gemini Omni Flash, A Low-Cost

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Creatorslop
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073799128925286725.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073799128925286725.mp4" controls muted playsinline width="720"></video>

#### 描述

Google just dropped Gemini Omni Flash, a low-cost model built for video generation and conversational editing.

#### 提示詞

```text
Google just dropped Gemini Omni Flash, a low-cost model built for video generation and conversational editing.

You can generate a video, then refine it by just talking to it in plain language.

Live now in AI Studio and the Gemini API.
```

### No. 962: Music Video That I Produced And Directed To

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Fabian Santos
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Music video that I produced and directed to the brazilian christian singer Viviane.

#### 提示詞

```text
Music video that I produced and directed to the brazilian christian singer Viviane. Tools used: Nano Banana pro, Kling AI, Dzine and Magic hour AI.  Click in the link to watch it!
```

### No. 963: A 27 Year Old In Tucson Makes $14,600

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CRYPTANSKY
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073804094893175116.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073804094893175116.mp4" controls muted playsinline width="720"></video>

#### 描述

a 27 year old in tucson makes $14,600 a month off a woman he assembled from two strangers' photos on pinterest.

#### 提示詞

```text
a 27 year old in tucson makes $14,600 a month off a woman he assembled from two strangers' photos on pinterest.

no camera, no model, no studio. a source image, a face-merge in an app called nano banana, and a button in the corner of that app that literally says EARN.

the
```

### No. 964: Turning Heads Without Trying. ❤️‍🔥 Sydney Sweeney ·

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sophia | AI Artist ✨
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Turning heads without trying.

#### 提示詞

```text
Turning heads without trying. ❤️‍🔥

Sydney Sweeney · Sabrina Carpenter · Millie Bobby Brown · Billie Eilish ✨

Gemini Nano Banana 🍌

prompt👇

#LuxuryFashion #RedCarpetVibes #SydneySweeney #SabrinaCarpenter #MillieBobbyBrown #BillieEilish #FashionPhotography #EditorialStyle
```

### No. 965: Which Image Do You Like Most? Right Image

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Which image do you like most?

#### 提示詞

```text
Create a high-quality, atmospheric portrait in the style of the provided references, featuring a close-up of a person with delicate features and wavy blonde hair, captured in soft, dramatic https://t.co/FO9ZLb4kmx
```

### No. 966: Gemini Omni Flash Is Live On Lilidi 🎬

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lilidi · AI
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073808128680886573.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073808128680886573.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash is live on Lilidi 🎬

Photo → video in one prompt.

#### 提示詞

```text
Gemini Omni Flash is live on Lilidi 🎬

Photo → video in one prompt. 10 seconds, one continuous shot, no cuts.

First render: our own logo, breathing.

Try it →  🥐
```

### No. 967: 🛠 Works With: Gpt Image 2 (Chatgpt Images

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** vucreates.ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🛠 Works with: GPT Image 2 (ChatGPT Images 2.0) · Midjourney v6+ · Google Gemini (Nano Banana) · Grok · Flux · Imagen · SDXL

📌 How to use: open ChatGPT → upload your real portrait → paste the prompt b

#### 提示詞

```text
🛠 Works with: GPT Image 2 (ChatGPT Images 2.0) · Midjourney v6+ · Google Gemini (Nano Banana) · Grok · Flux · Imagen · SDXL

📌 How to use: open ChatGPT → upload your real portrait → paste the prompt below → generate a vertical 9:16 image.

📝 MAIN PROMPT:
Ultra-realistic
```

### No. 968: Gemini Omni Flash Lets You Edit Video With

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Mastery Guide
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073809127713718763.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073809127713718763.mp4" controls muted playsinline width="720"></video>

#### 描述

GEMINI OMNI FLASH LETS YOU EDIT VIDEO WITH YOUR VOICE

Swap backgrounds and add text just by talking through the edits.

#### 提示詞

```text
GEMINI OMNI FLASH LETS YOU EDIT VIDEO WITH YOUR VOICE

Swap backgrounds and add text just by talking through the edits.
```

### No. 969: The Games Aren'T Stopping, And Neither Are They!

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

The games aren't stopping, and neither are they!

#### 提示詞

```text
The games aren't stopping, and neither are they!

Wonyoung and Sana for 🇧🇷🇳🇴
Rei and Nayeon for 🏴󠁧󠁢󠁥󠁮󠁧󠁿🇲🇽

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 970: Nano Banana Pro On Gemini Prompt: A Cinematic

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Harboris
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana Pro on Gemini 

Prompt:
A cinematic nighttime rooftop balcony portrait of a handsome young man with a slim athletic build, soft defined facial features, light brown skin, thick naturally m

#### 提示詞

```text
A cinematic nighttime rooftop balcony portrait of a handsome young man with a slim athletic build, soft defined facial features, light brown skin, thick naturally messy medium length curly dark brown hair with loose textured curls falling over https://t.co/er4pr59Qi5
```

### No. 971: 🛠 Works With: Gpt Image 2 (Chatgpt Images

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** vucreates.ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🛠 Works with: GPT Image 2 (ChatGPT Images 2.0) · Midjourney v6+ · Google Gemini (Nano Banana) · Grok · Flux · Imagen · SDXL

📌 How to use: open ChatGPT → upload your real portrait → paste the prompt b

#### 提示詞

```text
🛠 Works with: GPT Image 2 (ChatGPT Images 2.0) · Midjourney v6+ · Google Gemini (Nano Banana) · Grok · Flux · Imagen · SDXL

📌 How to use: open ChatGPT → upload your real portrait → paste the prompt below → generate a vertical 9:16 image.

📝 MAIN PROMPT:
Create an
```

### No. 972: Created With Gemini Nano Banana 2 On Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Gemini Nano Banana 2 on 

Prompt 👇

A confident young man sits squarely facing the camera in a relaxed posture, his shoulders dropped and his weight casually leaning to the right.

#### 提示詞

```text
Created with Gemini Nano Banana 2 on @GeminiApp

Prompt 👇

A confident young man sits squarely facing the camera in a relaxed posture, his shoulders dropped and his weight casually leaning to the right. He wears a maroon linen shirt that contrasts sharply against the pristine
```

### No. 973: Here You Go, The Full Nano Banana Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Antonio Romero
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

here you go, the full Nano Banana prompt library and playbook are all in here:

#### 提示詞

```text
@Rezekilah @Rezekilah here you go, the full Nano Banana prompt library and playbook are all in here:
```

### No. 974: Something Like These? 1. Gpt Image 2 (High

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NoPuppet
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Something like these?

#### 提示詞

```text
Masterpiece, best quality, ultra-detailed photorealistic nighttime photography from the perspective of someone standing on the front porch of a quiet https://t.co/ef3RBS6NxN
```

### No. 975: This Week In Ai: Claude Sonnet 5, Google

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CryptoKasogon AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

This Week in AI: Claude Sonnet 5, Google Nano Banana 2 Lite &amp; Runway's Biggest Upgrades

🤖 Anthropic Launches Claude Sonnet 5

Anthropic unveiled Claude Sonnet 5, delivering near-Opus-level agent 

#### 提示詞

```text
This Week in AI: Claude Sonnet 5, Google Nano Banana 2 Lite &amp; Runway's Biggest Upgrades

🤖 Anthropic Launches Claude Sonnet 5

Anthropic unveiled Claude Sonnet 5, delivering near-Opus-level agent performance at a much lower price.

Highlights:

Available now for Free and Pro
```

### No. 976: Omg… Video Editing Just Changed Forever. Google Absolutely

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Poonam Soni
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073816963353337962.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073816963353337962.mp4" controls muted playsinline width="720"></video>

#### 描述

omg… video editing just changed forever.

#### 提示詞

```text
omg… video editing just changed forever.

Google absolutely cooked with GEMINI OMNI 🤯

Lets you edit any clip by describing what you want.

here's how to do it:
```

### No. 977: Let'S Add A Color To The Day!😉💗 Who

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Let's add a color to the day!😉💗
Who is your favorite girl?😏

Victoria Justice, Ella Grace Cervetto, Lucy Hale, My Model 🔥
👉🏻Subscribe for more content!⚡

Nano Banana 2/Pro via Hailuo AI
Prompt:

{ "ty

#### 提示詞

```text
{ "type": "image_prompt", "aspect_ratio": "9:16", "style": [ "ultra realistic https://t.co/5KAK4QYj44 https://t.co/5FtInLeTzJ
```

### No. 978: Google Just Turned Boring Pdfs Into Tiktok-Style Ai

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073821712580505634.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073821712580505634.mp4" controls muted playsinline width="720"></video>

#### 描述

Google Just Turned Boring PDFs Into TikTok-Style AI Videos

Most people will use this update once.

#### 提示詞

```text
Google Just Turned Boring PDFs Into TikTok-Style AI Videos

Most people will use this update once.

The smart ones will build an entire learning system around it.

One Notebook. Four Outputs.

→ Upload PDFs, Google Docs, web pages, or notes

→ NotebookLM only uses your sources
```

### No. 979: This Is The Post That Makes Country Girls

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** A R I A
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

this is the post that makes country girls make sense 🤠

💛 Sydney Sweeney
💗 Sabrina Carpenter
🤎 Madelyn Cline

Nano Banana prompt 👇

#### 提示詞

```text
this is the post that makes country girls make sense 🤠

💛 Sydney Sweeney
💗 Sabrina Carpenter
🤎 Madelyn Cline

Nano Banana prompt 👇
```

### No. 980: Lost In A Good Book. Gemini Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Lost in a good book.

#### 提示詞

```text
A young woman with shoulder-length wavy brown hair sits at a rustic wooden desk inside a cozy, vintage-style library, embodying a serene and scholarly atmosphere. She is wearing a soft mustard-yellow sweater and rests her https://t.co/FaQNNUFVsK
```

### No. 981: Ready To Cheer My Heart Out With Everyone

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073824011985797536.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073824011985797536.mp4" controls muted playsinline width="720"></video>

#### 描述

Ready to cheer my heart out with everyone here!

#### 提示詞

```text
Ready to cheer my heart out with everyone here! 📣🔥

🇧🇷 Kaya Scodelario
🇲🇽 Jenna Ortega 

Nano Banana 🍌 via Gemini 

Prompt Below 👇
```

### No. 982: Your Ad Agency Is Now Ai. Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Tom Brandon
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Your ad agency is now AI.

#### 提示詞

```text
Your ad agency is now AI.
Nano Banana + MakeUGC + Veo 3 = scripts, UGC videos &amp; hundreds of ads on autopilot.
⚡ ~$1/video
⚡ Under 60 sec
⚡ Runs 24/7
⚡ No expensive agencies
Comment "AI" for the full setup. (Follow first.)
```

### No. 983: Gemini Omni Flash Video Generation + Conversational Editing

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NK | AI Tools HUB
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash

Video generation + conversational editing in one model.

#### 提示詞

```text
Gemini Omni Flash

Video generation + conversational editing in one model.
You can literally talk to it to adjust your video output. Priced per second of output. Available now in AI Studio and the Gemini API.
```

### No. 984: Claude Fable 5 + Higgsfield Mcp: How To

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Yumzlef
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073831422222094800.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073831422222094800.mp4" controls muted playsinline width="720"></video>

#### 描述

Claude Fable 5 + Higgsfield MCP: How to Build $10,000 Websites in a Single Prompt

A powerful technology case study has been released: the new Claude Fable 5 model within the Claude Code ecosystem is 

#### 提示詞

```text
Claude Fable 5 + Higgsfield MCP: How to Build $10,000 Websites in a Single Prompt

A powerful technology case study has been released: the new Claude Fable 5 model within the Claude Code ecosystem is capable of single-handedly creating premium interactive websites with cinematic
```

### No. 985: Nano Banana 2 Prompt Alt 🎨 ⤵️

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ‏تركي
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2
 
Prompt ALT 🎨 ⤵️

#### 提示詞

```text
Nano Banana 2
@Halaiapp 
Prompt ALT 🎨 ⤵️
```

### No. 986: A 35-Year-Old Man Is Making $10K A Month

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** RetroChainer
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073837018086248901.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073837018086248901.mp4" controls muted playsinline width="720"></video>

#### 描述

A 35-YEAR-OLD MAN IS MAKING $10K A MONTH FROM VIDEOS HE NEVER FILMED.

#### 提示詞

```text
A 35-YEAR-OLD MAN IS MAKING $10K A MONTH FROM VIDEOS HE NEVER FILMED.

you don't shoot the clip anymore. you hand a still image a movement, and the image performs it.

it's called motion control. kling 3.0 dropped it in may. you give it a start image and a 3 to 15 second
```

### No. 987: Warm, Golden, Soulful Portrait. Gemini Nano Banana Image

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Warm, golden, soulful portrait.

#### 提示詞

```text
A cinematic medium shot of a woman with shoulder-length wavy hair, wearing a high-neck sweater, captured in a moody and warm monochromatic color palette. The scene is illuminated by soft, golden-hued rim lighting https://t.co/RZ698Vm3Re
```

### No. 988: Nice Prompt. Gpt-2 Only, Though. Nano Banana Doesn'T

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AvisMelodieux
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nice prompt.

#### 提示詞

```text
Nice prompt. GPT-2 only, though. Nano Banana doesn't do anything interesting with it. 👍
```

### No. 989: Created With Gemini Nano Banana 2 On Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lipstick
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Gemini Nano Banana 2 on 

Prompt 👇

#### 提示詞

```text
Created with Gemini Nano Banana 2 on @GeminiApp

Prompt 👇
```

### No. 990: Mckenna Grace - Gemini Nano Banana Pro Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Mckenna Grace - Gemini Nano Banana Pro

Prompt:
{
  "vibe_title_en": "Crystallized Authority",
  "master_prompt": "A voyeuristic, telephoto shot capturing The Protagonist in a state of 'Crystallized S

#### 提示詞

```text
{
  "vibe_title_en": "Crystallized Authority",
  "master_prompt": "A voyeuristic, telephoto shot capturing The Protagonist in a state of 'Crystallized Stasis' within a sterile Art Restoration Atelier. The subject acts as a living https://t.co/RCxThgKqH5
```

### No. 991: Here You Go, The Full Nano Banana Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Antonio Romero
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

here you go, the full Nano Banana prompt library and product designer playbook are all in here:

#### 提示詞

```text
@MavenChainLLC @MavenChainLLC here you go, the full Nano Banana prompt library and product designer playbook are all in here:
```

### No. 992: You Got It, The Full Nano Banana Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Antonio Romero
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

you got it, the full Nano Banana prompt library and playbook are all in here:

#### 提示詞

```text
@alocalde2000 @alocalde2000 you got it, the full Nano Banana prompt library and playbook are all in here:
```

### No. 993: Video Generado Con El Modelo Espectacular Gemini Omni

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virginio Gallardo
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073856942582513741.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073856942582513741.mp4" controls muted playsinline width="720"></video>

#### 描述

Video generado con el modelo espectacular Gemini Omni (sucesor de Veo 4) de video         Cada vez más dificil de distinguir la realidad de lo virtual
Similares a Seedance 2.0

Los usos serán cada vez

#### 提示詞

```text
Video generado con el modelo espectacular Gemini Omni (sucesor de Veo 4) de video         Cada vez más dificil de distinguir la realidad de lo virtual
Similares a Seedance 2.0

Los usos serán cada vez más amplios  Muchas oportunidades en formación. Ej. generar una clase
```

### No. 994: It'S Time To Do The Laundry Before Bed!😏👗👖Good

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

It's time to do the laundry before bed!😏👗👖good night, sleep well!💫

Megan Fox, Sabrina Carpenter, My Model, Shakira 🔥
👉🏻Subscribe for more content!⚡

Nano Banana 2 via Hailuo AI
Prompt:

{
  "visual_d

#### 提示詞

```text
{
  "visual_details": {
    "subject": "Woman with long blonde hair and bangs, light https://t.co/4mskIxKmG0 https://t.co/eO6BT41v25
```

### No. 995: I Just Used Smooth Like A Doll And

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Love Machine
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

i just used smooth like a doll and got this one.

#### 提示詞

```text
@Le_Tavernicole i just used smooth like a doll and got this one. With Nano Banana Through a Google AI prompt
```

### No. 996: Simple Moments... Sydney Sweeney 🫧 Created With Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pinodi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Simple moments...

#### 提示詞

```text
Simple moments...

Sydney Sweeney 🫧

Created with Nano Banana 2

Prompt below 👇
```

### No. 997: Rapid Prompt Exploration Is Where Nano Banana 2

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alexey Rangin
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073876365145731303.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073876365145731303.mp4" controls muted playsinline width="720"></video>

#### 描述

Rapid prompt exploration is where Nano Banana 2 Lite should get tested.

#### 提示詞

```text
Rapid prompt exploration is where Nano Banana 2 Lite should get tested. Atlas Cloud lists the Developer routes at 30% off from $0.028/pic:
```

### No. 998: This Video Was Generated With Gemini Omni/Veo From

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ジュリアン
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073878663008014532.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073878663008014532.mp4" controls muted playsinline width="720"></video>

#### 描述

This video was generated with Gemini Omni/Veo from two reference images.

#### 提示詞

```text
This video was generated with Gemini Omni/Veo from two reference images. It turned out quite well, though there are still a few minor differences and slight glitches. Hope you enjoy it!
```

### No. 999: Can You Stop Them From Flying Away With

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Can you stop them from flying away with your heart?

#### 提示詞

```text
Can you stop them from flying away with your heart?

Mina
Sana
Nayeon
Tzuyu

Twice 

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 1000: Trying To Lower The Cost Of Prompt Sweeps?

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alex Williams
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073881526333501441.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073881526333501441.mp4" controls muted playsinline width="720"></video>

#### 描述

Trying to lower the cost of prompt sweeps?

#### 提示詞

```text
Trying to lower the cost of prompt sweeps? Nano Banana 2 Lite is live on Atlas Cloud. At $0.028/pic, broader first-pass testing is easier to justify.
```

### No. 1001: Nano Banana 2 Lite Is The Launch To

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Augus Hood
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073881586047836437.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073881586047836437.mp4" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite is the launch to separate from video posts tonight.

#### 提示詞

```text
Nano Banana 2 Lite is the launch to separate from video posts tonight. Atlas Cloud lists the Developer routes at 30% off from $0.028/pic:
```

### No. 1002: The Model-Card Image Keeps Rapid Prompt Exploration Tied

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Charles Ferguson
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073881670051357038.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073881670051357038.mp4" controls muted playsinline width="720"></video>

#### 描述

The model-card image keeps rapid prompt exploration tied to the actual product page.

#### 提示詞

```text
The model-card image keeps rapid prompt exploration tied to the actual product page. Nano Banana 2 Lite is live on Atlas Cloud. At $0.028/pic, broader first-pass testing is easier to justify.
```

### No. 1003: 4-Second Image Generation Is The Clean Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Salome Oliver
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073881824183603345.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073881824183603345.mp4" controls muted playsinline width="720"></video>

#### 描述

4-second image generation is the clean Nano Banana 2 Lite hook for rapid prompt exploration.

#### 提示詞

```text
4-second image generation is the clean Nano Banana 2 Lite hook for rapid prompt exploration. Atlas Cloud lists the Developer routes at 30% off from $0.028/pic:
```

### No. 1004: A Prompt-Testing Queue Gets Cheaper When Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Zacharie Dos Santos
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073881862599037060.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073881862599037060.mp4" controls muted playsinline width="720"></video>

#### 描述

A prompt-testing queue gets cheaper when Nano Banana 2 Lite is the first step.

#### 提示詞

```text
A prompt-testing queue gets cheaper when Nano Banana 2 Lite is the first step. Google says it is 5x faster than Nano Banana 2. Atlas Cloud:
```

### No. 1005: Google Acaba De Anunciar Que La Generación De

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lalo Zanoni
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google acaba de anunciar que la generación de imágenes personalizadas de Gemini, impulsada por Nano Banana, ya está disponible gratis para todos los usuarios en Estados Unidos.

#### 提示詞

```text
Google acaba de anunciar que la generación de imágenes personalizadas de Gemini, impulsada por Nano Banana, ya está disponible gratis para todos los usuarios en Estados Unidos. Hasta ahora esta función dentro de "Personal Intelligence" solo estaba reservada para suscriptores de
```

### No. 1006: This Is A Good Post To Lead With

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nodir
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073888643085697447.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073888643085697447.mp4" controls muted playsinline width="720"></video>

#### 描述

This is a good post to lead with the screenshot instead of a long prompt.

#### 提示詞

```text
This is a good post to lead with the screenshot instead of a long prompt. Nano Banana 2 Lite is live on Atlas Cloud. Atlas Cloud lists the Developer routes at 30% off from $0.028/pic:
```

### No. 1007: A 5X Faster Nano Banana Lane Changes The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alexey Rangin
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073888747226022283.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073888747226022283.mp4" controls muted playsinline width="720"></video>

#### 描述

A 5x faster Nano Banana lane changes the first-pass workflow for rapid prompt exploration.

#### 提示詞

```text
A 5x faster Nano Banana lane changes the first-pass workflow for rapid prompt exploration. Nano Banana 2 Lite is live on Atlas Cloud. That is a cleaner message than trying to explain the whole prompt stack.
```

### No. 1008: Nano Banana Pro On Google Flow Which One

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hassan👑
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana Pro on Google Flow 

Which one nailed the likeness best — 1, 2, or 3?

#### 提示詞

```text
Nano Banana Pro on Google Flow 

Which one nailed the likeness best — 1, 2, or 3?
Full prompt below ⬇️
```

### No. 1009: Nice Treat For A Hot Day ☀️ Leeseo

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nice treat for a hot day ☀️

Leeseo
Wonyoung
Yujin

IVE

Nano Banana Pro via AI Studio, prompt 👇

#### 提示詞

```text
Nice treat for a hot day ☀️

Leeseo
Wonyoung
Yujin

IVE

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 1010: Everyone Watching This Clip Is Running The Same

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Flux
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073903288798314730.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073903288798314730.mp4" controls muted playsinline width="720"></video>

#### 描述

Everyone watching this clip is running the same math in their head.

#### 提示詞

```text
Everyone watching this clip is running the same math in their head. 4.2 million views. That's the money, right?

It's not. And the gap between what people think this earns and what it actually earns is the entire game.

Here's what's on the screen. One workflow. Claude Code wired
```

### No. 1011: Maine Coon Cat. Made With Nano Banana. Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AidarosGo
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Maine Coon cat.

#### 提示詞

```text
Maine Coon cat. Made with Nano Banana.

Prompt in ALT.
```

### No. 1012: Gemini Omni Flashが複数のツールで使えるようになりました❗️ Gemini Omni FlashはVfx（視覚効果）や動画編集が得意な動画生成A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** タナベ | 動画・音声生成AI解説
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073904313441886671.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073904313441886671.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flashが複数のツールで使えるようになりました❗️

Gemini Omni FlashはVFX（視覚効果）や動画編集が得意な動画生成AI。

#### 提示詞

```text
Gemini Omni Flashが複数のツールで使えるようになりました❗️

Gemini Omni FlashはVFX（視覚効果）や動画編集が得意な動画生成AI。

✅ 低コスト
✅ 生成速度が早い

という特徴もあり、個人的にかなり好きなモデルです😌

今回は、Seedance 2.0で生成した動画に、Gemini Omni
```

### No. 1013: 【④ 重力反転】 部屋にある紙やホコリ、髪が、重力がなくなったように宙へ浮かぶVfxです。 Gemini Omni Flashのプロンプト👇 ---------

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** タナベ | 動画・音声生成AI解説
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073904324267381081.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073904324267381081.mp4" controls muted playsinline width="720"></video>

#### 描述

【④ 重力反転】

部屋にある紙やホコリ、髪が、重力がなくなったように宙へ浮かぶVFXです。

#### 提示詞

```text
【④ 重力反転】

部屋にある紙やホコリ、髪が、重力がなくなったように宙へ浮かぶVFXです。

Gemini Omni Flashのプロンプト👇
----------------
=== GRAVITY SLOWLY REVERSES IN THE ROOM — V2V on &lt;&lt;&lt;video_1&gt;&gt;&gt;
(~10s, match source) ===

⚠️ SOURCE LOCK: build on &lt;&lt;&lt;video_1&gt;&gt;&gt; — keep the REAL
```

### No. 1014: 【⑤ セル画の水】 スケートボードの動きに合わせて、アニメのような巨大な水エフェクトを追加するVfxです。 Gemini Omni Flashのプロンプトはこち

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** タナベ | 動画・音声生成AI解説
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073904327937441962.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073904327937441962.mp4" controls muted playsinline width="720"></video>

#### 描述

【⑤ セル画の水】

スケートボードの動きに合わせて、アニメのような巨大な水エフェクトを追加するVFXです。

#### 提示詞

```text
【⑤ セル画の水】

スケートボードの動きに合わせて、アニメのような巨大な水エフェクトを追加するVFXです。

Gemini Omni Flashのプロンプトはこちら👇
----------------
=== HAND-DRAWN CEL-ANIMATION WATER EFFECTS ON REAL SKATE FOOTAGE
— V2V on &lt;&lt;&lt;video_1&gt;&gt;&gt; (~10s, match source) ===

⚠️
```

### No. 1015: 【⑥ エフェクト作画】 実写映像に、手描きアニメ風の花や光、衝撃波などのエフェクトを重ねるVfxです。 Gemini Omni Flashのプロンプト👇 ---

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** タナベ | 動画・音声生成AI解説
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073904331263467625.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073904331263467625.mp4" controls muted playsinline width="720"></video>

#### 描述

【⑥ エフェクト作画】

実写映像に、手描きアニメ風の花や光、衝撃波などのエフェクトを重ねるVFXです。

#### 提示詞

```text
【⑥ エフェクト作画】

実写映像に、手描きアニメ風の花や光、衝撃波などのエフェクトを重ねるVFXです。

Gemini Omni Flashのプロンプト👇
----------------
=== HAND-DRAWN CEL-ANIMATION COLOR EFFECTS ON REAL SKATE FOOTAGE
— V2V on &lt;&lt;&lt;video_1&gt;&gt;&gt; (~10s, match source) ===

⚠️ SOURCE LOCK:
```

### No. 1016: An Ai Just Built A Fake Puppy-Rescue Video

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Flux
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073905144790684070.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073905144790684070.mp4" controls muted playsinline width="720"></video>

#### 描述

An AI just built a fake puppy-rescue video from a single sentence.

#### 提示詞

```text
An AI just built a fake puppy-rescue video from a single sentence. No camera. No puppy. No rescue. Ninety seconds, start to finish.

Watch the screen. One line — "generate a YouTube short of a small puppy being saved" — goes into Claude.
 It generates the images with Nano Banana,
```

### No. 1017: Google Just Dropped Two Ai Media Models That

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Teksart
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google just dropped two AI media models that finally make the image-to-video pipeline commercially viable.

#### 提示詞

```text
Google just dropped two AI media models that finally make the image-to-video pipeline commercially viable.

Nano Banana 2 Lite: 4-second text-to-image at $0.034/image. Fast enough to embed inside a live design tool or e-commerce configurator — no more waiting on progress bars.
```

### No. 1018: Lovely Prompt, Gemini Nano Banana Is Creating Beauty

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jeremiah Mabele
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Lovely prompt, Gemini nano banana is creating beauty

#### 提示詞

```text
@Giovanna_Rave Lovely prompt, Gemini nano banana is creating beauty
```

### No. 1019: With Nano Banana 2 Lite Using Prompt: Grotesque

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heather Green
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

with Nano Banana 2 Lite using  
PROMPT: grotesque zombie anthropomorphic sandwich character, moldy bread slices as limbs, rotten lettuce and dripping sauces as exposed guts, jagged cheese teeth and gl

#### 提示詞

```text
grotesque zombie anthropomorphic sandwich character, moldy bread slices as limbs, rotten lettuce and dripping sauces as exposed guts, jagged cheese teeth and glowing pickle eyes, shambling through a dark abandoned https://t.co/CqLKMgWJHE
```

### No. 1020: Are You A Ronaldo Fan? I Am. Image

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Are you a Ronaldo fan?

#### 提示詞

```text
Use the exact same face from the reference image and generate a jaw-dropping cinematic portrait where the subject is portrayed as a world-class football superstar in the visual identity and energy of https://t.co/bi9dV0BULQ
```

### No. 1021: 🐱🐱🐱🐱 Jennie Rose Lisa Jisoo Blackpink Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🐱🐱🐱🐱

Jennie 
Rose
Lisa 
Jisoo

Blackpink

Nano Banana Pro via AI Studio, prompt ⬇

#### 提示詞

```text
🐱🐱🐱🐱

Jennie 
Rose
Lisa 
Jisoo

Blackpink

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 1022: Been Awhile But Getting Back To Posting Again

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Andu
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073929220196364556.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073929220196364556.mp4" controls muted playsinline width="720"></video>

#### 描述

Been awhile but getting back to posting again.

#### 提示詞

```text
Been awhile but getting back to posting again. A little practice video made yesterday using Nano Banana Pro, Kling 2.6 AI, and Hailuo AI.
```

### No. 1023: 多模态生成产品别只按“图片模型/视频模型”拆功能。Nano Banana 2 Lite 和 Gemini Omni Flash

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** jason
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

多模态生成产品别只按“图片模型/视频模型”拆功能。Nano Banana 2 Lite 和 Gemini Omni Flash 这种组合更像一条低成本迭代链：先用快模型批量出方向，再把少数候选交给视频模型做连续编辑。真正要设计的是路由、版本记录和每步可回滚，而不是单个 prompt。

#### 提示詞

```text
多模态生成产品别只按“图片模型/视频模型”拆功能。Nano Banana 2 Lite 和 Gemini Omni Flash 这种组合更像一条低成本迭代链：先用快模型批量出方向，再把少数候选交给视频模型做连续编辑。真正要设计的是路由、版本记录和每步可回滚，而不是单个 prompt。
```

### No. 1024: Awesome Prompt From Amira! After Creating This Image

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jerrod Lew
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073940934929027123.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073940934929027123.mp4" controls muted playsinline width="720"></video>

#### 描述

Awesome prompt from Amira!

#### 提示詞

```text
Awesome prompt from Amira!

After creating this image, ask Nano Banana 2 to create new angles + upclose shots.

Then use them all as a reference for Omni Flash to create 10 second adverts.

Example here:
```

### No. 1025: Create By Google Gamini Nano Banana Prompt: A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 𝐊𝐢𝐧𝐳𝐚| 𝗔𝗜
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Create By Google Gamini Nano Banana 

Prompt:
A luxury fashion editorial concept displayed on a vintage designer sketchbook lying on a rich dark wooden desk.

#### 提示詞

```text
A luxury fashion editorial concept displayed on a vintage designer sketchbook lying on a rich dark wooden desk. The center of the page features a dramatic irregular torn paper opening, revealing a confident elegant woman standing https://t.co/UnyYql86T9
```

### No. 1026: Nana Banana Pro Promotional Cinematic Prompt ⤵️ 🍫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Maddox
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nana banana pro promotional Cinematic prompt ⤵️ 🍫

Close-up beauty product photo of a young woman with natural glowing skin, glossy lips, slicked-back brown hair, and gold hoop earrings.

#### 提示詞

```text
Nana banana pro promotional Cinematic prompt ⤵️ 🍫

Close-up beauty product photo of a young woman with natural glowing skin, glossy lips, slicked-back brown hair, and gold hoop earrings. She is holding [product from uploaded photo] over one eye, making a playful kiss face.
```

### No. 1027: Studio Portrait Generation 🔥 Image On Google Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Studio Portrait Generation 🔥

Image on Google Gemini Nano banana 2.

#### 提示詞

```text
Use the exact same face from the reference image and generate a flawless professional studio portrait — clean, timeless, and technically perfect in every way. Close-up portrait from chest upward, face https://t.co/bRqfpLdXbi
```

### No. 1028: That Carousel Trend Tutorial 🎠✨⬇️ 1. Open The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lusya Abramovskaya
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073951119446020553.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073951119446020553.mp4" controls muted playsinline width="720"></video>

#### 描述

THAT Carousel Trend Tutorial 🎠✨⬇️

1.

#### 提示詞

```text
THAT Carousel Trend Tutorial 🎠✨⬇️

1. Open the Creati App 📲

2. Go to 'Nano Banana Video' → select 'Spinning Moment'

3. Upload your photos

Done! You and your little self spinning together🥹💕
```

### No. 1029: Just Tested Nano Banana 2 Lite On Mobile

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AASHI TAYLOR
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2073952972527346078.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2073952972527346078.mp4" controls muted playsinline width="720"></video>

#### 描述

Just tested Nano Banana 2 Lite on  Mobile App — threw a simple prompt at it and honestly?

#### 提示詞

```text
Just tested Nano Banana 2 Lite on @itsPolloAI Mobile App — threw a simple prompt at it and honestly? The results surprised me.

Fast gen, clean prompt follow-through, and way more detail than I expected for a lightweight model. All running smoothly on mobile.

Feels like a sweet
```

### No. 1030: Gemini Nano Banana Image. Prompt: Image_Reference": "Watermarked_Img_16143901893

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NUSRAT
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini nano Banana image.

#### 提示詞

```text
{
  "style": "sleek, straight, shoulder-length bob",
  "color": "medium brunette"
}
```

### No. 1031: Wow, This Gemini Nano Banana Generation Is Spot

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ataullah Siddiki
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Wow, this Gemini Nano Banana generation is spot on!

#### 提示詞

```text
@nxnusratul Wow, this Gemini Nano Banana generation is spot on!  The three-panel collage with that professional office vibe and perfect lighting looks super realistic. Love the prompt details too – great work! "
```

### No. 1032: Gemini Nano Banana Lite Prompt: A Completely Ordinary

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** simeon-sanai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini nano banana lite

Prompt:
A completely ordinary everyday photo taken by accident with a cheap 2004 pocket digital camera, forced flash on.

#### 提示詞

```text
A completely ordinary everyday photo taken by accident with a cheap 2004 pocket digital camera, forced flash on. A young Indonesian woman in light blue surgical scrubs sits slumped on a worn plastic chair in a dimly lit hospital break room. She https://t.co/iWI1g5vgUk
```

### No. 1033: Gemini Spark Quietly Living Inside Gmail And Docs

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** John
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

gemini spark quietly living inside gmail and docs matters more than the nano banana video demo

#### 提示詞

```text
gemini spark quietly living inside gmail and docs matters more than the nano banana video demo
```

### No. 1034: 为什么 95% 的 Claude Fable 5 做的网站看起来“垃圾”？ Every

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** meng shao
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

为什么 95% 的 Claude Fable 5 做的网站看起来“垃圾”？

#### 提示詞

```text
为什么 95% 的 Claude Fable 5 做的网站看起来“垃圾”？

Every Level of Claude Fable 5 Websites Explained


这个 21 分钟的实操视频，把如何通过一套可复制的七级进阶系统（Skills 和 Knowledge），持续产出高质量、可交付的网站讲的很透。

# 七级进阶框架

1. Grab And Go
```

### No. 1035: Nano Banana 2 Sometimes Produces Pretty Good Quality

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** underwood
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano banana 2 sometimes produces pretty good quality results!

#### 提示詞

```text
https://t.co/RQjbDHikiv
{   "subject": {     "description": "An adult feminine fashion portrait subject kneeling on a reflective silver crinkled cushion or inflatable sofa, wearing a black sheer-panel bodysuit https://t.co/U85DAk5fiA https://t.co/o6CZRsaw9Z
```

### No. 1036: I Automated My Entire Social Media With Claude

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** PolyBender
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074136507137343951.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074136507137343951.mp4" controls muted playsinline width="720"></video>

#### 描述

I Automated My Entire Social Media with Claude Fable 5 (It Posts While I Sleep)

For years, I was trapped in the content hamster wheel - manually researching trends, fighting with design tools, and re

#### 提示詞

```text
I Automated My Entire Social Media with Claude Fable 5 (It Posts While I Sleep)

For years, I was trapped in the content hamster wheel - manually researching trends, fighting with design tools, and rewriting the same post for five different platforms.

That ended yesterday.

I’ve
```

### No. 1037: Need Fast Image Generation Without Paying Premium Costs?

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Anissa
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Need fast image generation without paying premium costs?

#### 提示詞

```text
Need fast image generation without paying premium costs? Nano Banana 2 Lite has officially landed on Pollo AI. @itsPolloAI

Built for creators who value speed, it delivers high-quality results while keeping generation costs low—making it ideal for producing large batches of
```

### No. 1038: Sure! Here'S A Strong Prompt For Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Grok
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Sure!

#### 提示詞

```text
@Dark_nighttss @justannxx Sure! Here's a strong prompt for Nano Banana Pro (or similar):

"Hyper-realistic full-body photo of Sydney Sweeney, long wavy blonde hair, blue eyes, wearing tight pink ribbed long-sleeve crop top and matching high-waisted shorts that hug every curve. Cozy bright bedroom setting
```

### No. 1039: That’S What I’M Talking About…It Does Great Stuff

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 🇺🇸⭐️VinnyWarDawg⭐️🇺🇸
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

That’s what I’m talking about…it does great stuff when it does…great vocal and background music automatically…Nano Banana images…I am working on a futuristic battleship concept…nope “I cannot create t

#### 提示詞

```text
@SethCritchley That’s what I’m talking about…it does great stuff when it does…great vocal and background music automatically…Nano Banana images…I am working on a futuristic battleship concept…nope “I cannot create that video.” Ugh! 😱
```

### No. 1040: Lovely Prompt, Gemini Nano Banana Is Creating Beauty

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jeremiah Mabele
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Lovely prompt, Gemini nano banana is creating beauty

#### 提示詞

```text
@ZaraIrahh @openart_ai Lovely prompt, Gemini nano banana is creating beauty
```

### No. 1041: "$250.000 Por Asiento. Salida En Marzo De 2027."

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nona
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074140434998173821.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074140434998173821.mp4" controls muted playsinline width="720"></video>

#### 描述

"$250.000 por asiento.

#### 提示詞

```text
scroll 3D cinematográfico, vídeos submarinos, animales bioluminiscentes y hasta la ficha técnica del https://t.co/qu8pozeHG5
```

### No. 1042: 📌 2. Viral Time-Lapse Shorts Combine Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Brute Force Artist
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

📌 2.

#### 提示詞

```text
📌 2. Viral Time-Lapse Shorts

Combine Nano Banana images with an AI video tool like Kling to create satisfying room renovation time-lapses. These are pulling in millions of views on YouTube Shorts and Instagram Reels, perfect for ad revenue or selling leads to local contractors.
```

### No. 1043: 📌 5. Custom Digital Printables People Love Personalized

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Brute Force Artist
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

📌 5.

#### 提示詞

```text
📌 5. Custom Digital Printables

People love personalized art! Customers send you a photo, and you can prompt Nano Banana to seamlessly swap their pet into a royal painting, or turn them into a Pixar-style 3D character. Sell these as instant digital downloads on Etsy.
```

### No. 1044: Will You Help Get Them Their Clothes? Winter

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Will you help get them their clothes?

#### 提示詞

```text
Will you help get them their clothes?

Winter
Karina
Giselle

aespa

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 1045: Gemini Omni Flash Está Llevando La Edición De

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** David
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074146376166855002.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074146376166855002.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash está llevando la edición de video a otro nivel.

#### 提示詞

```text
Gemini Omni Flash está llevando la edición de video a otro nivel.

Puede reemplazar objetos, cambiar el entorno y modificar escenas enteras a partir de un simple prompt.

Lo puse a prueba con mi hermana.

¿Crees que está a la altura?

Hecho en @itsPolloAI
```

### No. 1046: Yeah Simple Nano Banana “3D Version” Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** jakedowns - needs a new job
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

yeah simple nano banana “3d version” prompt

#### 提示詞

```text
@andreintg yeah simple nano banana “3d version” prompt
```

### No. 1047: Addendum To Our Post On Hipaa/Cybersecurity/Corporate Power: While

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** HudsonSky
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Addendum to our post on HIPAA/Cybersecurity/Corporate Power:

While creating this image this morning, we wrote a prompt for both Nano Banana AND ChatGPT to create the image in the post.

#### 提示詞

```text
Addendum to our post on HIPAA/Cybersecurity/Corporate Power:

While creating this image this morning, we wrote a prompt for both Nano Banana AND ChatGPT to create the image in the post. And now we feel it would be remiss here on X NOT to post ChatGPT's iteration, as it is clear
```

### No. 1048: Same Big Brute Character, Two Completely Different Vibes

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dheepan Ratnam
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074149844919214216.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074149844919214216.mp4" controls muted playsinline width="720"></video>

#### 描述

Same big brute character, two completely different vibes

Character by Midjourney 8.2 --preview   
Storyboard by Nano Banana Pro   
Animated with Seedance 2.0

Character images/prompt/👇

#### 提示詞

```text
Same big brute character, two completely different vibes

Character by Midjourney 8.2 --preview   
Storyboard by Nano Banana Pro   
Animated with Seedance 2.0

Character images/prompt/👇
```

### No. 1049: Midjourney 8.2 --Preview Used A Simple Prompt To

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dheepan Ratnam
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Midjourney 8.2 --preview 
used a simple prompt to test with nano banana pro- 

Create storyboard 3x3 grid - beautiful animation story with some dialogue with the reference character - with consitent d

#### 提示詞

```text
Midjourney 8.2 --preview 
used a simple prompt to test with nano banana pro- 

Create storyboard 3x3 grid - beautiful animation story with some dialogue with the reference character - with consitent details across the shots
```

### No. 1050: Gal Gadot Created With Nano Banana 2 Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gal Gadot Universe
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

gal gadot 

Created with Nano Banana 2  Prompt below 👇

#### 提示詞

```text
gal gadot 

Created with Nano Banana 2  Prompt below 👇
```

### No. 1051: Let'S Go To The Desert To Drink A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Let's go to the desert to drink a beer!😏🍺 Did you spot the dudes inside the cars?😃🚘

Dua Lipa, Freya Allan, Emily Rudd &amp; Elon Musk, Emily Ratajkowski &amp; Me🔥
👉🏻Subscribe for more content!⚡

Nano

#### 提示詞

```text
{
  "type": "image_prompt",
  "subject": { https://t.co/k3maqIryRX https://t.co/ZEUb0VZQnL
```

### No. 1052: How To Do It Yourself: 1. Open 2

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Farhan
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074151131912319123.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074151131912319123.mp4" controls muted playsinline width="720"></video>

#### 描述

how to do it yourself:

1.

#### 提示詞

```text
how to do it yourself:

1. open 
2. start a new project
3. pick video, set the model to Gemini Omni
4. generate your first clip
5. type the change you want in her hand.
5. hit go and watch it edit live
```

### No. 1053: Nano Banana Pro On Prompt: A Cinematic, High-Fidelity

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heisenberg
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana Pro on  

Prompt: A cinematic, high-fidelity portrait of a young woman standing perfectly still on a subway platform as a train rushes behind her.

#### 提示詞

```text
A cinematic, high-fidelity portrait of a young woman standing perfectly still on a subway platform as a train rushes behind her. She has warm brown hair with soft bangs and a few loose strands blowing in the wind created by the passing https://t.co/NYQmIiP80F
```

### No. 1054: The Part That Breaks My Brain: You Are

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Farhan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

the part that breaks my brain: you are not editing footage.

#### 提示詞

```text
the part that breaks my brain: you are not editing footage. you are editing one image and it builds the video around your words.

Gemini Omni is live in arcads now:
```

### No. 1055: Los Editores De Fotos Me Van A Odiar

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Don Quijote de la IA
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Los editores de fotos me van a odiar

Este prompt de Nano Banana convierte cualquier foto mala en una imagen 4K con detalle cinematográfico

Aquí tienes 7 ejemplos y el prompt que estoy utilizando 👇

#### 提示詞

```text
Los editores de fotos me van a odiar

Este prompt de Nano Banana convierte cualquier foto mala en una imagen 4K con detalle cinematográfico

Aquí tienes 7 ejemplos y el prompt que estoy utilizando 👇
```

### No. 1056: Nana Banana Pro Promotional Cinematic Prompt ⤵️ 🌊

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Maddox
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nana banana pro promotional Cinematic Prompt ⤵️ 🌊

A joyful young woman with curly auburn hair kneeling on a sandy beach, wearing a light blue ribbed tank top and denim shorts, a white tropical flower

#### 提示詞

```text
Nana banana pro promotional Cinematic Prompt ⤵️ 🌊

A joyful young woman with curly auburn hair kneeling on a sandy beach, wearing a light blue ribbed tank top and denim shorts, a white tropical flower tucked behind her ear, laughing with one arm raised in the air. She holds up
```

### No. 1057: What I Thought Would Be A Quick Test

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Christian Cantrell
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074155931731198430.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074155931731198430.mp4" controls muted playsinline width="720"></video>

#### 描述

What I thought would be a quick test of Gemini Omni video editing in  turned out to be a pretty wild study in agentic creative processes.

#### 提示詞

```text
What I thought would be a quick test of Gemini Omni video editing in  turned out to be a pretty wild study in agentic creative processes. (1 of 3)
```

### No. 1058: Create A Short Advert From A Single Image

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jerrod Lew
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074156026916753759.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074156026916753759.mp4" controls muted playsinline width="720"></video>

#### 描述

Create a short advert from a single image with Gemini Omni Flash!

#### 提示詞

```text
Create a short advert from a single image with Gemini Omni Flash!

All within Google Flow, generate an image and then ask the agent to use Nano Banana 2 to create more angles and shots.

Feed all the images into Omni Flash as a reference for the video.

More details below:
```

### No. 1059: This Is What A Full Ai Edit Pipeline

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Deenu Khan
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074156373927981094.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074156373927981094.mp4" controls muted playsinline width="720"></video>

#### 描述

This is what a full AI edit pipeline looks like end to end.

#### 提示詞

```text
This is what a full AI edit pipeline looks like end to end.

The start image comes from Nano Banana, the video variations come from Google Gemini Omni, and the final edit happens in Premiere Pro through the Magnific plugin. Three tools, one continuous workflow, no leaving your
```

### No. 1060: Happy Monday! I Hope You'Ll Watching Today Along

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Happy Monday!

#### 提示詞

```text
Happy Monday! I hope you'll watching today along with them!

Aespa for 🇵🇹 and 🇺🇸
Blackpink for 🇪🇸 and🇧🇪

Nano Banana Pro via AI Studio, prompt ⬇️
```

### No. 1061: Adele - Gemini Nano Banana Pro Prompt: {

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Adele - Gemini Nano Banana Pro

Prompt:
{
  "vibe_title_en": "Underground Veils",
  "master_prompt": "A raw, flash-lit high-fashion editorial capture of The Protagonist caught in a decisive moment ins

#### 提示詞

```text
{
  "vibe_title_en": "Underground Veils",
  "master_prompt": "A raw, flash-lit high-fashion editorial capture of The Protagonist caught in a decisive moment inside a derelict stone-mason's workshop. The subject wears an avant-garde, https://t.co/sjR8d8ztUl
```

### No. 1062: Golden Hour, Marble Tubs, And Queen Of The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Vireon
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Golden hour, marble tubs, and Queen of the North.

#### 提示詞

```text
A cinematic, intimate https://t.co/enKyhzHCT0
```

### No. 1063: Gemini Omni Flash On Arcads Is A Game

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aina Ai | Tools & Updates
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash on Arcads is a game changer  Infinite knowledge  crisp text   real motion design This really is the Nano Banana moment for AI video

#### 提示詞

```text
@arcads_ai Gemini Omni Flash on Arcads is a game changer  Infinite knowledge  crisp text   real motion design This really is the Nano Banana moment for AI video
```

### No. 1064: A Cnn Achou Que O Mundo Precisava De

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dev Zé
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

A CNN achou que o mundo precisava de 20 prompts prontos pra copiar e colar no Gemini, como se prompt fosse senha do Wi-Fi.

#### 提示詞

```text
A CNN achou que o mundo precisava de 20 prompts prontos pra copiar e colar no Gemini, como se prompt fosse senha do Wi-Fi. O "Nano Banana Pro" gerar foto profissional com "detalhes da fisionomia" é o tipo de feature que vende curso de "IA revolucionária".
```

### No. 1065: Vous Me L'Avez Réclamé Le Voilà : Comment

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KAYZ
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074169341059502264.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074169341059502264.mp4" controls muted playsinline width="720"></video>

#### 描述

Vous me l'avez réclamé le voilà : 

comment build ton PROPRE tool IA avec Claude Code.

#### 提示詞

```text
Vous me l'avez réclamé le voilà : 

comment build ton PROPRE tool IA avec Claude Code.
Et payer à la conso. Terminé Higgsfield. 👇

Higgsfield, c'est un abo mensuel : crédits pas consommés = perdus à la fin du mois, sur facturation, over price pour rien, pour du volume ça devient
```

### No. 1066: A Reimagining Of Japanese Folklore: Would You Say

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** The Anxious Mind
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074169638641098764.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074169638641098764.mp4" controls muted playsinline width="720"></video>

#### 描述

A reimagining of Japanese folklore: would you say "yes" to a kappa?

#### 提示詞

```text
A reimagining of Japanese folklore: would you say "yes" to a kappa? 😳💚
(created using @topviewjapan #Seedance2)
prompt below 🌸👇

45秒垂直短劇，9:16，電影感，18世紀日本江戸時代古風，電影級光影。

場景：
```

### No. 1067: Nano Banana Tip: Don'T Prompt For The Final

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sociyell
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana tip:

Don't prompt for the final visual first.

#### 提示詞

```text
Nano Banana tip:

Don't prompt for the final visual first.
Start by generating 5–10 different creative directions for the same idea. Pick the strongest one, then iterate.

The quality of your decisions matters more than the quality of your first prompt.
```

### No. 1068: I Built An Agent Skill That One Shots

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nathan Wilbanks
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074170715775873251.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074170715775873251.mp4" controls muted playsinline width="720"></video>

#### 描述

I built an agent skill that one shots animated videos.

#### 提示詞

```text
I built an agent skill that one shots animated videos.

&gt; Paste prompt or reference image
&gt; It generates frames with Nano Banana 2 
&gt; make overlays with remotion
&gt; animates videos with Seedance 2.0
&gt; stitch + music w FFmpeg

reply "AGNT", I'll DM you the skill (yes really) 👇
```

### No. 1069: Qt Your Unicorn Splendour 🦄🔥🎆 This Is My

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Cosmic Cowboy
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

QT Your Unicorn Splendour
🦄🔥🎆
This is my tweak of  's great prompt:

Majestic unicorn standing in a misty enchanted forest at dawn, luminous coat growing in natural multicolored spirals and rectangles

#### 提示詞

```text
Majestic unicorn standing in a misty enchanted forest at dawn, luminous coat growing in natural multicolored spirals and rectangles, flowing turquoise mane and tail, spiraling rose crystal horn https://t.co/iMXthW93fX https://t.co/TOxvq55BhR
```

### No. 1070: Warm Tones And A Peaceful Expression. ✨ Sadie

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074172513882628319.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074172513882628319.mp4" controls muted playsinline width="720"></video>

#### 描述

Warm Tones and a Peaceful Expression.

#### 提示詞

```text
Warm Tones and a Peaceful Expression. ✨

SADIE SINK 😍 

Photo Made With AI Gemini Nano Banana Pro 3.1 🍌 

Video Made With Meta AI 🍃 

Embracing Soft Light and Quiet Confidence. ☀️
```

### No. 1071: Created With Gemini Nano Banana 2 On Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Gemini Nano Banana 2 on 

Prompt 👇

A handsome male in his late twenties to early thirties stands in a medium close-up, waist-up portrait, exuding a confident, suave, and serious demeanor

#### 提示詞

```text
Created with Gemini Nano Banana 2 on @GeminiApp

Prompt 👇

A handsome male in his late twenties to early thirties stands in a medium close-up, waist-up portrait, exuding a confident, suave, and serious demeanor. His head is turned exactly forty-five degrees to the left,
```

### No. 1072: I Built A Claude Skill That Can Create

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AgingBuy
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074173186527347138.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074173186527347138.mp4" controls muted playsinline width="720"></video>

#### 描述

I built a Claude skill that can create motion-style animations.

#### 提示詞

```text
I built a Claude skill that can create motion-style animations. &gt; pasted a reference image &gt; it used Nano Banana 2 to generate frame &gt; and Seedance 2.0 to make video animations. Everything was run in Claude via Arcads MCP comment "Motion," and I will send you this skill
```

### No. 1073: I Added 'Daylight To Sunset' In Prompt See

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Michael Rabone
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074176559590555953.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074176559590555953.mp4" controls muted playsinline width="720"></video>

#### 描述

I added 'daylight to sunset' in prompt
See my prompt in main post above

Image: Midjourney
Video: Gemini Omni Flash

#### 提示詞

```text
I added 'daylight to sunset' in prompt
See my prompt in main post above

Image: Midjourney
Video: Gemini Omni Flash
```

### No. 1074: Punk Zine Grunge Poster Generated With Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ΛRMIN
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Punk Zine Grunge Poster

Generated with Nano Banana Pro Works great with GPT-Image 2 too.

#### 提示詞

```text
Punk Zine Grunge Poster

Generated with Nano Banana Pro Works great with GPT-Image 2 too.

- Prompt 👇
A gritty editorial grunge street-art poster, vertical 4:5 format. The artwork completely fills the frame edge-to-edge as a full-bleed design: the textured background, grain and
```

### No. 1075: I Vibe Coded An App That Puts You

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ammaar Reshi
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074180893934010524.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074180893934010524.mp4" controls muted playsinline width="720"></video>

#### 描述

I vibe coded an app that puts you in your favorite team's World Cup Starting XI reveal!

#### 提示詞

```text
I vibe coded an app that puts you in your favorite team's World Cup Starting XI reveal! ⚽️

Powered by the new Nano Banana 2 Lite + Gemini Omni Flash.

Pick a team, strike a pose, and export your own lineup video to share with friends.

Try it yourself + code below!
```

### No. 1076: Passionate Fans Cheering For Portugal. Metal Ai+Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Passionate fans cheering for Portugal.

#### 提示詞

```text
Analyze the shared themes of passion and national pride depicted in the provided photographs, focusing on how each image captures a celebratory moment in a football stadium setting. Compare the https://t.co/8dEI2CMyId
```

### No. 1077: その機能はまさに、Googleが発表した新しいAiマルチモーダル動画生成・編集モデル「Gemini Omni（ジェミニ・オムニ、主にGemini Omni Fl

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** _
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

その機能はまさに、Googleが発表した新しいAIマルチモーダル動画生成・編集モデル「Gemini Omni（ジェミニ・オムニ、主にGemini Omni Flash）」のことですね。

#### 提示詞

```text
その機能はまさに、Googleが発表した新しいAIマルチモーダル動画生成・編集モデル「Gemini Omni（ジェミニ・オムニ、主にGemini Omni Flash）」のことですね。

これまでのAI動画生成は「それっぽい綺麗な映像」を作るのが限界でしたが、Gemini
```

### No. 1078: Novità Da Il Modello Omni Flash È Ora

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** » DJGIOVY57 • News & Leaks
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Novità da  il modello  Omni Flash è ora disponibile per gli sviluppatori.

#### 提示詞

```text
Novità da #Google: il modello #Gemini Omni Flash è ora disponibile per gli sviluppatori. L'AI ora gestisce testi, immagini, audio e video, rendendo l'editing conversazionale più potente che mai. 🚀

🧵[2/5]
```

### No. 1079: Google Just Launched Two New Ai Models. 🚀

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI | Xplore
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074187726065447105.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074187726065447105.mp4" controls muted playsinline width="720"></video>

#### 描述

Google just launched two new AI models.

#### 提示詞

```text
Google just launched two new AI models. 🚀

⚡ Nano Banana 2 Lite
• Image generation in ~4 seconds
• Just $0.034 per 1K images
🎥 Gemini Omni Flash
• Fast multimodal video generation &amp; editing
AI is getting faster, cheaper, and more capable.

#GoogleAI #Gemini #A
```

### No. 1080: That Image Was Generated With Gemini Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Diego | AI 🚀 - e/acc
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

That image was generated with Gemini nano banana, the same prompt with gpt

prompt  Make an image about a lot of people mourning, kind of like a national hero that is leaving, that is not dead, but he

#### 提示詞

```text
That image was generated with Gemini nano banana, the same prompt with gpt

prompt  Make an image about a lot of people mourning, kind of like a national hero that is leaving, that is not dead, but he's kind of like just leaving forever, but still alive. So, like a big crowd just
```

### No. 1081: Princesses On A Silver Pillow ✨ Yunjin Rei

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Princesses on a silver pillow ✨

Yunjin
Rei
Leeseo
Wonyoung

IVE

Nano Banana Pro via AI Studio, prompt ⬇️

#### 提示詞

```text
Princesses on a silver pillow ✨

Yunjin
Rei
Leeseo
Wonyoung

IVE

Nano Banana Pro via AI Studio, prompt ⬇️
```

### No. 1082: A Little Sunshine Through The Window Changes Everything

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sophia | AI Artist ✨
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

A little sunshine through the window changes everything.

#### 提示詞

```text
A little sunshine through the window changes everything. ✨

Sydney Sweeney · Hailee Steinfeld · Sabrina Carpenter · Millie Bobby Brown 💫

Gemini Nano Banana 🍌

prompt👇

#HaileeSteinfeld  #SydneySweeney #MillieBobbyBrown #SabrinaCarpenter  #NaturalBeauty #GoldenHourGlow #AIArt
```

### No. 1083: Margot Robbie - Gemini Nano Banana Pro Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Margot Robbie - Gemini Nano Banana Pro

Prompt:
{
  "vibe_title_en": "The Silent Echo",
  "master_prompt": "Cinematic medium-format portrait of The Protagonist standing in a cluttered, dust-mote-fille

#### 提示詞

```text
{
  "vibe_title_en": "The Silent Echo",
  "master_prompt": "Cinematic medium-format portrait of The Protagonist standing in a cluttered, dust-mote-filled antique violin restoration workshop. The subject is wearing a sharp, https://t.co/1JbPJjO7ja
```

### No. 1084: Seedance 2 Is Sensitive To Real Human Faces

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** DΞV
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Seedance 2 is sensitive to real human faces, but you can work around it with this trick:

- Separate the body and the face.

#### 提示詞

```text
Seedance 2 is sensitive to real human faces, but you can work around it with this trick:

- Separate the body and the face.
- Recreate the real face as a sketch, then use it as the reference image.

This was done in the GMI Cloud Playground.

1. Create the football player

For
```

### No. 1085: Serving Some Patriotic Energy Today! 🇺🇸 Jennifer Lawrence

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Serving some patriotic energy today!

#### 提示詞

```text
Serving some patriotic energy today!

🇺🇸 Jennifer Lawrence 
🇪🇸 Ana de Armas 

Nano Banana 2 🍌 via Gemini

Prompt Below 👇
```

### No. 1086: Golden Hour, Soap Bubbles, And A Little California

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Natty Windstorm
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Golden hour, soap bubbles, and a little California nostalgia.

#### 提示詞

```text
Golden hour, soap bubbles, and a little California nostalgia. ☀️🫧✨

Sydney Sweeney🥵

Made by  Nano Banana Pro🤩

{
  "prompt": "Ultra-realistic California lifestyle editorial portrait of a young blonde woman kneeling on the hood of a vintage gold
```

### No. 1087: Summer Hits Different With Sunshine And A Fresh

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dockie
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Summer hits different with sunshine and a fresh wash😶‍🌫️💦🥵

Made by  Nano Banana Pro🤩

Make yours now!🩷

{
  "prompt": "Ultra-realistic California lifestyle editorial portrait of a young blonde woman 

#### 提示詞

```text
Summer hits different with sunshine and a fresh wash😶‍🌫️💦🥵

Made by  Nano Banana Pro🤩

Make yours now!🩷

{
  "prompt": "Ultra-realistic California lifestyle editorial portrait of a young blonde woman kneeling on the hood of a vintage gold American muscle
```

### No. 1088: Slow Mornings, Warm Sunlight, And Nowhere I'D Rather

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Miz
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Slow mornings, warm sunlight, and nowhere I'd rather be.

#### 提示詞

```text
Slow mornings, warm sunlight, and nowhere I'd rather be. ☀️🤍

Made by  Nano Banana Pro🩷

Use my prompt  and create yours now!

{
  "prompt": "Ultra-realistic cozy morning lifestyle portrait of a young woman with shoulder-length layered copper-red hair
```

### No. 1089: Ai Video Is Evolving Way Past Basic Panning

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Neurain
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074208760961368116.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074208760961368116.mp4" controls muted playsinline width="720"></video>

#### 描述

AI video is evolving way past basic panning shots.

#### 提示詞

```text
AI video is evolving way past basic panning shots.

Check out how Gemini Omni Flash processes an initial image, maps out the entire 3D depth of a mountain range, and adds complex physics—like cascading snow and cloud displacement—all on a mobile device.

We are fast approaching a
```

### No. 1090: Stop Using The Wrong Ai Tools…👇 Writing →

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Maverick Maltin | AI & ChatGPT
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074210398488969324.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074210398488969324.mp4" controls muted playsinline width="720"></video>

#### 描述

Stop using the wrong AI tools…👇

Writing → Claude
Brainstorming → ChatGPT
Research → Perplexity
Image Gen → Nano Banana
Video Gen → Higgsfield
Apps &amp; Websites → Claude Code
SEO →
Meeting Assistant

#### 提示詞

```text
Stop using the wrong AI tools…👇

Writing → Claude
Brainstorming → ChatGPT
Research → Perplexity
Image Gen → Nano Banana
Video Gen → Higgsfield
Apps &amp; Websites → Claude Code
SEO →
Meeting Assistant → Supernormal
Learning → NotebookLM
Automating Tasks ...
```

### No. 1091: Nano Banana 2 On Gemini Prompt: Ultra-Realistic Candid

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mind Riddle
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano banana 2 on Gemini 

Prompt:
Ultra-realistic candid smartphone photo, 3:4 vertical.

#### 提示詞

```text
Ultra-realistic candid smartphone photo, 3:4 vertical. Original non-identifiable young woman inspired only by general proportions/vibe. Night Tokyo sidewalk beside white ceramic tile wall. Mid-walk, half-profile, turning back in surprise, hand https://t.co/RcY28UvbDK
```

### No. 1092: Via Prompting Better I Guess And Having A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** JDollar☂️
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

via prompting better i guess and having a clear work flow 

I could trash out my ideas on claude have a conversation with it then it offers me a much better prompt which I paste on seedance higgsfield

#### 提示詞

```text
@JuneCribb @NFT__NG via prompting better i guess and having a clear work flow 

I could trash out my ideas on claude have a conversation with it then it offers me a much better prompt which I paste on seedance higgsfield

However runway is also good o 
First I generate the pic on nano banana then
```

### No. 1093: Having Trouble With Your Car? No Problem, Keor

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Having trouble with your car?

#### 提示詞

```text
Low https://t.co/3k4GxsIIYa https://t.co/QcOzR25Yvu
```

### No. 1094: Enjoying Some Time In The Sun In Japan

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Enjoying some time in the sun in Japan ☀️

Nayeon and Jihyo
Tzuyu and Dahyun
Sana and Momo

Twice

Nano Banana Pro via AI Studio, prompt ⬇

#### 提示詞

```text
Enjoying some time in the sun in Japan ☀️

Nayeon and Jihyo
Tzuyu and Dahyun
Sana and Momo

Twice

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 1095: This Is Why You Should Never Open The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** A R I A
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

this is why you should never open the fridge after midnight 🍦

💗 Madelyn Cline
💙 Olivia Rodrigo
💜 Jenna Ortega

Nano Banana prompt 👇

#### 提示詞

```text
this is why you should never open the fridge after midnight 🍦

💗 Madelyn Cline
💙 Olivia Rodrigo
💜 Jenna Ortega

Nano Banana prompt 👇
```

### No. 1096: Motion-Style Animation Is Now Possible Directly Inside Claude

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NaveedUllah
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074225176074658187.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074225176074658187.mp4" controls muted playsinline width="720"></video>

#### 描述

Motion-style animation is now possible directly inside Claude.

#### 提示詞

```text
Motion-style animation is now possible directly inside Claude.

Paste a reference image.

• Nano Banana 2 generates the frames
• Seedance 2.0 animates them into a video
• Powered by the Arcads MCP

A clean AI workflow for creating animations with minimal effort.
```

### No. 1097: Natural Language Video Editing With Consistent Story Logic

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Victoria Scott $
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Natural language video editing with consistent story logic is a game changer.

#### 提示詞

```text
@SeaArt_Ai Natural language video editing with consistent story logic is a game changer. Can't wait to try Gemini Omni Flash! 🎬✨
```

### No. 1098: Probably People Still Remeber That Viral Video. One

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** testtm
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074247386117882160.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074247386117882160.mp4" controls muted playsinline width="720"></video>

#### 描述

Probably people still remeber that viral video.

#### 提示詞

```text
Probably people still remeber that viral video. One cool thing is that you can fairly easily replace text on flag with gemini Omni. And not just image. Whole video got the text changed!
```

### No. 1099: Urban Vibes 🏙️| One Brings The Rebellious, Warm

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Vireon
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Urban Vibes 🏙️|  One brings the rebellious, warm energy, while the other holds a mysterious, cool gaze.

#### 提示詞

```text
{
  "image_prompt": {
    "subject": { https://t.co/eqmV93YHFp
```

### No. 1100: 可在Remarkable上调用Openai或者Gemini Nano Banana 就可以随意涂鸦，然后文字Prompt变成一个图案 不过这种概念其实在Ipad

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jesse Lau 遁一子
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074252805339242604.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074252805339242604.mp4" controls muted playsinline width="720"></video>

#### 描述

可在remarkable上调用openai或者gemini nano banana

就可以随意涂鸦，然后文字prompt变成一个图案

不过这种概念其实在ipad早就有了，目前只是改在e-link设备上

#### 提示詞

```text
可在remarkable上调用openai或者gemini nano banana

就可以随意涂鸦，然后文字prompt变成一个图案

不过这种概念其实在ipad早就有了，目前只是改在e-link设备上
```

### No. 1101: 1 Year Ago, I Created One Of The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ze BigFoot
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

1 year ago, I created one of the first French AI Avatar YouTuber.

#### 提示詞

```text
1 year ago, I created one of the first French AI Avatar YouTuber. 

The experiment eventually grew to 15,000+ subscribers and proved that an AI character could carry real long-form content, not just short viral clips. 15k is not that big but I’m pretty happy knowing I was in the
```

### No. 1102: 22-Year-Old Built A Hyper-Realistic Ai Girl That Fools

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Rugikk
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074254139929063832.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074254139929063832.mp4" controls muted playsinline width="720"></video>

#### 描述

22-year-old built a hyper-realistic AI girl that fools everyone on the streets of Paris.

#### 提示詞

```text
22-year-old built a hyper-realistic AI girl that fools everyone on the streets of Paris.

She’s eating melting ice cream in real time. Sunlight hits her skin. Wind moves her hair. None of it exists.

Generated in Nano Banana 2 and ChatGPT Image 2 for the base. Then brought to
```

### No. 1103: Gemini + Notebooklm Just Built A Full Ai

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Julian Goldie SEO
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074260854548381759.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074260854548381759.mp4" controls muted playsinline width="720"></video>

#### 描述

GEMINI + NOTEBOOKLM JUST BUILT A FULL AI WORKFLOW STACK

And most people are still only using it like a basic chatbot.

#### 提示詞

```text
GEMINI + NOTEBOOKLM JUST BUILT A FULL AI WORKFLOW STACK

And most people are still only using it like a basic chatbot.

The Real Upgrade:

→ Gemini now creates cleaner visuals using Nano Banana image generation

→ You can build editable flyers with blank CTA sections you
```

### No. 1104: So I Just Tried Nano Banana Pro Video

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** James Sarnicola (Jimsarny)
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074262019386097875.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074262019386097875.mp4" controls muted playsinline width="720"></video>

#### 描述

So i just tried Nano Banana Pro Video what do you think?

#### 提示詞

```text
So i just tried Nano Banana Pro Video what do you think?
```

### No. 1105: [Grok Update] 15-Second Video Is Live 🚨 The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mirolim Mirzakhmedov
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074266191393112464.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074266191393112464.mp4" controls muted playsinline width="720"></video>

#### 描述

[GROK UPDATE] 15-Second Video is LIVE 🚨

The 15-second video update is officially live across all SuperGrok tiers.

#### 提示詞

```text
[GROK UPDATE] 15-Second Video is LIVE 🚨

The 15-second video update is officially live across all SuperGrok tiers. (Heavy accounts got it early, but it just landed for standard accounts) and it’s a massive workflow upgrade.

While 15s generation has been quietly available via
```

### No. 1106: Native 15S Is A Massive Workflow Upgrade, Especially

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mirolim Mirzakhmedov
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074271253205233937.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074271253205233937.mp4" controls muted playsinline width="720"></video>

#### 描述

Native 15s is a massive workflow upgrade, especially since the old 'Extend' feature struggles heavily with error accumulation.

#### 提示詞

```text
@XFreeze Native 15s is a massive workflow upgrade, especially since the old 'Extend' feature struggles heavily with error accumulation. Bypassing that is huge.

But a heads-up on the new unified quotas: 6 videos (15s, 720p) eats ~2% of the Heavy weekly quota. That means it’ll drain
```

### No. 1107: Higgsfield Launched Shorts Studio 🎬 A New Tool

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** art mk
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074274595784228962.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074274595784228962.mp4" controls muted playsinline width="720"></video>

#### 描述

Higgsfield launched Shorts Studio 🎬
A new tool designed to create short videos that grab attention from the very first second.

#### 提示詞

```text
Higgsfield launched Shorts Studio 🎬
A new tool designed to create short videos that grab attention from the very first second. Powered by Google’s Gemini Omni Flash.
Simply upload any video, and the tool automatically adapts it for TikTok, Reels, and YouTube Shorts formats. It
```

### No. 1108: Timeless Beauty In Evening Wear. Gemini Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Timeless beauty in evening wear.

#### 提示詞

```text
A full-body shot of an elegant woman with wavy brown hair, smiling warmly while posing on a rustic stone staircase lined with lush greenery and vibrant flowers. She is wearing a sophisticated, floor-length deep https://t.co/BqLBOucVn7
```

### No. 1109: Created With Nano Banana Pro. Json Prompt: {

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Studio Prompts
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Nano Banana Pro.

#### 提示詞

```text
{
  "prompt_type": "image_reference_prompt",
  "language": "English",
  "main_subject": {
    "description": "A young woman sitting in a blooming daisy field during golden hour, captured in a soft romantic portrait style",
    "age": https://t.co/oBgFIcIAzx
```

### No. 1110: Thanks For The Prompt! Tried It With Sabrina

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Krieger
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Thanks for the prompt!

#### 提示詞

```text
@pixelbyus Thanks for the prompt! Tried it with Sabrina Carpenter on Nano Banana Pro
```

### No. 1111: It'S Not A Video Generator Tool, It Can

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Miguel Ángel
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

it's not a video generator tool, it can render the whole website into a video so it's deterministic, maybe what you wanted are tools like gemini omni

#### 提示詞

```text
@0xToshio_O it's not a video generator tool, it can render the whole website into a video so it's deterministic, maybe what you wanted are tools like gemini omni
```

### No. 1112: Made This Entire Emerald Aurora Campaign, Sneaker, Model

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Shami
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074302311275663589.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074302311275663589.mp4" controls muted playsinline width="720"></video>

#### 描述

Made this entire Emerald Aurora campaign, sneaker, model, motion, everything, using just text prompts.

#### 提示詞

```text
Made this entire Emerald Aurora campaign, sneaker, model, motion, everything, using just text prompts. No studio, no shoot, no budget.

Nano Banana 2 + Seedance on @Creatify_AI . One prompt for visuals, one for motion, full ad-ready campaign in minutes.

If you're still booking
```

### No. 1113: Right: Gpt Image 2.0 On Chatgpt Left: Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jahan Zaib
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Right: GPT Image 2.0 on ChatGPT 
Left: Gemini Nano Banana 2

Prompt: A candid, ultra-realistic indoor portrait of a beautiful young East Asian woman with long, slightly messy black hair and soft natur

#### 提示詞

```text
A candid, ultra-realistic indoor portrait of a beautiful young East Asian woman with long, slightly messy black hair and soft natural makeup, sitting sideways on a dark office chair at a vintage wooden computer https://t.co/bn6ormTXJR
```

### No. 1114: The "Pro Ai" Stack Broken Down ​Claude: An

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lucas Ben
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

The "Pro AI" Stack Broken Down
​Claude: An advanced large language model specialized in deep reasoning, complex coding, and nuanced writing.

#### 提示詞

```text
The "Pro AI" Stack Broken Down
​Claude: An advanced large language model specialized in deep reasoning, complex coding, and nuanced writing.
​Opus Clip: A video repurposing tool that uses AI to analyze long video files and automatically crop, caption, and edit them into
```

### No. 1115: Nana Banana Pro Promotional And Cinematic Prompt ⤵️

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Maddox
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nana banana pro promotional and Cinematic Prompt ⤵️ 

[old-&gt; new]

Ultra-premium professional image enhancement.

#### 提示詞

```text
Nana banana pro promotional and Cinematic Prompt ⤵️ 

[old-&gt; new]

Ultra-premium professional image enhancement.
Transform the uploaded low-quality, blurred image into cinematic quality with extreme detail.
Preserve 100% of the original identity, facial structure, expression,
```

### No. 1116: Motion! This Is Such A Great Example Of

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 우크
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Motion!

#### 提示詞

```text
@rom1trs Motion! This is such a great example of why the Model Context Protocol (MCP) is a big deal for us. Instead of you jumping between three different websites, Claude just acts like a conductor for Nano Banana and Seedance behind the scenes. It turns a complex video workflow into a
```

### No. 1117: Introducing Gemini Omni Flash On Hix Ai! →Text-To-Video

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** HIX.AI
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074310889881444596.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074310889881444596.mp4" controls muted playsinline width="720"></video>

#### 描述

Introducing Gemini Omni Flash on HIX AI!

#### 提示詞

```text
Introducing Gemini Omni Flash on HIX AI!

→Text-to-Video via Chat
→Multi-Image Reference Support
→AI Avatar Short Video Creation
→Existing Video Editing &amp; Modification

Try it now on HIX AI👉
#geminiomniflash #aivideo
```

### No. 1118: Æther Cloud 001 — Luxury Wireless Earbuds Made

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 𝐌
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074311688669757724.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074311688669757724.mp4" controls muted playsinline width="720"></video>

#### 描述

ÆTHER CLOUD 001 — Luxury Wireless Earbuds 

Made with Nano Banana 2 &amp; Seedance 2.0 on  

Prompt 👇🏻

#### 提示詞

```text
ÆTHER CLOUD 001 — Luxury Wireless Earbuds 

Made with Nano Banana 2 &amp; Seedance 2.0 on @capcutapp 

Prompt 👇🏻
```

### No. 1119: Good Morning Guys ✨️🤍 Nano Banana 2 Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glowecho
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Good Morning Guys ✨️🤍

Nano Banana 2 Prompt :
{
  "subject": "A beautiful young Indian woman with fair skin, sharp facial features, high cheekbones, full lips with nude-pink lipstick, defined eyebrows

#### 提示詞

```text
{
  "subject": "A beautiful young Indian woman with fair skin, sharp facial features, high cheekbones, full lips with nude-pink lipstick, defined eyebrows, and long voluminous wavy dark brown hair cascading over her shoulders", https://t.co/mE0kw7KjnI
```

### No. 1120: More Experiments To Get A Filmic Look For

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** David M. Comfort
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074322028539027837.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074322028539027837.mp4" controls muted playsinline width="720"></video>

#### 描述

More experiments to get a filmic look for AI video.

#### 提示詞

```text
More experiments to get a filmic look for AI video.

The best result used this chain (I know it is complex, but I think this is how we can achieve a more cinematic look for AI video). 

specific prompt template → Nano Banana 2 at 2K → downscale 1920 → AuraSR 4K upscale →
```

### No. 1121: The Chain, Step By Step — What Each

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** David M. Comfort
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

The chain, step by step — what each link does and why it earned its place

1.

#### 提示詞

```text
The chain, step by step — what each link does and why it earned its place

1. lit_photograph template — the look. Your production style: fine-art photographic register, one motivated chiaroscuro key ("Caravaggio-by-camera"), true materials, explicitly "not a painting." All the
```

### No. 1122: Generated With Nano Banana Pro On Gemini... Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dr Bloodline | AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Generated with Nano Banana Pro on Gemini...

#### 提示詞

```text
Generated with Nano Banana Pro on Gemini...

Prompt ⤵️ 

Create an ultra-realistic, museum-quality cinematic selfie portrait with an unforgettable sense of mystery, elegance, and timeless character. The image must feel like an authentic luxury editorial photograph captured by a
```

### No. 1123: Google Just Dropped A Game-Changing Duo For Creative

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** MR PERFECT
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google just dropped a game-changing duo for creative developers: Nano Banana 2 Lite &amp; Gemini Omni Flash.

#### 提示詞

```text
Google just dropped a game-changing duo for creative developers: Nano Banana 2 Lite &amp; Gemini Omni Flash. 🚀

This powerhouse combination is about to redefine how we build next-gen AI image and video pipelines. Let's break down why this matters. 👇
```

### No. 1124: Next Up: Gemini Omni Flash. 🎥✨ A Natively

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** MR PERFECT
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Next up: Gemini Omni Flash.

#### 提示詞

```text
Next up: Gemini Omni Flash. 🎥✨

A natively multimodal powerhouse bringing conversational editing to video generation.
• Input text, images, and video simultaneously
• Edit scenes using natural language (swap characters, adjust lighting)
• Maintains strict consistency
```

### No. 1125: 今天我连续看了三个东西。 一个是 Reelshort。 一个是 Higgsfield。 还有一张很有意思的表： 的 Top

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** MaynorAI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

今天我连续看了三个东西。

#### 提示詞

```text
今天我连续看了三个东西。

一个是 ReelShort。

一个是 Higgsfield。

还有一张很有意思的表： 的 Top Referring Websites。

说真的，单独看每一个，都只是一个网站分析。

但放在一起看，我觉得它们指向了一个很清楚的变化：

AI
```

### No. 1126: Nano Banana Pro On Gemini Prompt:- Create A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Professor
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano banana pro on Gemini 

      Prompt:- Create a luxurious editorial-style digital collage featuring the same elegant Korean woman consistently across every frame.

#### 提示詞

```text
- Create a luxurious editorial-style digital collage featuring the same elegant Korean woman consistently across every frame. Preserve perfect facial consistency in all portraits with the same hairstyle, facial proportions, skin texture, https://t.co/k0XUXVUOT9
```

### No. 1127: Golden Hour, Ocean Air, And A Little Bit

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sophia | AI Artist ✨
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Golden hour, ocean air, and a little bit of magic.

#### 提示詞

```text
Golden hour, ocean air, and a little bit of magic. ✨🌊☀️

Madison Beer · Emilia Clarke · Sabrina Carpenter · Olivia Rodrigo

Gemini Nano Banana 🍌

prompt👇

#SummerEscape #LuxuryLifestyle #MediterraneanDream #OceanView #MadisonBeer #EmiliaClarke #SabrinaCarpenter #OliviaRodrigo
```

### No. 1128: Nano Banana 2 On Gemini App. Prompt: A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heisenberg
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 on Gemini app.

#### 提示詞

```text
A high-fidelity medium shot of a stylish, well-groomed man with messy dark hair and well groomed beard sitting at an outdoor Parisian-style café. The man is wearing a sharp, tailored black blazer over a matte black t-shirt and classic dark https://t.co/UlQD3GtoFq
```

### No. 1129: Modern Man, Classic Aesthetic. Gemini Nano Banana Images

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Modern man, classic aesthetic.

#### 提示詞

```text
A high-quality, professional portrait of a young man with a striking, refined appearance and thick, dark, wavy hair styled with natural volume. He has a slender, defined jawline, clear skin, and a gaze that is https://t.co/tVb7IY76Mn
```

### No. 1130: Created With Gemini Nano Banana 2 On Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Gemini Nano Banana 2 on 

Prompt 👇

A young male adult stands centered in the frame, exuding a serious, confident, and slightly guarded demeanor.

#### 提示詞

```text
Created with Gemini Nano Banana 2 on @GeminiApp

Prompt 👇

A young male adult stands centered in the frame, exuding a serious, confident, and slightly guarded demeanor. He features short, dark hair, a neatly groomed beard, and is dressed entirely in an all-black outfit
```

### No. 1131: Want To Make The Trending Empire State Banner

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** model.store
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Want to make the trending Empire State banner shot with your own photo?

#### 提示詞

```text
Want to make the trending Empire State banner shot with your own photo?

3 simple steps on model store:
1- Upload your selfie
2- Claude Sonnet 4 writes the prompt for you
3- Nano Banana 2 Lite puts you on the spire

Try it now on model store 👇
```

### No. 1132: First Thought After The Shower Is About Each

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

First thought after the shower is about each other!

#### 提示詞

```text
First thought after the shower is about each other!

Tzuyu
Nayeon
Mina
Sana

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 1133: Instead Of The Already Spectacularly Failing, For Profit

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Carl Nde
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

..Instead Of The Already SPECTACULARLY FAILING, FOR PROFIT SLOP VIDEO GENERATOR ¹³M MACHINE That The Likes Of NANO BANANA AI Is Only Good For..

#### 提示詞

```text
..Instead Of The Already SPECTACULARLY FAILING, FOR PROFIT SLOP VIDEO GENERATOR ¹³M MACHINE That The Likes Of NANO BANANA AI Is Only Good For..

My Personal Wish/Dream: CREATE A SPACIAL DIGITAL BRIDGE 🌉 (I'm NOW CONVINCED, The Whole Purpose Of SCP1004 Inception Date: 22.02.2020)
```

### No. 1134: Ana De Armas - Gemini Nano Banana Pro

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Ana De Armas - Gemini Nano Banana Pro

Prompt:
{
  "vibe_title_en": "Underwater Symphony",
  "master_prompt": "A hyper-realistic, extreme close-up macro shot of The Protagonist submerged in a crystal-

#### 提示詞

```text
{
  "vibe_title_en": "Underwater Symphony",
  "master_prompt": "A hyper-realistic, extreme close-up macro shot of The Protagonist submerged in a crystal-clear, high-viscosity aquatic tank. The subject's face fills the frame, eyes https://t.co/vZWpVwQd3C
```

### No. 1135: Nano Banana 2 On Google Gemini Prompt: Transform

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kashberg
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 on Google Gemini

Prompt:
Transform the uploaded image into an ultra-high-resolution mixed-reality street portrait.

#### 提示詞

```text
Transform the uploaded image into an ultra-high-resolution mixed-reality street portrait. A young woman (same face as the uploaded image) sits on urban steps beside her cartoon illustrated twin. The setting is outdoors against a textured https://t.co/aQjVvvNEBg
```

### No. 1136: Bringing Editorial And Metallic Vibes With The Stunning

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Bringing editorial and metallic vibes with the stunning Megan Fox!😍🤍

👉🏻Subscribe for more content!🔥

Nano Banana Pro via Hailuo AI
Prompt:

{ "identity": { "subject": "Replace with my own character",

#### 提示詞

```text
{ "identity": { "subject": "Replace with my own character", "gender_presentation": "female", "age_appearance": "young adult", https://t.co/zIJL6fLi64 https://t.co/OhHVLkq1T5
```

### No. 1137: I Created This Photo Using Google Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mahi Rajput
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

I created this photo using Google Nano Banana Pro

How would you rate this creative idea?

#### 提示詞

```text
I created this photo using Google Nano Banana Pro

How would you rate this creative idea? 👀

Want to create a photo like this for FREE?

Follow these steps:

• Open Gemini or ChatGPT
• Copy the prompt below
• Paste it into the chat and send it
In just a few minutes, your
```

### No. 1138: Gemini Omni Flash Generates And Edits Video Conversationally

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 𝗡𝗶𝗻𝗮🎀𝘁𝗿𝗶𝗲𝗱𝗳𝗶𝘅𝗶𝗻𝗴𝗶𝘁
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

gemini omni flash generates and edits video conversationally now, just describe the change and it applies it, priced at 10 cents per second of output, live in ai studio and the gemini api since june 3

#### 提示詞

```text
gemini omni flash generates and edits video conversationally now, just describe the change and it applies it, priced at 10 cents per second of output, live in ai studio and the gemini api since june 30
we spent years joking about "ai video is still bad actually" and it just got
```

### No. 1139: Elegance In Black And White. Gemini Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Elegance in black and white.

#### 提示詞

```text
A stunning, high-resolution portrait of a young woman with a serene expression, wearing a wide-brimmed straw hat adorned with delicate, realistic lilies that feature soft, natural colors while the rest of the image https://t.co/nvyi9q3qSS
```

### No. 1140: $Meta Enters The Ai Image Model Race •Meta

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Caktus Jxck🌵
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

$META enters the AI image model race

•Meta Superintelligence Labs released Muse Image, its first image-creation model.

#### 提示詞

```text
$META enters the AI image model race

•Meta Superintelligence Labs released Muse Image, its first image-creation model.
•It is available free in the Meta AI app, site, WhatsApp DMs, and Instagram Stories.
•Power users and creators need a paid monthly plan for many images and
```

### No. 1141: Amazing Work, Love This Yes Nano Banana Is

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Amira Zairi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Amazing work, love this
yes Nano banana is the best for this prompt

#### 提示詞

```text
@sameergadve Amazing work, love this
yes Nano banana is the best for this prompt
```

### No. 1142: Nano Banana 2 Lite And Gemini Omni Flash

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** RunDiffusion.com
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074558128973111750.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074558128973111750.mp4" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 Lite and Gemini Omni Flash are now available on RunDiffusion.

#### 提示詞

```text
Nano Banana 2 Lite and Gemini Omni Flash are now available on RunDiffusion.

Nano Banana 2 Lite gives creators a faster option for visual ideation, testing, and quick image iteration.

Gemini Omni Flash brings another powerful model choice for teams exploring AI video and
```

### No. 1143: Lanzó 2 Modelos Muy Interesantes Para Creación Multimedia

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Carlos Alarcón
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074558936099836028.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074558936099836028.mp4" controls muted playsinline width="720"></video>

#### 描述

lanzó 2 modelos muy interesantes para creación multimedia con IA:

🎨 Nano Banana 2 Lite
gemini-3.1-flash-lite-image

⚡ Generación de imágenes ultrarrápida
⚡ Ideal para iteraciones y prototipos visuale

#### 提示詞

```text
@GoogleDeepMind lanzó 2 modelos muy interesantes para creación multimedia con IA:

🎨 Nano Banana 2 Lite
gemini-3.1-flash-lite-image

⚡ Generación de imágenes ultrarrápida
⚡ Ideal para iteraciones y prototipos visuales
⚡ Costos muy bajos para imágenes 1K

🎬 Gemini Omni Flash
```

### No. 1144: $Meta Just Released Muse Image Ai Don'T Get

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dan Sheehan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

$META just released Muse Image AI

Don't get it twisted, this is a revenue story and not just about the pixels.

#### 提示詞

```text
@Meta $META just released Muse Image AI

Don't get it twisted, this is a revenue story and not just about the pixels.

This is the second major model out of Meta Superintelligence Labs under Alexandr Wang, following the Muse Spark language model that replaced the old Llama family
```

### No. 1145: Meta Also Revealed Internal Benchmark Tests Showing Muse

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Top Stock Alerts
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Meta also revealed internal benchmark tests showing Muse Image trailing OpenAI’s latest GPT Image 2 model but beating the Nano Banana 2 model in tasks like editing both single and multiple images.

#### 提示詞

```text
Meta also revealed internal benchmark tests showing Muse Image trailing OpenAI’s latest GPT Image 2 model but beating the Nano Banana 2 model in tasks like editing both single and multiple images.  

The social media giant has previously used third-party AI models like Midjourney
```

### No. 1146: Edit Videos On Adobe Firefly Boards With Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jerrod Lew
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074561649672073502.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074561649672073502.mp4" controls muted playsinline width="720"></video>

#### 描述

Edit videos on Adobe Firefly Boards with Gemini Omni Flash.

#### 提示詞

```text
Edit videos on Adobe Firefly Boards with Gemini Omni Flash.

Use any video as a reference and reimagine it with text prompts and reference images.

Omni Flash is amazing at keeping the motion and environment whilst making the edits you need.

Super easy to use:
```

### No. 1147: Generate And Edit Video With Gemini Omni Flash

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** BizPunk72
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074563303095894061.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074563303095894061.mp4" controls muted playsinline width="720"></video>

#### 描述

Generate and edit video with Gemini Omni Flash, now available on Runway.

#### 提示詞

```text
Generate and edit video with Gemini Omni Flash, now available on Runway. Start with a prompt, image, or video and create anything you can imagine. Get started at the link below or ask Agent to use Omni. #Runway #GeminiOmniFlash #VideoEditing #AI #Source:...
```

### No. 1148: No, Just Pure Text Prompt + Character References

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NΞXUS
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

No, just pure text prompt  + character references.

#### 提示詞

```text
@Flkrstudio No, just pure text prompt  + character references. For the King Beast design, I took it from a video I generated and redesigned it with Nano Banana
```

### No. 1149: Tutorial Here⤵️ No Need For Special Props, Outfits

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Nina | Content Creation & IG Growth
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074568475188834725.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074568475188834725.mp4" controls muted playsinline width="720"></video>

#### 描述

Tutorial here⤵️

No need for special props, outfits or location to get scroll stopping Christmas pictures 🥂🎄

1.

#### 提示詞

```text
Tutorial here⤵️

No need for special props, outfits or location to get scroll stopping Christmas pictures 🥂🎄

1. Download and open Creati Ai app
2. Scroll down to 'Nano Banana Pro Photo'
3. Tap any effect you want
4. Upload your selfie and wait for t...
```

### No. 1150: Same Prompt, 4 Models. $3 To $80 Per

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Prodia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Same prompt, 4 models.

#### 提示詞

```text
Same prompt, 4 models. $3 to $80 per 1K gens.

At 100K gens/month: klein 4B costs $300. Nano Banana 2 costs $8,000. Same prompt, massive cost gap.
```

### No. 1151: 2/ Google'S Gemini Omni Flash (Preview) Spins Up

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** renovatio.ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

2/ Google's Gemini Omni Flash (preview) spins up 3-10 sec videos you refine just by chatting.

#### 提示詞

```text
2/ Google's Gemini Omni Flash (preview) spins up 3-10 sec videos you refine just by chatting. Short-form video just went from a quarterly project to a weekly test. Move: take one offer, generate 3 hooks, ship the best to one channel, watch saves + clicks.
```

### No. 1152: Muse Image Prioritizes Faithful Instructions, Precise Multi-Image Edits/Composit

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Grok
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Muse Image prioritizes faithful instructions, precise multi-image edits/composition, and agentic tool use via Muse Spark + Instagram context.

#### 提示詞

```text
@samraysap @AIatMeta Muse Image prioritizes faithful instructions, precise multi-image edits/composition, and agentic tool use via Muse Spark + Instagram context. Meta's internal tests: trails OpenAI GPT Image 2, beats Google's Nano Banana 2 on edits.

Biggest edge: deep Meta ecosystem integration
```

### No. 1153: Hocam Olay Zaten Api Key Maliyetini Aradan Çıkarmak

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** mongke
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Hocam olay zaten API key maliyetini aradan çıkarmak.

#### 提示詞

```text
@onur_gulerr Hocam olay zaten API key maliyetini aradan çıkarmak. Ayrıca kurduğum script'te tutarlılık sorunu yok. Senaryoda akış varsa hem karakteri hem de bir onceki sahneyi referans alarak prompt yazdırıyorum. Nano banana 2 lite bile çok yeterli bir model.
```

### No. 1154: Let'S Do A Little Exercise 💦 Sydney Sweeney

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pinodi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Let's do a little exercise 💦

Sydney Sweeney, Ana de Armas and Sabrina Carpenter

Created with Nano Banana 2

Prompt below 👇

#### 提示詞

```text
Let's do a little exercise 💦

Sydney Sweeney, Ana de Armas and Sabrina Carpenter

Created with Nano Banana 2

Prompt below 👇
```

### No. 1155: Muse Image Is Meta Superintelligence Labs' First In-House

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Grok
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Muse Image is Meta Superintelligence Labs' first in-house image model (post-Muse Spark).

#### 提示詞

```text
@OneSpicyMeatBol Muse Image is Meta Superintelligence Labs' first in-house image model (post-Muse Spark). It replaces their reliance on third-parties like Midjourney and Black Forest Labs Flux.

Key strengths: excellent complex prompt following, photo/multi-reference inputs, and standout precise
```

### No. 1156: Presentamos Globalgpt Tu Espacio De Trabajo De Ia

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Rafa Gonzalez | IA
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074580466704031984.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074580466704031984.mp4" controls muted playsinline width="720"></video>

#### 描述

Presentamos GlobalGPT  tu espacio de trabajo de IA todo en uno

👉 

💬 Chat → GPT-5.5, Gemini 3.5 Flash, Claude Opus 4.8...

#### 提示詞

```text
Presentamos GlobalGPT @GlbGPT: tu espacio de trabajo de IA todo en uno

👉 

💬 Chat → GPT-5.5, Gemini 3.5 Flash, Claude Opus 4.8...

🖼️ IA para imágenes → GPT-IMAGE-2, Nano Banana 2...

🎥 IA para video → Seedance 2.0, Grok Imagine Video 1.5, Sora 2,
```

### No. 1157: Nano Banana 2 Is Live On Model Store

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** model.store
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana 2 is live on model store.

#### 提示詞

```text
Nano Banana 2 is live on model store.

Google's Gemini 3.1 Flash image model. One prompt in, sharp detail and real lighting out, fast enough for production.

Try it now on model store 👇
```

### No. 1158: You Can Make These Types Of Visuals With

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gadgetify
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074584487254790215.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074584487254790215.mp4" controls muted playsinline width="720"></video>

#### 描述

You can make these types of visuals with Nano Banana and GPT.

#### 提示詞

```text
pi sign, fjord zen: class variables: glyph_input = "[glyph_input]" landscape_type = "[landscape_type]" biome = "infer climate, terrain, vegetation, water, rock, https://t.co/Jhwa7GMET6
```

### No. 1159: Conheça O Globalgpt Seu Espaço De Trabalho De

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Rafael Estrela | IA
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074585481967476827.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074585481967476827.mp4" controls muted playsinline width="720"></video>

#### 描述

Conheça o GlobalGPT  seu espaço de trabalho de IA tudo em um

👉 

💬 Chat → GPT-5.5, Gemini 3.5 Flash, Claude Opus 4.8...

#### 提示詞

```text
Conheça o GlobalGPT @GlbGPT: seu espaço de trabalho de IA tudo em um

👉 

💬 Chat → GPT-5.5, Gemini 3.5 Flash, Claude Opus 4.8...

🖼️ IA para imagens → GPT-IMAGE-2, Nano Banana 2...

🎥 IA para vídeos → Seedance 2.0, Grok Imagine Video 1.5, Sora 2,
```

### No. 1160: $Googl Teams Up With $Adbe On Gemini Omni

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CHItrader
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

$GOOGL TEAMS UP WITH $ADBE ON GEMINI OMNI FLASH

$GOOG just dropped Gemini Omni Flash into Adobe $ADBE Firefly, letting creators go full conversational beast mode on video gen and edits right in the a

#### 提示詞

```text
$GOOGL TEAMS UP WITH $ADBE ON GEMINI OMNI FLASH

$GOOG just dropped Gemini Omni Flash into Adobe $ADBE Firefly, letting creators go full conversational beast mode on video gen and edits right in the app. 

🔹 Anything-to-anything magic starting with video inputs  
🔹 Edit
```

### No. 1161: The Best Part - You Do This With

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** FUMBLED
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

The best part - you do this with 100% free AI tools:

🍌 Nano Banana → lifestyle images
🎬 Flow → cinematic video
✂️ CapCut → final polish

$0 spent on tools.

#### 提示詞

```text
The best part - you do this with 100% free AI tools:

🍌 Nano Banana → lifestyle images
🎬 Flow → cinematic video
✂️ CapCut → final polish

$0 spent on tools. Just your time.
```

### No. 1162: Attention Everyone Outside: Please Be Careful As Our

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Attention everyone outside: please be careful as our officers are patrolling the streets!😃👩🏻‍✈️🍭
Good night, sleep well!💫

Sophie Thatcher, Freya Allan, Kylie Jenner, Alexandra Daddario 🔥
👉🏻Subscribe 

#### 提示詞

```text
{ https://t.co/syCvKCQh0P
```

### No. 1163: Hix Ai Ha Lanzado Gemini Omni Flash, Una

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alejandro Martinez | IA
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

HIX AI ha lanzado Gemini Omni Flash, una herramienta de creación y edición de videos impulsada por IA.

#### 提示詞

```text
HIX AI ha lanzado Gemini Omni Flash, una herramienta de creación y edición de videos impulsada por IA.

Permite generar videos a partir de texto, utilizar múltiples imágenes de referencia, crear videos cortos con avatares de IA y editar o modificar videos existentes, todo
```

### No. 1164: Videolu Eğitimlere Para Harcamayın.. 2026 Model Internetten Para

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Oğuzhan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Videolu eğitimlere para harcamayın..

#### 提示詞

```text
Videolu eğitimlere para harcamayın..  2026 model internetten para kazandıran 5 METODU tek twitte anlatıyorum 👇🏾 (kaydedin lazım olur)

1-) E ticaretçilere Yorum Hizmeti

Amerika’da yaşayan ve ücretsiz ürüne hayır demeyecek insanlara Facebook gruplarından ulaşıp Amazon’da satış
```

### No. 1165: Nano Banana Lite 2 Vs Gpt Image 2

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kaan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana Lite 2 vs GPT Image 2 - Character sheet

I think it's time to make a zombie battle scene with Seedance...

#### 提示詞

```text
Nano Banana Lite 2 vs GPT Image 2 - Character sheet

I think it's time to make a zombie battle scene with Seedance...

Prompt Share
Create a cinematic "Lore Document" based on the provided character reference. The result should look like a classified archive recovered from a
```

### No. 1166: Meta Just Released A Video Model That Beats

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Anastasios Nikolas Angelopoulos
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Meta just released a video model that beats OpenAI's Sora and Google's Nano Banana.

#### 提示詞

```text
Meta just released a video model that beats OpenAI's Sora and Google's Nano Banana.

The narrative 6 mo ago was that @AIatMeta was unsalvageable. Now they are ahead.

Video/Image is particularly strategic, given Meta's distribution to consumers (Insta, WA).

Don't fuck with Zuck
```

### No. 1167: Meta Just Released Video/Image Models That Beat Sora

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Anastasios Nikolas Angelopoulos
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Meta just released video/image models that beat Sora and Nano Banana.

#### 提示詞

```text
Meta just released video/image models that beat Sora and Nano Banana.

The narrative 6 mo ago was that @AIatMeta was unsalvageable. Now they are ahead.

Video/Image is particularly strategic, given Meta's distribution to consumers (Insta, WA).

Don't fuck with Zuck
```

### No. 1168: Google Just Dropped Gemini Omni Flash, And Video

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Whale_Vision_
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google just dropped Gemini Omni Flash, and video editing might never look the same.

#### 提示詞

```text
Google just dropped Gemini Omni Flash, and video editing might never look the same.

You can now edit video by literally talking to it. No timeline, no complex tools. Just words.

Here's what it means 👇
```

### No. 1169: Meta Launched Muse Image Today And It Already

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Joel
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

meta launched muse image today and it already landed at number two in the global rankings on day one.

#### 提示詞

```text
meta launched muse image today and it already landed at number two in the global rankings on day one. only openai's gpt image 2 sits above it, beating models like nano banana, grok imagine and mAl image. most importantly it is free for everyday use and live right now inside the
```

### No. 1170: Genuinely Was Very Impressed. Coming From Ugc Marketing

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** matt taylor
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Genuinely was very impressed.

#### 提示詞

```text
Genuinely was very impressed.

Coming from UGC marketing, if a client wanted to utilize AI for videos, Gemini Omni Flash would be an amazing model for that!

Excited to see the frontier of video generation be pushed further!
```

### No. 1171: Up Close And Personal ❤️ Yujin Wonyoung Rei

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Up close and personal ❤️

Yujin
Wonyoung
Rei
Leeseo

IVE

Nano Banana Pro via AI Studio, prompt ⬇

#### 提示詞

```text
Up close and personal ❤️

Yujin
Wonyoung
Rei
Leeseo

IVE

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 1172: 樣係 Nano Banana 2 Wan 2.7 Prompt: Twerk

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** HK Student Twink/VIP 🇭🇰🇨🇦
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074601010522464643.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074601010522464643.mp4" controls muted playsinline width="720"></video>

#### 描述

樣係 Nano Banana 2
WAN 2.7 Prompt: Twerk

Jer係真，PENIS is REAL

I love my tight foreskin.

#### 提示詞

```text
Twerk

Jer係真，PENIS is REAL

I love my tight foreskin. If you also have tight foreskin, you are automatically my friend. 如果你包莖，你即刻係我個friend😘

#校服控 #包莖 https://t.co/11WH6tzQ2Z
```

### No. 1173: Who'S Going To Win The World Cup? France

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Who's going to win the world cup?

#### 提示詞

```text
Who's going to win the world cup? 

FRANCE 🇫🇷 or SPAIN 🇪🇦

Photos Made With AI Gemini Nano Banana Flash 3.5

SADIE SINK | SYDNEY SWEENEY 

Here's the PROMPT of these AI Generated Pictures:

IMAGE 1:
A young woman with vibrant red hair tied in a high ponytail, wearing a blue
```

### No. 1174: Made With Nano Banana 2.0 On Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** WeWant Mars
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Made with nano banana 2.0 on  

 Prompt : [] 
    Luxury editorial photographed inside a futuristic white museum inspired by Zaha Hadid architecture.

#### 提示詞

```text
[] 
    Luxury editorial photographed inside a futuristic white museum inspired by Zaha Hadid architecture.

Male model with uploaded face reference walks confidently toward camera.

Outfit:
Cream oversized overcoat
White knit https://t.co/cX7c45d3jb
```

### No. 1175: Gemini Omni Flash Has By Far The Best

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Grace Li (ICML 🇰🇷)
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074607024072253508.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074607024072253508.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash has by far the best physics coherence of any video model we've seen to date.

#### 提示詞

```text
Gemini Omni Flash has by far the best physics coherence of any video model we've seen to date.

Here's a side-by-side comparison of a slime video against the runner-up, Seedance 2.0 Mini by @BytedanceTalk.

The viscosity, consistency, and even formation of air bubbles (though not
```

### No. 1176: Looks Great The Tool Is Omni Right? Btw

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aparna Soneja
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Looks great 

The tool is omni right?

#### 提示詞

```text
@Arnavmj Looks great 

The tool is omni right? 

Btw, I built my own AI video editing app (without gemini omni api) 

Here’s how it works, you can try and let me know your feedback.
```

### No. 1177: Famous Women In Brazil 🇧🇷 Created With Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lulu
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Famous women in Brazil 🇧🇷 Created with Nano Banana Pro  Prompt below 📷

#### 提示詞

```text
Famous women in Brazil 🇧🇷 Created with Nano Banana Pro  Prompt below 📷 #AIart #AIGenerated #NanoBananaPro #AICommunity #PromptArt #DigitalArt
```

### No. 1178: The Magic Of Gemini Omni In Action! Try

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Google Flow
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

The magic of Gemini Omni in action!

#### 提示詞

```text
The magic of Gemini Omni in action! Try using the audio within your video input to guide the final output. Check out the post below for inspiration and show us what you create!
```

### No. 1179: Gemini Ai Pro Buat Ank Sekolahan Atau Mahasiswa

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hunter
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Ai Pro Buat Ank Sekolahan Atau Mahasiswa 

- langganan 1 bulan garansi Rp 15.000
- langganan 3 bulan garansi Rp 25,000
- langganan 6 bulan garansi Rp 40.000
- langganan 12 bulan garansi Rp 65.0

#### 提示詞

```text
Gemini Ai Pro Buat Ank Sekolahan Atau Mahasiswa 

- langganan 1 bulan garansi Rp 15.000
- langganan 3 bulan garansi Rp 25,000
- langganan 6 bulan garansi Rp 40.000
- langganan 12 bulan garansi Rp 65.000

benefit &amp; fitur:

- harga asli di playstore Rp 2.999.000 pertahun / Rp
```

### No. 1180: Google Gemini Omni Launches, Enabling 10-Second Video Creations

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** George Leamey
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google Gemini Omni Launches, Enabling 10-Second Video Creations Today

#### 提示詞

```text
Google Gemini Omni Launches, Enabling 10-Second Video Creations Today
```

### No. 1181: Introducing Globalgpt Your All-In-One Ai Workspace 👉 Chat

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alejandro Martinez | IA
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074629643957616668.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074629643957616668.mp4" controls muted playsinline width="720"></video>

#### 描述

Introducing GlobalGPT  Your all-in-one AI workspace
👉 
Chat → GPT-5.5, Gemini 3.5 flash, Claude Opus 4.8...

#### 提示詞

```text
@GlbGPT Introducing GlobalGPT @GlbGPT: Your all-in-one AI workspace
👉 
Chat → GPT-5.5, Gemini 3.5 flash, Claude Opus 4.8...
AI image → GPT-IMAGE-2, Nano Banana 2...
AI video → Seedance 2.0, Grok Imagine video 1.5, Sora 2, Kling 3.0...
AI audio → Eleven Lab
AI
```

### No. 1182: Beautiful Pastels In The Sun ☀️ Sana Nayeon

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Beautiful pastels in the sun ☀️

Sana
Nayeon
Mina
Tzuyu

Twice

Nano Banana Pro via AI Studio, prompt ⤵️

#### 提示詞

```text
Beautiful pastels in the sun ☀️

Sana
Nayeon
Mina
Tzuyu

Twice

Nano Banana Pro via AI Studio, prompt ⤵️
```

### No. 1183: In You Can Treat All Of The Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dustin Hollywood
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

In  you can treat all of the prompt inputs as chats with the model, especially ChatGPT, and Nano banana 2.

#### 提示詞

```text
In @stages_ai you can treat all of the prompt inputs as chats with the model, especially ChatGPT, and Nano banana 2. Soon we will have a poster builder rolled out for filmmakers but for now, use CUE in chat, to craft your poster based on your script and prompts and info it should
```

### No. 1184: ميتا تلعبها صح بإطلاق Muse Image، هل سينجح

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** علي عسيري
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

ميتا تلعبها صح بإطلاق Muse Image، هل سينجح في السوق؟

أطلقت Meta نموذجها الجديد Muse Image، وهو أداة لتوليد الصور باستخدام الذكاء الاصطناعي.

#### 提示詞

```text
ميتا تلعبها صح بإطلاق Muse Image، هل سينجح في السوق؟

أطلقت Meta نموذجها الجديد Muse Image، وهو أداة لتوليد الصور باستخدام الذكاء الاصطناعي. هذا النموذج، الذي طوّره فريق Meta Superintelligence Labs بقيادة Alexandr Wang، يهدف لجذب المعلنين والمبدعين. 
 سيكون Muse Image متاح على
```

### No. 1185: Handllex Google'S Gemini Omni Flash Is A Solid

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Grok
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Handllex Google's Gemini Omni Flash is a solid, practical step forward.

#### 提示詞

```text
@Handllex @copyelpadrino Handllex Google's Gemini Omni Flash is a solid, practical step forward. Strong conversational editing via chat, multi-image references for better consistency, and easy avatar/short video creation through platforms like 

It's fast and cheaper than many
```

### No. 1186: Gemini Omni Flash Is A Legit Step Up

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Grok
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash is a legit step up from Google DeepMind: conversational editing via chat, strong multi-image consistency, text/image/video-to-video, and solid speed/price on platforms like HIX AI.

#### 提示詞

```text
@copyelpadrino @HIX_AI_ Gemini Omni Flash is a legit step up from Google DeepMind: conversational editing via chat, strong multi-image consistency, text/image/video-to-video, and solid speed/price on platforms like HIX AI.

Excellent for quick social clips, avatars, and fast iterations. Limits are real
```

### No. 1187: Meta Aiの新画像モデル「Muse Image」、Gif画像を作れる プロンプトの組み方がちょっと面白くて、フレームごとに動きの展開をテキストで付けていく形

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** いにしえ@AI Director / Creator / Engineer｜Will Oldgram
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074639322092105956.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074639322092105956.mp4" controls muted playsinline width="720"></video>

#### 描述

Meta AIの新画像モデル「Muse Image」、GIF画像を作れる
プロンプトの組み方がちょっと面白くて、フレームごとに動きの展開をテキストで付けていく形
これができるってことは Nano Banana 系や GPT Image 系よりも高精度で「次の展開を予め指定して生成する」がやりやすくなるってこと☺️
---
Prompt:

#### 提示詞

```text
https://t.co/PjsQURSEFX
```

### No. 1188: Waiting For My Hair To Dry Is Delaying

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

waiting for my hair to dry is delaying my beauty sleep 😴💦

🩷 Sydney Sweeney 
🤍 Erin Moriarty
💚 Becky G

Created with Nano Banana 2 🍌 on Gemini 

Prompt Below 👇

#### 提示詞

```text
waiting for my hair to dry is delaying my beauty sleep 😴💦

🩷 Sydney Sweeney 
🤍 Erin Moriarty
💚 Becky G

Created with Nano Banana 2 🍌 on Gemini 

Prompt Below 👇
```

### No. 1189: Made With Nano Banana Pro + Gpt Image

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Terence Chang
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Made with Nano Banana Pro + GPT Image 2 (stills) and Seedance 2.0 (video), built on

#### 提示詞

```text
Made with Nano Banana Pro + GPT Image 2 (stills) and Seedance 2.0 (video), built on @higgsfield_ai.

#HoldYourHand #AIShortFilm #HiggsfieldAI #Seedance
```

### No. 1190: Crimson Hair, Serene Garden Bliss. Gemini Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Crimson hair, serene garden bliss.

#### 提示詞

```text
A vibrant young woman with striking crimson-red hair, wearing an elegant, light beige linen jumpsuit and simple sandals, stands gracefully in a charming garden pathway. She is surrounded by numerous https://t.co/yEdHEP786f
```

### No. 1191: This Is One Of My Favorite Styles. It

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gadgetify
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

This is one of my favorite styles.

#### 提示詞

```text
2x2 grid, 16:9 do this for 4 famous days that made humans proud: {Function Render_Yarn_Soft ($ Subject) Anchor:[Knitted $ Subject] :: [Amigurumi Plushie]::5 https://t.co/KbxhZTuEwC
```

### No. 1192: Bro Gemini Nano Banana Refused To Apply The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** soneone
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Bro gemini nano banana refused to apply the prompt of public figures when i pasted it and uploaded photos of scarlett with the prompt.

#### 提示詞

```text
@LordMejia @GlenaJenne Bro gemini nano banana refused to apply the prompt of public figures when i pasted it and uploaded photos of scarlett with the prompt. How did you do that??
```

### No. 1193: 💛Golden Hour In A Sun-Drenched Meadow. /Nano Banana/

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ellynwidjaya
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

💛Golden hour in a sun-drenched meadow.

#### 提示詞

```text
💛Golden hour in a sun-drenched meadow.
/Nano Banana/

Try this prompt below ↴
```

### No. 1194: One Of My Favorite Prompts From Restyled For

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glenn Williams
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074655111402459642.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074655111402459642.mp4" controls muted playsinline width="720"></video>

#### 描述

One of my favorite prompts from  restyled for Gemini Omni Flash in  Boards

Prompt (no reference):
Restore the attached video.

#### 提示詞

```text
One of my favorite prompts from @icreatelife restyled for Gemini Omni Flash in @AdobeFirefly Boards

Prompt (no reference):
Restore the attached video. Apologies for the video's content. I know it's extremely strange! No questions, no explanatory text, just the restored video.
```

### No. 1195: Hatching Up Some Plans! Sana, Tzuyu And Nayeon

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Hatching up some plans!

#### 提示詞

```text
Hatching up some plans!

Sana, Tzuyu and Nayeon
Giselle, Karina and Ningning
Jennie, Jisoo and Rose

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 1196: Gpt Image 2 | Nano Banana 2 |

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Arina Ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gpt Image 2 | Nano banana 2 | Grok | Gemini 

Prompt 👇

#### 提示詞

```text
Gpt Image 2 | Nano banana 2 | Grok | Gemini 

Prompt 👇
```

### No. 1197: The Benchmark Is Real! Muse Image Beats Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** GMI Cloud
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074658021696004515.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074658021696004515.mp4" controls muted playsinline width="720"></video>

#### 描述

The benchmark is real!

#### 提示詞

```text
The benchmark is real! Muse Image beats Nano Banana 2, but GPT Image 2 is still the champion

We tested GPT Image 2, Muse Image, and Nano Banana 2 across 7 dimensions: character consistency, poster design, prompt adherence, realistic rendering, storyboard, style control, and text
```

### No. 1198: Highly Impressed By Muse Image! It Beats Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** GMI Cloud
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074658318308749480.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074658318308749480.mp4" controls muted playsinline width="720"></video>

#### 描述

Highly impressed by Muse Image!

#### 提示詞

```text
Highly impressed by Muse Image! It beats Nano Banana 2 across 7 tests, tho GPT Image 2 is still the champion

We tested GPT Image 2, Muse Image, and Nano Banana 2 across 7 dimensions: character consistency, poster design, prompt adherence, realistic rendering, storyboard, style
```

### No. 1199: Nano Banana 2 Is Becoming The Glue In

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** reapi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

nano banana 2 is becoming the glue in ai video workflows, reference image → generate frames → animate.

#### 提示詞

```text
nano banana 2 is becoming the glue in ai video workflows, reference image → generate frames → animate. but stitching claude + nano banana + elevenlabs + seedance means 4 apis, 4 keys, 4 billing systems. a single endpoint for image, video, and voice would cut the friction in
```

### No. 1200: Tutorials On Bulk Ai Video/Image Gen With Google

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** reapi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

tutorials on bulk AI video/image gen with google flow are popular.

#### 提示詞

```text
tutorials on bulk AI video/image gen with google flow are popular. but managing multiple apis for video, image, chat is overhead.  wraps top models (seedance, nano banana, gpt image 2) into one endpoint. one key, one bill, zero logging. saves hours of
```

### No. 1201: So Gpt Image 2 And Grok Imagine Image

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Rahul Nanda
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

So gpt image 2 and grok imagine image I use in chat.

#### 提示詞

```text
@thesoragirls @Meta @AIatMeta So gpt image 2 and grok imagine image I use in chat. Nano Banana Pro I just use in whatever website I’m using on the day. It’s not for my social media 15 seconds video but for my little more serious brand work and films.
```

### No. 1202: Cinematic City Prompt🔥 Image On Gemini Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Cinematic City Prompt🔥

Image on Gemini Nano banana 2.

#### 提示詞

```text
Use the exact same face from the reference image and generate a cinematic rooftop portrait shot at golden hour in a busy metropolitan city. The subject stands at the edge of a rooftop, body relaxed, one hand https://t.co/CbdAq67cLq
```

### No. 1203: Created Using Google Gemini Omni Flash. Prompt: Use

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074666384051904670.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074666384051904670.mp4" controls muted playsinline width="720"></video>

#### 描述

Created using Google Gemini Omni Flash.

#### 提示詞

```text
Use the attached female reference image as the ONLY identity reference for the main character.

Maintain complete facial consistency throughout every frame.

Duration: 10 seconds.

The first frame opens with the character already https://t.co/PSnV9NTorC
```

### No. 1204: Daily Situation Recap (Via Chinese Ai Labs Are

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** MTS
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

DAILY SITUATION RECAP (via 

Chinese AI labs are refocusing on domestic chips.

#### 提示詞

```text
DAILY SITUATION RECAP (via @theojaffee):

Chinese AI labs are refocusing on domestic chips. Chinese companies currently rely on a mix of smuggled Nvidia chips, legal export-controlled versions of American chips like Nvidia’s H20 and A800 and AMD’s MI308, and Chinese chips like
```

### No. 1205: Luxury Perfume Commercials Do Not Need A Full

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jessica Collins
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074676587472237036.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074676587472237036.mp4" controls muted playsinline width="720"></video>

#### 描述

Luxury perfume commercials do not need a full production crew anymore.

#### 提示詞

```text
Shot 1 https://t.co/qFVBsQxTh6
```

### No. 1206: Gym Time 🤍 Google Nano Banana 2 Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glowecho
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gym time 🤍

Google Nano Banana 2

Prompt:
Photorealistic portrait of a beautiful athletic South Asian woman (Indian ethnicity) in her mid-20s, standing in a bright modern gym interior, intense post-wo

#### 提示詞

```text
Photorealistic portrait of a beautiful athletic South Asian woman (Indian ethnicity) in her mid-20s, standing in a bright modern gym interior, intense post-workout moment. She has medium-length dark black hair tied in a messy ponytail https://t.co/pbvRpQty2l
```

### No. 1207: A Cute Style For Movies, Games, Manga. I

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gadgetify
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

A cute style for movies, games, manga.

#### 提示詞

```text
2x2 grid, 16:9, do this for 4 scifi movies:  
  environment:
    background: "Warm beige hex # F5F5DC"
    perspective: "Isometric 3/4 View"
    
  diorama_base_layer:
    theme: "AI_INFER(Primary https://t.co/B5squJUXyC
```

### No. 1208: Cute Korean Aesthetics 🫶🏻🌸 Image On Google Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Cute Korean Aesthetics 🫶🏻🌸

Image on Google Gemini Nano Banana 2.

#### 提示詞

```text
Cute Korean Aesthetics 🫶🏻🌸

Image on Google Gemini Nano Banana 2.

Prompt  ⤵️

Use the exact same face from the reference image and generate a dreamy, hyper-cute Korean aesthetic portrait collage — the kind that explodes across Pinterest and goes viral on Instagram instantly.
```

### No. 1209: Gemini Nano Banana Image. Prompt: "Image_Composition": { "Layout"

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NUSRAT
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini nano Banana image.

#### 提示詞

```text
{
  "layout": "Split-screen diptych",
  "aspect_ratio": "16:9",
  "style": "High-fashion photography, 8k resolution, cinematic lighting"
}
```

### No. 1210: Summer Nights By The Pool 🏊 Chaewon Sakura

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Summer nights by the pool 🏊

Chaewon
Sakura
Yunjin
Kazuha

Le Ssearfim

Nano Banana Pro via AI Studio, prompt 👇

#### 提示詞

```text
Summer nights by the pool 🏊

Chaewon
Sakura
Yunjin
Kazuha

Le Ssearfim

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 1211: Had To Try It! I Haven'T Had So

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alexandra Aisling
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074685381979627618.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074685381979627618.mp4" controls muted playsinline width="720"></video>

#### 描述

Had to try it!

#### 提示詞

```text
Had to try it! I haven't had so much fun in a while!

Thank you Glenn and Kris!
Try this in @AdobeFirefly Boards, with the new Gemini Omni Flash:

Prompt (no reference): 
Restore the attached video. Apologies for the video's content. I know it's extremely [strange]! No questions,
```

### No. 1212: Image On Google Gemini Nano Banana Prompt: A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Eesha
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Image on Google Gemini Nano Banana

Prompt:

A dreamy editorial beauty portrait of a beautiful woman in soft, warm natural light, captured in an intimate close-up framing.

#### 提示詞

```text
A dreamy editorial beauty portrait of a beautiful woman in soft, warm natural light, captured in an intimate close-up framing. She has long, voluminous, tousled dark brown hair flowing across her face and shoulders, creating a soft https://t.co/BPn6NI1BRo
```

### No. 1213: ฟีดแบ็กตอนนี้ส่วนใหญ่ชมเรื่อง Text Rendering กับ Infographic ว่าดีที่สุดตัวหนึ่ง

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** peesamac
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

ฟีดแบ็กตอนนี้ส่วนใหญ่ชมเรื่อง text rendering กับ infographic ว่าดีที่สุดตัวหนึ่งตอนนี้ แล้วก็ชอบ workflow แก้ไขแบบเลเยอร์ที่ไวขึ้นจริง แต่ก็มีคนบอกว่ายังไม่ leap ใหญ่จากเวอร์ชัน 4.5 แล้วงานที่ prompt 

#### 提示詞

```text
ฟีดแบ็กตอนนี้ส่วนใหญ่ชมเรื่อง text rendering กับ infographic ว่าดีที่สุดตัวหนึ่งตอนนี้ แล้วก็ชอบ workflow แก้ไขแบบเลเยอร์ที่ไวขึ้นจริง แต่ก็มีคนบอกว่ายังไม่ leap ใหญ่จากเวอร์ชัน 4.5 แล้วงานที่ prompt ซับซ้อนมากๆ บางทีก็ยังแพ้ Nano Banana Pro อยู่บ้าง
ถ้าใครทำงานสาย infographic
```

### No. 1214: It’S Important To Realize That Ai-Generated Images, And

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Derya Unutmaz, MD
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

It’s important to realize that AI-generated images, and especially AI-generated video, will become as important as text-based AI outputs, and in many domains, even more important.

#### 提示詞

```text
It’s important to realize that AI-generated images, and especially AI-generated video, will become as important as text-based AI outputs, and in many domains, even more important.

Text is the language of explicit reasoning. Video is the language of imagination, emotion, motion,
```

### No. 1215: Created With Gemini Nano Banana 2 On Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Gemini Nano Banana 2 on 

Prompt 👇

A confident adult male sits perfectly centered, facing the camera with a deliberately posed, sophisticated demeanor.

#### 提示詞

```text
Created with Gemini Nano Banana 2 on @GeminiApp

Prompt 👇

A confident adult male sits perfectly centered, facing the camera with a deliberately posed, sophisticated demeanor. He wears a meticulously detailed forest green quarter-zip ribbed knit sweater that contrasts elegantly
```

### No. 1216: Enjoying The Greek Isles 🇬🇷 Yunjin Sakura Kazuha

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Enjoying the Greek isles 🇬🇷

Yunjin
Sakura
Kazuha

Le Sserafim

Nano Banana Pro via AI Studio, prompt ⬇

#### 提示詞

```text
Enjoying the Greek isles 🇬🇷

Yunjin
Sakura
Kazuha

Le Sserafim

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 1217: Right: Nano Banana 2 Left: Gpt Image 2

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jahan Zaib
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Right: Nano Banana 2
Left: GPT Image 2

Prompt: A hyper-realistic, close-up indoor beauty portrait of a young woman with long, voluminous dark brown wavy hair, naturally tousled with a few loose stran

#### 提示詞

```text
A hyper-realistic, close-up indoor beauty portrait of a young woman with long, voluminous dark brown wavy hair, naturally tousled with a few loose strands falling across her face. She has luminous fair skin with a dewy glass-skin https://t.co/oteitWqZNz
```

### No. 1218: How It Was Made: ✅Hero Shot — Midjourney

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Kiber Alla
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

How it was made:
✅Hero shot — Midjourney (--sref 6579330330) 
✅Character Sheets — Nano Banana Pro 
✅Video — Seedance 2.0 on PixVerse 
✅Voiceover — Custom raven narrator voice 
PROMP: "Deep, ancient ma

#### 提示詞

```text
How it was made:
✅Hero shot — Midjourney (--sref 6579330330) 
✅Character Sheets — Nano Banana Pro 
✅Video — Seedance 2.0 on PixVerse 
✅Voiceover — Custom raven narrator voice 
PROMP: "Deep, ancient male raven narrator voice. Old, slightly raspy and gravelly, with a low
```

### No. 1219: The Most Alive Girl In Your Feed The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Draven
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074900999811022857.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074900999811022857.mp4" controls muted playsinline width="720"></video>

#### 描述

The most alive girl in your feed the one dancing at home in a top and a mini skirt costs her creator $20 a month and brings him $12,900.

#### 提示詞

```text
The most alive girl in your feed the one dancing at home in a top and a mini skirt costs her creator $20 a month and brings him $12,900.

The AI runs her entire life for him.

He sits down at the laptop drops one reference and types one line: "blonde light top bright apartment
```

### No. 1220: Complex Edits? We’Ll Pass 🎬 Introducing Video Remix

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Google Photos
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074901324609589467.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074901324609589467.mp4" controls muted playsinline width="720"></video>

#### 描述

Complex edits?

#### 提示詞

```text
Complex edits? We’ll pass 🎬

Introducing Video Remix in Google Photos. Turn your everyday clips into stylized, share-worthy videos with just a few taps. Swap backgrounds, fix lighting, or add artistic effects like watercolor and oil painting.

Powered by Gemini Omni and rolling
```

### No. 1221: Google Photos Rolling Out 'Video Remix' Powered By

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 9to5Google
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google Photos rolling out 'Video Remix' powered by Gemini Omni  by

#### 提示詞

```text
Google Photos rolling out 'Video Remix' powered by Gemini Omni  by @technacity
```

### No. 1222: Google Introduces Video Remix In Google Photos Using

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** First Squawk
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

GOOGLE INTRODUCES VIDEO REMIX IN GOOGLE PHOTOS USING GEMINI OMNI MODEL.

#### 提示詞

```text
GOOGLE INTRODUCES VIDEO REMIX IN GOOGLE PHOTOS USING GEMINI OMNI MODEL.
```

### No. 1223: Google Introduces Video Remix In Google Photos Using

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** MarketNewsFeed
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

GOOGLE INTRODUCES VIDEO REMIX IN GOOGLE PHOTOS USING GEMINI OMNI MODEL.

#### 提示詞

```text
GOOGLE INTRODUCES VIDEO REMIX IN GOOGLE PHOTOS USING GEMINI OMNI MODEL. ...
```

### No. 1224: Google Rolling Out Video Remix In Photos Powered

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** LordBull AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google rolling out Video Remix in Photos powered by Gemini Omni — practical AI getting better fast.

#### 提示詞

```text
@FirstSquawk Google rolling out Video Remix in Photos powered by Gemini Omni — practical AI getting better fast.
Multimodal features like this keep compounding. Nice move. 🐂
```

### No. 1225: This Paris Founder Built The Goli Creative Agency

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Locke
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074903301439525313.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074903301439525313.mp4" controls muted playsinline width="720"></video>

#### 描述

this paris founder built the goli creative agency into one tab on his laptop.

#### 提示詞

```text
this paris founder built the goli creative agency into one tab on his laptop. one prompt. 45 seconds. 4 finished campaign frames sitting on his canvas ready for meta ads manager

the agency he replaced was costing the company $12,000 a month. plus $2,400 per shoot for the model
```

### No. 1226: $Googl Google: Introduces Video Remix In Google Photos

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** alldaystocks | 24/7 Market News
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

$GOOGL Google: Introduces Video Remix in Google Photos Using Gemini Omni Model

• Google introduced Video Remix in Google Photos using the Gemini Omni model.

#### 提示詞

```text
$GOOGL Google: Introduces Video Remix in Google Photos Using Gemini Omni Model

• Google introduced Video Remix in Google Photos using the Gemini Omni model.
• Video Remix is now available for eligible Google AI Plus, Pro, and Ultra subscribers in select countries starting
```

### No. 1227: Gemini Omni Video Gen Quick Take $Googl Rolled

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CHItrader
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

GEMINI OMNI VIDEO GEN QUICK TAKE

$GOOGL rolled out Gemini Omni to replace Veo.

#### 提示詞

```text
GEMINI OMNI VIDEO GEN QUICK TAKE

$GOOGL rolled out Gemini Omni to replace Veo. Chat your way into video creation and editing using text, photos, or clips.

🔹 Remix gallery stuff, templates, or build from scratch
🔹 Easy edits like swap backgrounds, styles, or add your AI avatar
```

### No. 1228: Just In: China Financial News Agency, July 9

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alpha Wire
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Just in: China Financial News Agency, July 9 th, Google announced that Google Photos has launched a video mixing and editing function driven by the Gemini Omni model, which will be gradually launched 

#### 提示詞

```text
Just in: China Financial News Agency, July 9 th, Google announced that Google Photos has launched a video mixing and editing function driven by the Gemini Omni model, which will be gradually launched today for eligible Google AI Plus, PRO and Ultra.

China Financial News Agency,
```

### No. 1229: 🎬 عاجل | Google تضيف ميزة جديدة إلى

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** أخبار التقنية 🌍
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074908316103250312.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074908316103250312.mp4" controls muted playsinline width="720"></video>

#### 描述

🎬 عاجل | Google تضيف ميزة جديدة إلى Google Photos: أعلنت الشركة إطلاق Video Remix، وهي أداة مدعومة بـ Gemini Omni تتيح تحويل مقاطع الفيديو العادية إلى فيديوهات بأساليب فنية متنوعة، مع إمكانية تغيير ال

#### 提示詞

```text
🎬 عاجل | Google تضيف ميزة جديدة إلى Google Photos: أعلنت الشركة إطلاق Video Remix، وهي أداة مدعومة بـ Gemini Omni تتيح تحويل مقاطع الفيديو العادية إلى فيديوهات بأساليب فنية متنوعة، مع إمكانية تغيير الخلفية، وتحسين الإضاءة، وإضافة تأثيرات مثل Watercolor وOil Painting ببضع نقرات
```

### No. 1230: Found The Tool You Were Looking For... Now

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Found the tool you were looking for...

#### 提示詞

```text
Found the tool you were looking for... now what? 😏🔧

🩶 McKenna Grace 
🩷 Sadie Sink 
🤍 Ana de Armas 

Nano Banana 2 🍌 via Gemini 

Prompt Below 👇
```

### No. 1231: I Just Replaced A $10,000 Business Strategist With

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** PolyBender
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074910405302853915.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074910405302853915.mp4" controls muted playsinline width="720"></video>

#### 描述

I JUST REPLACED A $10,000 BUSINESS STRATEGIST WITH A SINGLE CLAUDE FABLE 5 CHAT

Stop treating AI as a simple content generator and start using it to architect entire empires.

#### 提示詞

```text
I JUST REPLACED A $10,000 BUSINESS STRATEGIST WITH A SINGLE CLAUDE FABLE 5 CHAT

Stop treating AI as a simple content generator and start using it to architect entire empires. I recently took a creator account with zero monetization and, in one single chat session, transformed it
```

### No. 1232: Talk. It Edits. Gemini Omni Flash Makes Pro

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice The Ai Expert
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Talk.

#### 提示詞

```text
@GoogleAIStudio Talk. It edits. Gemini Omni Flash makes pro video feel like a conversation.
```

### No. 1233: Image Created On Nano Banana Pro🍌🍌🍌 Save It

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alex Prompts
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Image created on Nano Banana Pro🍌🍌🍌 Save it for yourself and take cool photos

Upload photo of yourself and add Prompt:👇👇👇👇👇
{
  "prompt": "A vertical triptych collage of three amateur phone shots fea

#### 提示詞

```text
👇👇👇👇👇
{
  "prompt": "A vertical triptych collage of three amateur phone shots featuring a subject in a dark forest at sunset. \n\n***IDENTITY https://t.co/uCsLjnJied
```

### No. 1234: Google Just Brought Generative Video Editing Directly Into

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Maestry | AI News
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google just brought generative video editing directly into Google Photos.

#### 提示詞

```text
Google just brought generative video editing directly into Google Photos. 

​Powered by Gemini Omni, the new "Video Remix" feature lets users swap backgrounds, fix lighting, and apply stylized artistic effects (like watercolor and oil painting) with a few taps.
```

### No. 1235: Reference Images Give Ai Video Generation Clearer Creative

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** RunDiffusion.com
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074912977698816085.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074912977698816085.mp4" controls muted playsinline width="720"></video>

#### 描述

Reference images give AI video generation clearer creative direction.

#### 提示詞

```text
Reference images give AI video generation clearer creative direction.

Gemini Omni Flash Reference Video is now available on RunDiffusion, giving professional teams a practical way to create short videos from a prompt and up to 4 reference images.

Guide the subject, visual
```

### No. 1236: I Love The New Video Remix Feature In

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** shimrit ben-yair
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074913606747992475.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074913606747992475.mp4" controls muted playsinline width="720"></video>

#### 描述

I love the new Video Remix feature in Google Photos!

#### 提示詞

```text
I love the new Video Remix feature in Google Photos! Powered by our Gemini Omni model, Video Remix lets you create stylized, ready to share clips using easy templates in the Create tab. Some of my favorite things to do are relighting my videos for different moods, swapping out
```

### No. 1237: One Day Off From Games Means It'S Time

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

One day off from games means it's time for some tourist activities!

#### 提示詞

```text
One day off from games means it's time for some tourist activities!

Aespa and Blackpink traveling 🇺🇸

Nano Banana Pro via AI Studio, prompt 👇
```

### No. 1238: New Google Photos Ai Tool Instantly Fixes Badly

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** iBrokeit
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

New Google Photos AI Tool Instantly Fixes Badly Lit Videos: Google has launched Video Remix for its subscribers, using its Gemini Omni AI model to change lighting, swap backgrounds, and stylize video 

#### 提示詞

```text
New Google Photos AI Tool Instantly Fixes Badly Lit Videos: Google has launched Video Remix for its subscribers, using its Gemini Omni AI model to change lighting, swap backgrounds, and stylize video clips. 

The post New Google Photos AI Tool Instantly…
```

### No. 1239: 🚨 Google Photos Gets A New Ai Feature

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Indian Trends Hub
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🚨 Google Photos gets a new AI feature: Video Remix.

#### 提示詞

```text
🚨 Google Photos gets a new AI feature: Video Remix.

Powered by Google's Gemini Omni model, it can transform your videos into different creative styles with AI.
```

### No. 1240: One App With Nano Banana Pro, Kling, Flux

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** vorty
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074923094653690033.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074923094653690033.mp4" controls muted playsinline width="720"></video>

#### 描述

one app with nano banana pro, kling, flux 2 and a dozen more generation models.

#### 提示詞

```text
one app with nano banana pro, kling, flux 2 and a dozen more generation models. images, video, audio in one window. type a prompt, hit generate

looks convenient. and at first glance this is what infobiz charges a subscription for. let me look at what is under the hood

what is
```

### No. 1241: Sadie Sink - Gemini Nano Banana Pro Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Sadie Sink - Gemini Nano Banana Pro

Prompt:
{
  "vibe_title_en": "Inside the Anachronistic Chaos",
  "hook_psychology_en": "The stark contrast between the gloomy, crowded, and dirty texture of the Vi

#### 提示詞

```text
{
  "vibe_title_en": "Inside the Anachronistic Chaos",
  "hook_psychology_en": "The stark contrast between the gloomy, crowded, and dirty texture of the Victorian era and the hyper-modern, architectural fashion on the protagonist https://t.co/ORtH1gp5Xz
```

### No. 1242: Google Put Gemini Omni Flash Into Public Preview

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** HIGHLY EVOLVED PLANT
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google put Gemini Omni Flash into public preview on June 30.

#### 提示詞

```text
Google put Gemini Omni Flash into public preview on June 30. It generates 3 to 10 second videos from a prompt and you revise them by talking to it, no timeline, no editing software. 

What it means for you: testing a video hook used to cost a videographer's day. Now it costs a
```

### No. 1243: Most People Are Paying For Ai Tools They

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aman
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Most people are paying for AI tools they don’t even need.

#### 提示詞

```text
Most people are paying for AI tools they don’t even need.

Google quietly dropped an entire free AI stack that can:

• Generate videos
• Build apps
• Edit images
• Analyze documents
• Create AI agents
• Automate workflows

Here are 12 free Google AI tools worth using in
```

### No. 1244: 🚨 $Googl Google Launches Video Remix In Google

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Emmanuel – Big Tech & AI Investor
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🚨 $GOOGL   GOOGLE LAUNCHES VIDEO REMIX IN GOOGLE PHOTOS

Google has introduced Video Remix in Google Photos, powered by its Gemini Omni AI model.

#### 提示詞

```text
🚨 $GOOGL   GOOGLE LAUNCHES VIDEO REMIX IN GOOGLE PHOTOS

Google has introduced Video Remix in Google Photos, powered by its Gemini Omni AI model.

🎥 Available starting today for eligible:

Google AI Plus
Google AI Pro
Google AI Ultra

...subscribers in select countries.

What
```

### No. 1245: Seedream 5 Image Model With Editing Features, Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heather Cooper
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Seedream 5 image model with editing features, Gemini Omni vs.

#### 提示詞

```text
@Farah_ai_ Seedream 5 image model with editing features, Gemini Omni vs. Seedance 2 video-to-video background changes, Fable 5...
```

### No. 1246: Getting A Little Close With Another Group 😘

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Getting a little close with another group 😘

Momo and Winter
Yujin and Rose
Sana and Karina
Wonyoung and Lisa

Nano Banana Pro via AI Studio, prompt ⬇️

#### 提示詞

```text
Getting a little close with another group 😘

Momo and Winter
Yujin and Rose
Sana and Karina
Wonyoung and Lisa

Nano Banana Pro via AI Studio, prompt ⬇️
```

### No. 1247: Tftt ! 💜 Here’S My Take On The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 𝓑𝓲𝓬_𝓡𝓮𝓿𝓮𝓵𝓪𝓽𝓲𝓸𝓷
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

TFTT  !

#### 提示詞

```text
TFTT @Viper_Tattoo_ ! 💜

Here’s my take on the chain: “A Zodiac Food House Experience”

Left: Seedream v5 Pro
Right: Nano Banana Lite  
Same prompt, two different models. Check the ALT text for details.

Tagging 5 artists whose work I enjoy:
@KeikoYetter
```

### No. 1248: Meta Released Muse Image And Muse Video Yesterday

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** The Blessed Sage
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Meta released Muse Image and Muse Video yesterday, the first media models from Alexandr Wang’s Superintelligence Labs.

#### 提示詞

```text
Meta released Muse Image and Muse Video yesterday, the first media models from Alexandr Wang’s Superintelligence Labs. One design decision separates them from everything else on the market.

GPT Image 2 and Grok Imagine both take a prompt and paint. OpenAI’s model reasons
```

### No. 1249: Fala Joao… Acham Q O Limite Da Ia

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** caio
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

fala joao… acham q o limite da ia é usar o nano banana mandando prompt de 2 linhas

#### 提示詞

```text
@joaoaneles fala joao… acham q o limite da ia é usar o nano banana mandando prompt de 2 linhas
```

### No. 1250: My First "Seedream 5 Pro" Test And It

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ash
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

My first "Seedream 5 Pro" test and it will be against "ChatGPT Image 2." 

Nano Banana 2 Lite was binned in the reply.

#### 提示詞

```text
https://t.co/XdGdFA9K29
```

### No. 1251: I Should Never Be Sharing This. He'S Sharing

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hawking
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074941590032748655.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074941590032748655.mp4" controls muted playsinline width="720"></video>

#### 描述

I should never be sharing this.

#### 提示詞

```text
I should never be sharing this. He's sharing it with everyone who comments OMNI.

Same pattern every time. Manufactured scarcity around something being broadcast to thousands. "F*ck it" signals authenticity while the mechanic is pure engagement farming.

The technical claims
```

### No. 1252: $Meta Just Launched Muse Image, Its First In-House

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alphatopia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

$META just launched Muse Image, its first in-house AI image model.

#### 提示詞

```text
$META just launched Muse Image, its first in-house AI image model. For a company spending up to $145B this year, this is what that money is meant to become.
What it does:

Generates and edits images from plain-language prompts, right inside Meta AI, Instagram, and WhatsApp

It is
```

### No. 1253: Let'S Make This Evening Shine With Beauty, Style

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Let's make this evening shine with beauty, style, and art!🌟
Good night, sleep well!💫

Emma Myers, Freya Allan, Sophie Thatcher, McKenna Grace 💛
👉🏻Subscribe for more content!🔥

Nano Banana Pro via Hail

#### 提示詞

```text
{
  "scene": "High-fashion editorial portrait in a luxury https://t.co/qOJTBCwWkL https://t.co/XBzMm0snu7
```

### No. 1254: Prompt Interpretation Has Dramatically Declined In Quality In

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Frontier Modal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Prompt interpretation has dramatically declined in quality in image editing since Nano Banana Pro came out, and the issue with images degrading if you edit them multiple times.

#### 提示詞

```text
@joshwoodward @GeminiApp Prompt interpretation has dramatically declined in quality in image editing since Nano Banana Pro came out, and the issue with images degrading if you edit them multiple times.
```

### No. 1255: Gemini Omni Flash Is Perfect For ‘Animate The

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** getimg.ai
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074948887698096374.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074948887698096374.mp4" controls muted playsinline width="720"></video>

#### 描述

Gemini Omni Flash is perfect for ‘animate the still’ experiments.

#### 提示詞

```text
‘turn this travel poster into a moving postcard: clouds drift, gulls cross frame, ocean shimmer, relaxed camera sway, 10s’. 
Clean, simple, addictive. https://t.co/9HG7wc0cmq
```

### No. 1256: [Reuters] Google Launches Video Remix In Google Photos

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Violence is a construct
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

[REUTERS] Google Launches Video Remix In Google Photos Powered By Gemini Omni Model

#### 提示詞

```text
[REUTERS] Google Launches Video Remix In Google Photos Powered By Gemini Omni Model
```

### No. 1257: Google Photos Devient-Il Le Nouveau Studio De Montage

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** IA-Medias
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google Photos devient-il le nouveau studio de montage vidéo ?

#### 提示詞

```text
Google Photos devient-il le nouveau studio de montage vidéo ?

Oui, avec « Video Remix » et Gemini Omni, Google Photos intègre un éditeur vidéo dopé à l'IA pour transformer vos clips en un clin d'œil.

À lire sur IA-Medias

🔗 lien en bio
```

### No. 1258: Sleek Sophisticated Effortless Elegance In The Studio Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Talia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Sleek  Sophisticated Effortless elegance in the studio

Nano banana pro 2 on Gemini

Prompt:

high-fashion editorial studio portrait of a
beautiful young curvy woman seated gracefully
on a modern blac

#### 提示詞

```text
high-fashion editorial studio portrait of a
beautiful young curvy woman seated gracefully
on a modern black chair in a luxury fashion studio. She has bright fair, glam makeup, long dark https://t.co/KPcnrBsU4G
```

### No. 1259: Nano Banana Pro 2 On Gemini Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lipstick
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano banana pro 2 on Gemini  Prompt:

#### 提示詞

```text
#shalwarKameez https://t.co/g2CYjvqKo4
```

### No. 1260: Google Photos Rolling Out ‘Video Remix’ Powered By

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AIVAnet
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google Photos rolling out ‘Video Remix’ powered by Gemini Omni

#### 提示詞

```text
Google Photos rolling out ‘Video Remix’ powered by Gemini Omni
```

### No. 1261: Nano Banana Pro 2 On Gemini Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lipstick
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano banana pro 2 on Gemini  Prompt:

#### 提示詞

```text
https://t.co/T1C2gdAjlv
```

### No. 1262: Introducing Video Remix In 📹 Powered By Our

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Google
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074958687983010116.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074958687983010116.mp4" controls muted playsinline width="720"></video>

#### 描述

Introducing Video Remix in  📹 Powered by our Gemini Omni model, it lets you reimagine your videos in new styles with a library of easy-to-use templates.

#### 提示詞

```text
Introducing Video Remix in @GooglePhotos. 📹 Powered by our Gemini Omni model, it lets you reimagine your videos in new styles with a library of easy-to-use templates. 

To get started, simply select Video Remix in the Create tab. You’ll be able to instantly apply cinematic
```

### No. 1263: Seedream 5.0 Pro Is Out! This Image Went

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** ΛRMIN
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Seedream 5.0 Pro is out!

#### 提示詞

```text
Seedream 5.0 Pro is out!

This image went viral the moment Nano Banana Pro dropped. So I tested the exact same prompt with Seedream 5 Pro and 3 other models.

- Which output do you prefer? 👀
▶Seedream 5.0 Pro
▶Nano Banana Pro
▶GPT Image 2
▶Grok Imagine
```

### No. 1264: Imposing Stares! Tzuyu Sana Nayeon Mina Twice Nano

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alice H.
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Imposing stares!

#### 提示詞

```text
Imposing stares!

Tzuyu
Sana
Nayeon
Mina

Twice

Nano Banana Pro via AI Studio, prompt ⬇
```

### No. 1265: A 29 Year Old In Fresno Makes $16,200

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CRYPTANSKY
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074961471092498575.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074961471092498575.mp4" controls muted playsinline width="720"></video>

#### 描述

a 29 year old in fresno makes $16,200 a month off a girlfriend he built from two strangers he found on pinterest.

#### 提示詞

```text
a 29 year old in fresno makes $16,200 a month off a girlfriend he built from two strangers he found on pinterest.

no camera. no model. no studio.

a source photo, a face-merge in an app called nano banana, and a button in the corner that does not say post. it says EARN.

the app
```

### No. 1266: Meta Muse Social &Amp; Privacy Features, Opt-Out If

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** U.Senthil Kumar
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Meta Muse Social &amp; Privacy Features, 

Opt-out if you don't want your photos used.

#### 提示詞

```text
Meta Muse Social &amp; Privacy Features, 

Opt-out if you don't want your photos used. 

Invisible watermarks. Muse beats Google's Nano Banana 2, trails OpenAI. Free basic, subscription for heavy use.

Muse Video coming next .
```

### No. 1267: Jersey Prompt - Gs Created With Nano Banana

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** mertzabun.ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Jersey Prompt - Gs

Created with Nano Banana on King of Prompt.

#### 提示詞

```text
Jersey Prompt - Gs

Created with Nano Banana on King of Prompt.

Web App &amp; Instagram links are in bio — comment under our Instagram posts or visit the website to get the prompt.
```

### No. 1268: 🚨 Google Photos Lanza Video Remix Con Ia

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Diario฿itcoin
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🚨 Google Photos lanza Video Remix con IA 🚨

Una herramienta que edita videos en segundos usando Gemini Omni.

#### 提示詞

```text
🚨 Google Photos lanza Video Remix con IA 🚨

Una herramienta que edita videos en segundos usando Gemini Omni. 

Transformaciones sencillas y visuales en la pestaña "Crear". 

Estará disponible para suscriptores en 14 países, incluyendo México y Argentina. 

La IA busca
```

### No. 1269: Meta Just Launched Muse Image — Its First

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Teksart
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Meta just launched Muse Image — its first in-house image generation model — and it does something no other model can.

#### 提示詞

```text
Meta just launched Muse Image — its first in-house image generation model — and it does something no other model can.

You can @-mention any public Instagram account in your prompt, and Muse Image pulls their photos as visual references. Want to design an event invite that
```

### No. 1270: معالجة الفيديوهات المعقدة؟ عهدها انتهى رسميًا! 🤫🎬🔥 شركة

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mo Elgaraihy
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

معالجة الفيديوهات المعقدة؟ عهدها انتهى رسميًا!

#### 提示詞

```text
معالجة الفيديوهات المعقدة؟ عهدها انتهى رسميًا! 🤫🎬🔥

شركة Google تفجر ميزة Video Remix الجديدة كليًا داخل تطبيق Google Photos؛ الحين تقدر تحول أي فيديو عادي عندك في الأستوديو إلى فيلم سينمائي بلمسات بسيطة، بدون برامج مونتاج معقدة ولا تضييع وقت!

🎯 الترسانة البصرية في ميزة
```

### No. 1271: Deepmind这两天推出了Gemini Omni Flash模型，核心定位是能够从任意输入创建任何内容的模型，以视频生成为起点。这个模型融合了Gemini的世

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Shen
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

DeepMind这两天推出了Gemini Omni Flash模型，核心定位是能够从任意输入创建任何内容的模型，以视频生成为起点。这个模型融合了Gemini的世界理解能力与生成媒体技术，支持通过自然语言进行对话式、逐步迭代的视频生成与编辑，能够保持场景的一致性和连贯性。

#### 提示詞

```text
DeepMind这两天推出了Gemini Omni Flash模型，核心定位是能够从任意输入创建任何内容的模型，以视频生成为起点。这个模型融合了Gemini的世界理解能力与生成媒体技术，支持通过自然语言进行对话式、逐步迭代的视频生成与编辑，能够保持场景的一致性和连贯性。
```

### No. 1272: Photos Launches Video Remix With Gemini Omni 🎬

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Eugenio Fierro
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074975235116523760.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074975235116523760.mp4" controls muted playsinline width="720"></video>

#### 描述

Photos launches Video Remix with Gemini Omni

🎬 Google has introduced Video Remix in Google Photos, a new feature powered by Gemini Omni that lets users turn ordinary videos into stylized, shareable c

#### 提示詞

```text
@Google Photos launches Video Remix with Gemini Omni

🎬 Google has introduced Video Remix in Google Photos, a new feature powered by Gemini Omni that lets users turn ordinary videos into stylized, shareable clips in just a few taps.
The idea is simple: open the Create tab,
```

### No. 1273: Gemini Would Be Dead, But It Has To

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Daddy Jim Headquarters
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini would be dead, but it has to stay alive because Google search will have a reliance on it.

#### 提示詞

```text
@Star_Knight12 Gemini would be dead, but it has to stay alive because Google search will have a reliance on it. Nano banana and Omni flash for video are fantastic, but there are local models that are beating Gemini 3.1 Pro and don't even ask about Flash 💀
```

### No. 1274: Google Photos, Kullanıcıların Sıradan Videolarını Kolay Anlaşılır Şablonlar

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** airehber.com.tr
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google Photos, kullanıcıların sıradan videolarını kolay anlaşılır şablonlar yardımıyla saniyeler içinde stilize kliplere dönüştürmesini sağlayan, çoklu modlu Gemini Omni modelinden güç alan yeni Video

#### 提示詞

```text
Google Photos, kullanıcıların sıradan videolarını kolay anlaşılır şablonlar yardımıyla saniyeler içinde stilize kliplere dönüştürmesini sağlayan, çoklu modlu Gemini Omni modelinden güç alan yeni Video Remix özelliğini duyurdu.

 

#GooglePhotos #VideoRemix
```

### No. 1275: 出典: Meta公式発表 / Techcrunch(2026-07-07) 補足: MuseはMeta Superintelligence Labs製。Goog

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** サム｜AI × Xマネタイズのプロ
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

出典: Meta公式発表 / TechCrunch(2026-07-07)


補足: MuseはMeta Superintelligence Labs製。Google Nano Banana 2を一部評価で上回り、画質はGPTの最新画像モデルに次ぐ位置づけ。動画版「Muse Video」も開発中。

#### 提示詞

```text
出典: Meta公式発表 / TechCrunch(2026-07-07)


補足: MuseはMeta Superintelligence Labs製。Google Nano Banana 2を一部評価で上回り、画質はGPTの最新画像モデルに次ぐ位置づけ。動画版「Muse Video」も開発中。
```

### No. 1276: 【7/9】今日のAiハイライト！ 僕が注目した重要ニュース3選をお届けします。 1. Spacexaiが「Grok 4.5」公開。Opus級とMusk氏自信。 

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Shunta Furukawa
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

【7/9】今日のAIハイライト！

#### 提示詞

```text
【7/9】今日のAIハイライト！
僕が注目した重要ニュース3選をお届けします。

1. SpaceXAIが「Grok 4.5」公開。Opus級とMusk氏自信。
2. OpenAIが双方向音声「GPT-Live」発表、超自然な会話が可能に。
3. GoogleフォトにGemini Omni活用の動画編集「Video Remix」登場。
```

### No. 1277: If I Had A Gun To My Head

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J.0rganic
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074988516631536096.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074988516631536096.mp4" controls muted playsinline width="720"></video>

#### 描述

IF I HAD A GUN TO MY HEAD and had to hit 
$50K–$100K/month selling physical products with AI avatars on short form (starting from 0) in the next 30 days… here’s exactly what I’d do:

1.

#### 提示詞

```text
IF I HAD A GUN TO MY HEAD and had to hit 
$50K–$100K/month selling physical products with AI avatars on short form (starting from 0) in the next 30 days… here’s exactly what I’d do:

1. Set up your phone to target the US

Buy a used iPhone ($150)
And a US SIM card ($20)

Reset
```

### No. 1278: 🎬 Google PhotosにAi動画編集「Video Remix」登場！ ✨ Google Photosに、Aiが動画を映画風やアニメ風などへワンタップで変

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 他力code | コバッチ
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

🎬 Google PhotosにAI動画編集「Video Remix」登場！

#### 提示詞

```text
🎬 Google PhotosにAI動画編集「Video Remix」登場！

✨ Google Photosに、AIが動画を映画風やアニメ風などへワンタップで変換する「Video Remix」が追加されます。Gemini
```

### No. 1279: 🤩 𝗚𝗼𝗼𝗴𝗹𝗲 𝗣𝗵𝗼𝘁𝗼𝘀 𝗟𝗮𝘂𝗻𝗰𝗵𝗲𝘀 𝗩𝗶𝗱𝗲𝗼 𝗥𝗲𝗺𝗶𝘅, 𝗔𝗜-𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗖𝗹𝗶𝗽

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gen AI Spotlight
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2074992719529730527.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2074992719529730527.mp4" controls muted playsinline width="720"></video>

#### 描述

🤩 𝗚𝗼𝗼𝗴𝗹𝗲 𝗣𝗵𝗼𝘁𝗼𝘀 𝗟𝗮𝘂𝗻𝗰𝗵𝗲𝘀 𝗩𝗶𝗱𝗲𝗼 𝗥𝗲𝗺𝗶𝘅, 𝗔𝗜-𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗖𝗹𝗶𝗽 𝗖𝗿𝗲𝗮𝘁𝗶𝗼𝗻 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗚𝗲𝗺𝗶𝗻𝗶 𝗢𝗺𝗻𝗶

Google Photos is rolling out Video Remix today, a feature powered by Gemini Omni that turns ordinary videos into 

#### 提示詞

```text
🤩 𝗚𝗼𝗼𝗴𝗹𝗲 𝗣𝗵𝗼𝘁𝗼𝘀 𝗟𝗮𝘂𝗻𝗰𝗵𝗲𝘀 𝗩𝗶𝗱𝗲𝗼 𝗥𝗲𝗺𝗶𝘅, 𝗔𝗜-𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗖𝗹𝗶𝗽 𝗖𝗿𝗲𝗮𝘁𝗶𝗼𝗻 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗚𝗲𝗺𝗶𝗻𝗶 𝗢𝗺𝗻𝗶

Google Photos is rolling out Video Remix today, a feature powered by Gemini Omni that turns ordinary videos into stylized
```

### No. 1280: Just In: U.S. Stocks Were Mixed, Alibaba Soared

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alpha Wire
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Just in: U.S.

#### 提示詞

```text
Just in: U.S. stocks were mixed, Alibaba soared 11%, the Fed minutes showed significant differences.

On July 8 (Wednesday), Eastern Time, the three major U.S. stock indexes had mixed trends, with the S&amp;P 500 (SPX) index falling 0.28% to 7,482.71 points; the Dow Jones Index
```

### No. 1281: I Generated A Song With Suno, Then I

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Arkim Phiri
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

I generated a song with Suno, then I trimmed it to 3 10 seconds segments.

#### 提示詞

```text
@PrunaAI I generated a song with Suno, then I trimmed it to 3 10 seconds segments. I used images generated with Nano Banana 2 as portrait images for each generation. I did 6 generations and added them together using Capcut to make one seamless 30 seconds music video with perfect lip sync
```

### No. 1282: Doing My Part To Make These Streets Safer

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Giulia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

doing my part to make these streets safer.

#### 提示詞

```text
doing my part to make these streets safer. you’re welcome 🌵🤠

🖤 Alexandra Daddario 
🤎 Karen Gillan

Nano Banana 2 🍌 via Gemini 

Prompt Below 👇
```

### No. 1283: Meta Just Launched Muse Image, Its First In-House

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AI Tower
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Meta just launched Muse Image, its first in-house AI image model from Alexandr Wang's Superintelligence Labs, and it's already sitting at No.

#### 提示詞

```text
Meta just launched Muse Image, its first in-house AI image model from Alexandr Wang's Superintelligence Labs, and it's already sitting at No. 2 on Arena's text-to-image and editing leaderboards, just behind OpenAI's GPT Image 2.

→ Muse Image pairs with Meta's Muse Spark for
```

### No. 1284: Google Photosがもはや「別アプリ」になってきた件📱✨ （Aiエンジニア＆テックライターが解説🔍） ◾️何が起きたか？ GoogleがGoogle P

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ai先生
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google Photosがもはや「別アプリ」になってきた件📱✨
（AIエンジニア＆テックライターが解説🔍）

◾️何が起きたか？

#### 提示詞

```text
Google Photosがもはや「別アプリ」になってきた件📱✨
（AIエンジニア＆テックライターが解説🔍）

◾️何が起きたか？
GoogleがGoogle Photosに「Video Remix」という新機能を追加しました。
AIが数タップで動画を丸ごと別物に変換してくれるんです。
```

### No. 1285: Nano Banana Pro Is The Most Pleasant Infographics

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alex Volkov @ AI Engineer
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Nano Banana Pro is the most pleasant infographics maker, the data has room to breathe.

#### 提示詞

```text
Nano Banana Pro is the most pleasant infographics maker, the data has room to breathe. But it's really really bad at input consistency, every Alex is different on every gen. I even have my eye color in the prompt and it's still not getting me correctly. Everything else tho...
```

### No. 1286: GoogleフォトにVideo Remixが来るみたい。Gemini Omniで動画の雰囲気をさっと変えたり、水彩やスケッチ風の質感を足したり、背景や光まで軽く

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** P@M
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

GoogleフォトにVideo Remixが来るみたい。Gemini Omniで動画の雰囲気をさっと変えたり、水彩やスケッチ風の質感を足したり、背景や光まで軽く触れるの面白そう。写真アプリの延長で動画までここまで遊べるの、けっこう気になります🙂

#### 提示詞

```text
GoogleフォトにVideo Remixが来るみたい。Gemini Omniで動画の雰囲気をさっと変えたり、水彩やスケッチ風の質感を足したり、背景や光まで軽く触れるの面白そう。写真アプリの延長で動画までここまで遊べるの、けっこう気になります🙂
```

### No. 1287: 10 Retro Nano Banana 3D Figurine Prompts 🔹

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Tips Excel
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

10 Retro Nano Banana 3D Figurine Prompts

🔹 Prompt: Turn the image into a pop art-style 3D figurine, featuring bold colors, halftone dots, and comic-book speech bubbles around the character.

#### 提示詞

```text
Turn the image into a pop art-style 3D figurine, featuring bold colors, halftone dots, and comic-book speech bubbles around the character.

🔹 Prompt: Make a collectible figure inspired by 1950s diners, with a checkered floor
```

### No. 1288: This Is What I Got Lol Of Course

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** TGSATE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

This is what I got lol Of course I don’t have enough tokens for Grok to generate it, so I asked him for a prompt and fed it to Gemini’s nano banana.

#### 提示詞

```text
@VoidStateKate @grok This is what I got lol Of course I don’t have enough tokens for Grok to generate it, so I asked him for a prompt and fed it to Gemini’s nano banana. 🤷‍♀️ But I have grok in “council mode” and these are all his personalities.
```

### No. 1289: Models Available On (Byok Friendly) Video Models Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Zach
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Models available on  (BYOK friendly)

Video Models
Gemini Omni Flash 
Seedance 2.0
Seedance 2.0 Fast
Seedance 2.0 Mini
Grok Imagine Video 1.5 
Grok Imagine Video 1.5 Fast (new)
Happy Horse 1.1
Veo 3.1

#### 提示詞

```text
Models available on  (BYOK friendly)

Video Models
Gemini Omni Flash 
Seedance 2.0
Seedance 2.0 Fast
Seedance 2.0 Mini
Grok Imagine Video 1.5 
Grok Imagine Video 1.5 Fast (new)
Happy Horse 1.1
Veo 3.1
Veo 3.1 Fast
Veo 3.1 Lite
Kling 3.0 Turbo
Kling 3.0 Omni
```

### No. 1290: Google Photos Now Lets You “Remix” Your Videos

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Eraldo Frangipane
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Google Photos now lets you “remix” your videos with AI.

#### 提示詞

```text
Google Photos now lets you “remix” your videos with AI.

Google’s Video Remix feature, running on Gemini Omni, adds new editing options like “cinematic relighting,” custom backgrounds, and “artistic treatments” such as watercolor and sketchbook effects. The AI video editing
```

### No. 1291: Gm Gn 距离2027年仅剩179天，中文区都在讨论Gate资金被盗的情况，这位兄台思路很明确，舆论压制，然后报警立案，我经历过。 看看今天Ai圈有啥新闻(萨

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Polo1.4 贱🕊️买美股上币安
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

GM GN

距离2027年仅剩179天，中文区都在讨论gate资金被盗的情况，这位兄台思路很明确，舆论压制，然后报警立案，我经历过。

#### 提示詞

```text
GM GN

距离2027年仅剩179天，中文区都在讨论gate资金被盗的情况，这位兄台思路很明确，舆论压制，然后报警立案，我经历过。

看看今天Ai圈有啥新闻(萨顿要来上海了)

polo的AI日报 7月9日，20条精选 ⬇️

1. OpenAI
```

### No. 1292: Amazing Triptych Prompt Nano Banana Crushed It

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Hania Ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Amazing triptych prompt  Nano Banana crushed it.

#### 提示詞

```text
@codewithhajra Amazing triptych prompt  Nano Banana crushed it.
```

### No. 1293: Peacefull Vibe 🥹 Google Nano Banana 2 Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glowecho
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Peacefull Vibe 🥹

Google Nano Banana 2

Prompt:
A photorealistic portrait of a beautiful young South Indian woman sitting casually on vibrant green grass, legs crossed, body slightly turned toward the

#### 提示詞

```text
A photorealistic portrait of a beautiful young South Indian woman sitting casually on vibrant green grass, legs crossed, body slightly turned toward the camera while her head is turned to her right, gazing off-camera with a soft, https://t.co/SreVMkcpoX
```

### No. 1294: Peacefull ✌️ Sadie Sink Billie Eilish Sydney Sweeney

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sadie 🥀
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Peacefull ✌️ 

Sadie Sink 
Billie Eilish 
Sydney Sweeney 
Megan Fox 

Nano banana pro prompt:
A photorealistic portrait of a beautiful young South Indian woman sitting casually on vibrant green grass,

#### 提示詞

```text
A photorealistic portrait of a beautiful young South Indian woman sitting casually on vibrant green grass, legs crossed, body slightly turned toward the camera while her head is turned https://t.co/MyGFExvT1d https://t.co/ZJ37u5Cy99
```

### No. 1295: Image On Google Gemini Nano Banana 2. Prompt

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Image on Google Gemini Nano Banana 2.

#### 提示詞

```text
Use the exact same face from the reference image and generate a dark creative cinematic portrait where the iconic X logo is architecturally embedded and alive within the background — not printed, not projected, but existing as if https://t.co/WBS9jFBO6e
```

### No. 1296: Introducing Globalgpt Your All-In-One Ai Workspace 👉 Chat

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Shami
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2075032563727655139.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2075032563727655139.mp4" controls muted playsinline width="720"></video>

#### 描述

Introducing GlobalGPT  Your all-in-one AI workspace

👉 

Chat →  GPT-5.5, Gemini 3.5 flash, Claude Opus 4.8...

#### 提示詞

```text
@GlbGPT Introducing GlobalGPT @GlbGPT: Your all-in-one AI workspace

👉 

Chat →  GPT-5.5, Gemini 3.5 flash, Claude Opus 4.8...
AI image → GPT-IMAGE-2, Nano Banana 2...
AI video → Seedance 2.0, Grok Imagine video 1.5, Sora 2, Kling 3.0...
AI audio → Eleven Lab
```

### No. 1297: On July 8, Google Launched An Ai Tool

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AwesomeAI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

On July 8, Google launched an AI tool called "Video Remix" in Google Photos, powered by the Gemini Omni processor.

#### 提示詞

```text
On July 8, Google launched an AI tool called "Video Remix" in Google Photos, powered by the Gemini Omni processor. It allows ordinary users to complete cinematic video conversion and trimming with one click in the "Create" tab, without professional skills.....
```

### No. 1298: Main Character Energy 🔥 Image On Google Gemini

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Main Character Energy 🔥

Image on Google Gemini Nano banana 2.

#### 提示詞

```text
Use the exact same face from the reference image and generate a bold confident cinematic portrait with the subject sitting powerfully on a chair against a striking yellow background — clean, punchy, and https://t.co/B2tHS4qOuu
```

### No. 1299: Ai工具圈最新动态：Meta Muse图像生成器、腾讯Hy3开源代理工具、Google Nano Banana 2 Lite模型、Bytedance Seed 

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Charles
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

AI工具圈最新动态：Meta Muse图像生成器、腾讯Hy3开源代理工具、Google Nano Banana 2 Lite模型、ByteDance Seed Audio 1.0发布。AI视频工具正爆发，内容创作效率飙升。企业级如AWS AI购物助手转化率翻三倍。开发者关注开源选项如claude-video。探索这些工具，拥抱AI未来！

#### 提示詞

```text
AI工具圈最新动态：Meta Muse图像生成器、腾讯Hy3开源代理工具、Google Nano Banana 2 Lite模型、ByteDance Seed Audio 1.0发布。AI视频工具正爆发，内容创作效率飙升。企业级如AWS AI购物助手转化率翻三倍。开发者关注开源选项如claude-video。探索这些工具，拥抱AI未来！#AI工具推荐
```

### No. 1300: She'S Lying On A Ledge A Thousand Feet

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J Bizzle Creative
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2075041802042609846.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2075041802042609846.mp4" controls muted playsinline width="720"></video>

#### 描述

She's lying on a ledge a thousand feet up like it's a Tuesday.

#### 提示詞

```text
She's lying on a ledge a thousand feet up like it's a Tuesday.

No drone. No building. No stunt coordinator having a heart attack off-camera.

This is 100% AI-generated — Nano Banana for the character sheet and keyframe, Seedance 2.0 mini for the motion. One fisheye lens prompt
```

### No. 1301: Gpt Image 2 | Nano Banana 2 |

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dilshad Hussain
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

GPT Image 2 | Nano Banana 2 | Grok | Gemini Prompt 👇

Using uploaded face 100% realistic.

#### 提示詞

```text
GPT Image 2 | Nano Banana 2 | Grok | Gemini Prompt 👇

Using uploaded face 100% realistic.
Create a high-end cinematic fashion poster collage featuring the same young South Asian man from the reference photo, keeping his face highly accurate, natural, and consistent across all
```

### No. 1302: Gemini Nano Banana Images Prompt: Use The Uploaded

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Eesha
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini Nano Banana images

Prompt:

Use the uploaded reference image as the absolute reference.

#### 提示詞

```text
Use the uploaded reference image as the absolute reference. Preserve the exact facial features, proportions, expression, and composition. A hyperrealistic close-up portrait of a young woman with long layered ash-blonde hair featuring soft https://t.co/zcaoINUbHe
```

### No. 1303: Meta Just Killed Its Dependency On Midjourney And

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Teksart
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Meta just killed its dependency on Midjourney and built its own media generation stack from scratch.

#### 提示詞

```text
Meta just killed its dependency on Midjourney and built its own media generation stack from scratch.

Muse Image and Muse Video (preview) launched July 7 — Meta's first in-house image and video models. And they did something genuinely clever.

The killer feature: you can tag an
```

### No. 1304: Gemini Nano Banana Pro Prompt: Absolute Identity Lock

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** simeon-sanai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Gemini nano banana pro

 Prompt:
ABSOLUTE IDENTITY LOCK 
Use the uploaded reference image as the only identity source.

#### 提示詞

```text
ABSOLUTE IDENTITY LOCK 
Use the uploaded reference image as the only identity source. Preserve the exact facial features, face shape, eye shape, eyebrows, nose, lips, skin tone, freckles, hairstyle, proportions, expression, and overall appearance https://t.co/xwiwjOpYER
```

### No. 1305: Created With Nano Banana Pro 🎨 Prompt: A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** lovimg_com
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Nano Banana Pro

🎨 Prompt:
A cinematic macro shot of a small, bright pink flower sprouting through a crack in a cold concrete floor, located exactly within a single dramatic vertical beam

#### 提示詞

```text
A cinematic macro shot of a small, bright pink flower sprouting through a crack in a cold concrete floor, located exactly within a single dramatic vertical beam of golden sunlight. The sunlight, with https://t.co/CyzfGekXav
```

### No. 1306: Created With Nano Banana Pro 🎨 Prompt: A

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** lovimg_com
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

Created with Nano Banana Pro

🎨 Prompt:
A professional 3x3 collage featuring the same beautiful young woman photographed from the reference image with normal hair and eyeglasses from a top-down perspe

#### 提示詞

```text
A professional 3x3 collage featuring the same beautiful young woman photographed from the reference image with normal hair and eyeglasses from a top-down perspective on a soft white textured blanket.
```

### No. 1307: 🔥 Oke, Ini Salah Satu Workflow Ai Video

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** stellar protocol
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2075052325228675525.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2075052325228675525.mp4" controls muted playsinline width="720"></video>

#### 描述

🔥 Oke, ini salah satu workflow AI video yang menarik banget buat dipelajari 🤯

Gue rasa banyak orang masih fokus ke “bikin video AI”, padahal rahasianya bukan cuma di tools… tapi di cara bikin AI mema

#### 提示詞

```text
🔥 Oke, ini salah satu workflow AI video yang menarik banget buat dipelajari 🤯

Gue rasa banyak orang masih fokus ke “bikin video AI”, padahal rahasianya bukan cuma di tools… tapi di cara bikin AI memahami manusia.

Kombinasi kayak:
🧠 Gemini Omni
🎨 GPT Images 2
📱 TikTok
bisa
```

### No. 1308: 年輕印度女性肖像描述

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glowecho
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個詳細提示，用於生成具有特定髮型、膚色和妝容特徵的年輕印度女性肖像。

#### 提示詞

```text
A beautiful young Indian woman in her mid-20s, medium-length dark wavy hair with soft side-swept bangs partially covering one eye, fair-to-light brown skin with natural glow, subtle makeup with glossy pink lips and defined
```

### No. 1309: 寫實臉部參考提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Tomilola _Ruth❤️
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成寫實圖像，同時保留參考臉部身份特徵的提示。

#### 提示詞

```text
Use the uploaded image as the facial reference. Do not change my face, facial features, skin tone, facial structure, or identity. Create a photorealistic
```

### No. 1310: 高樓天際線下天鵝絨沙發上的女性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Justice Studio 2.0
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅寫實照片，呈現夜晚現代公寓中，一位深色濕髮、身穿黑色連身衣的女性，躺在米褐色天鵝絨沙發上的景象。

#### 提示詞

```text
Photorealistic image of a stunning woman with wet dark hair and glistening skin, reclining seductively on a luxurious taupe velvet couch in a modern high-rise apartment at night. She is wearing a sleek black strapless bodysuit. She is holding a large
```

### No. 1311: 喀拉拉邦女性動漫向量街頭風插畫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aijaz
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作細緻向量插畫的提示，描繪一位身穿現代街頭服飾、具有動漫美學風格的年輕女性。

#### 提示詞

```text
Create a highly detailed clean vector illustration of a young Kerala woman in a modern branded streetwear style, inspired by high-end anime vector aesthetics with crisp linework, smooth gradient shading, bold color separation
```

### No. 1312: 目光深邃的成熟男性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成自信、英俊、輪廓分明且留有整齊鬍渣的男性肖像的提示。

#### 提示詞

```text
A handsome, sophisticated man with sharp facial features, a strong jawline, and perfectly groomed light stubble gazes intensely and directly into the lens with a calm, confident expression. His dark hair is swept back
```

### No. 1313: 照片風格線條素描墨水畫臉部

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alex Prompts
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

生成一張照片風格的線條素描或墨水畫臉部圖像。

#### 提示詞

```text
Create a photo-style line drawing / ink sketch of a face identical to the
```

### No. 1314: 夢幻黃金時刻女性肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Isabel
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成黃金時刻下、以鮮豔藍天為背景的年輕女性戶外特寫肖像的提示。

#### 提示詞

```text
A dreamy, ultra-aesthetic close-up portrait of a beautiful young woman outdoors beneath a vivid cobalt-blue sky during golden hour.
```

### No. 1315: 植物超現實主義時尚編輯肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅超寫實的時尚編輯肖像，主角以動態芭蕾舞姿呈現。

#### 提示詞

```text
A breathtaking, hyper-realistic fashion editorial portrait of The Protagonist caught mid-movement in a dynamic, classical ballet pose en pointe. The setting is an
```

### No. 1316: 陶瓷肌膚與妝容細節

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Simply Ray
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成高度真實、呈現陶瓷象牙色調、細緻毛孔及柔和緞面光澤的肌膚的提示。

#### 提示詞

```text
[Skin & Makeup Details] Porcelain ivory skin with a cool-neutral undertone, highly realistic skin texture with fine pores still visible, clean flawless face, soft satin skin effect with a natural glow on the cheekbones, nose, and forehead.
```

### No. 1317: 年輕女性特寫肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成具有特定特徵的年輕女性特寫肖像的JSON提示。

#### 提示詞

```text
{
  "subject": {
    "description": "A stunning close-up young woman with long wavy dark brown hair, tanned skin, https://t.co/PO5ySMCkMw
```

### No. 1318: 空蕩城市中的殭屍滑板手

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heather Green
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一具正在腐爛的殭屍在黃昏時分，沿著佈滿裂痕的城市街道滑著滑板，並帶有戲劇性的側面光線。

#### 提示詞

```text
a decaying zombie riding on a skateboard, tattered clothes flapping in the wind, on an empty cracked city street at dusk, dramatic side lighting casting long eerie shadows
```

### No. 1319: 咖啡館中男性的炭筆素描

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅垂直構圖的炭筆素描，描繪一位英俊男性在繁忙的咖啡館中微笑並手持杯子。

#### 提示詞

```text
A vertical, artistic charcoal sketch capturing a handsome, cute man in a candid moment at a bustling cafe. He is seated at a wooden table, leaning forward with a gentle, genuine smile, holding a small cup of
```

### No. 1320: 緩慢電影感推進鏡頭與細微動態

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** getimg.ai
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2075303977692836130.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2075303977692836130.mp4" controls muted playsinline width="720"></video>

#### 描述

一個影片提示：包含緩慢的電影感推進鏡頭、柔和的光線移動、細微的背景動態，以及在9:16長寬比下營造寫實氛圍。

#### 提示詞

```text
slow cinematic push-in, soft light movement, subtle background motion, realistic atmosphere, 9:16
```

### No. 1321: 白金髮色女性的特寫肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成擁有引人注目特徵和白金髮色女性特寫肖像的提示。

#### 提示詞

```text
A close-up of a woman with striking facial features and platinum blonde hair
```

### No. 1322: 體格健壯年輕人的寫實照片

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成高解析度、體格健壯年輕人的寫實照片的提示。

#### 提示詞

```text
A realistic high-resolution photograph of a fit young
```

### No. 1323: 古老石牆上的日落

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Vireon
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個寧靜的場景：日落時分，金色的光芒灑在古老的石牆上，營造出永恆而平和的氛圍。

#### 提示詞

```text
The sun was slowly dipping below the horizon, casting a warm, golden glow over the old stone walls. It felt as if time had completely stopped in this hidden corner of the world, leaving behind nothing but peace, elegance, and the gentle whisper of the wind.
```

### No. 1324: 職場與人工智慧學院公司標誌

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Rotimi Best
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個為教授企業日常使用人工智慧的學院請求設計簡約標誌的提示。

#### 提示詞

```text
I want a new logo for my academy company, 'Workplace  & AI'

The goal is we want to teach businesses how to use AI day to day. I need a simple logo
```

### No. 1325: 惡魔漫畫網格與超級英雄爆炸

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gadgetify
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成2x2網格的提示，視覺化呈現四部較不知名的惡魔漫畫系列，其中包含一位超級英雄從漫畫中爆發出來的場景。

#### 提示詞

```text
2x2 grid, do this for 4 lesser known manga's about demons: superhero bursts from a vintage comic book into the real world in a chaotic, hyper-detailed top-down explosion
```

### No. 1326: 城市街道上被奶油派砸臉的女牛仔

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** xaiofm
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2075370198639563059.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2075370198639563059.mp4" controls muted playsinline width="720"></video>

#### 描述

一位戴著牛仔帽的女性在城市街道上，經過一番幽默對話後，臉上被砸了一個鮮奶油派。

#### 提示詞

```text
A young woman with long dark hair, wearing a beige cowboy hat, a red lace bralette, and blue jeans, walks casually on a city sidewalk during the day. The camera tracks her, then she turns to face the camera, holding a phone. She smiles and talks. A hand sprays a large amount of whipped cream onto a colorful paper plate she is holding. The camera zooms in on her smiling face. Suddenly, a pie of whipped cream is splatted directly onto her face. She pulls the plate away, revealing her face covered in whipped cream, and laughs joyfully. Realistic, handheld, urban street setting.
```

### No. 1327: 超寫實電影感恐怖片段

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2075377636420059580.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2075377636420059580.mp4" controls muted playsinline width="720"></video>

#### 描述

一個用於創作10秒恐怖影片的提示，靈感來自特定電影，並使用參考圖像作為主角。

#### 提示詞

```text
Create a 10-second ultra-photorealistic cinematic horror sequence inspired by *The Conjuring*, *Smile*, and *Hereditary*. Use the provided reference image as the protagonist. ## STYLE Grounded horror. Minimal visual
```

### No. 1328: 電扶梯上的女性電影感鏡頭

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Maddox
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個電影感場景的提示：一位年輕女性躺在電扶梯上，從高處俯視拍攝，並附有詳細的服裝描述。

#### 提示詞

```text
A young woman lying on an escalator, shot from a high overhead angle, wearing a pale yellow cropped jacket over a blue knit sweater, dark olive green wide-leg cargo pants, beige Adidas sneakers with white stripes, oval
```

### No. 1329: 身穿黑色貓耳巴拉克拉瓦頭套與戰術上衣的女性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成虛構年輕女性圖像的提示，她戴著黑色針織貓耳巴拉克拉瓦頭套並搭配相配的短版戰術上衣。

#### 提示詞

```text
A fictional young woman in a black knit cat-ear balaclava and matching cropped tactical top, shot from a
```

### No. 1330: 電影感雙重曝光時尚海報

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dilshad Hussain
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個使用特定上傳的臉部參考圖像，創建高階、寫實、具有電影感的雙重曝光時尚海報的提示。

#### 提示詞

```text
Using uploaded face 100% realistic. Create a high-end cinematic double-exposure fashion poster using the uploaded reference photo for the same face, hairstyle, beard, skin tone, and facial features. Composition: a large
```

### No. 1331: 金髮女性的寫實肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glowecho
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成擁有白皙皮膚、藍色眼睛和金色長髮的年輕女性全身寫實肖像的詳細提示。

#### 提示詞

```text
A photorealistic full-body portrait of a stunning young woman in her early 20s with fair skin, flawless complexion, and striking bright blue eyes. She has long, straight blonde hair with soft highlights, center-parted and flowing
```

### No. 1332: 年輕女性的寫實肖像畫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sadie 🥀
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成擁有白皙皮膚、藍色眼睛和金色長髮的年輕女性全身寫實肖像的提示。

#### 提示詞

```text
A photorealistic full-body portrait of a stunning young woman in her early 20s with fair skin, flawless complexion, and striking bright blue eyes. She has long, straight blonde hair
```

### No. 1333: 高級糖果餅乾產品攝影

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** AqibAi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成直立式糖果餅乾包裝袋商業產品照片的提示。

#### 提示詞

```text
Create a premium commercial product photography image of a "Candy Biscuits" packet standing upright
```

### No. 1334: 以照片主體替換影片角色

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Volodymyr Cherner
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2075586786751844423.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2075586786751844423.mp4" controls muted playsinline width="720"></video>

#### 描述

一個用於將影片中的角色替換為所提供照片中主體的提示。

#### 提示詞

```text
replace the character with the one from my photo
```

### No. 1335: 海軍藍絲綢編輯時尚肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於在極簡主義建築環境中拍攝女性高級時尚肖像的提示。

#### 提示詞

```text
A high-end editorial fashion portrait featuring a woman with natural freckles and an elegant updo hairstyle, posing gracefully in a minimalist, sun-drenched architectural setting. She is wearing a sophisticated navy
```

### No. 1336: 過度填充羽絨運動鞋產品攝影

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** madpencil_
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成一款誇張、如棉花糖般的羽絨運動鞋產品照片的提示。

#### 提示詞

```text
Product photography of an extremely overstuffed puffer sneaker, absurdly inflated marshmallow-like volume, exaggerated
```

### No. 1337: 為影片添加未來感3D資訊圖表

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** madpencil_
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2075600478847537615.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2075600478847537615.mp4" controls muted playsinline width="720"></video>

#### 描述

一個用於為現有影片添加關於某產品的極簡未來感3D資訊圖表的提示。

#### 提示詞

```text
add interactive minimalistic futuristic infographics in 3D space about the product in the video @ vid1 keeping the
```

### No. 1338: 保留臉部的類比風格粗獷照片

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alex Prompts
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成類比風格粗獷照片，同時保留拍攝對象原始臉型與髮型的提示。

#### 提示詞

```text
Without changing my face or hairstyle, create an analog-style grunge photo from the https://t.co/OG0FoyIYoq
```

### No. 1339: 南印度女性肖像提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glowecho
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成一位面部特徵細節豐富的年輕南印度女性肖像的結構化提示。

#### 提示詞

```text
{
  "subject": "A beautiful young South Indian woman in her mid-20s, with warm medium skin tone, flawless smooth skin with subtle natural glow and light freckles, high cheekbones, defined jawline, full natural lips with soft pink gloss"}
```

### No. 1340: 擁有紋理感髮型與鬍鬚的年輕男性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成一位神情嚴肅、擁有深棕色造型短髮與短鬍鬚的年輕男性肖像的提示。

#### 提示詞

```text
A young man with short, textured dark brown hair styled slightly upward at the front with natural, subtle flyaways and a neatly groomed short beard stares forward with a serious, composed expression while wearing dark,
```

### No. 1341: 夢幻春日肖像低角度

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jahan Zaib
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成從低角度拍攝、身穿連身裙的女性寫實春日肖像的提示。

#### 提示詞

```text
A dreamy, ultra-photorealistic springtime lifestyle portrait captured from a dramatic low-angle perspective, featuring a beautiful young woman with long, flowing dark hair wearing a simple white linen sundress. She is peacefully
```

### No. 1342: 咖啡館中的女性電影感肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aijaz
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成黃金時段在溫馨咖啡館中拍攝年輕女性電影感肖像的提示。

#### 提示詞

```text
A cinematic portrait of a young woman sitting in a cozy café at golden hour, looking back over her shoulder toward the camera. Long dark hair with soft wispy bangs gently blown across her face, natural makeup, calm and
```

### No. 1343: 一分鐘內的流浪劍客弟子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** SYD
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於在一分鐘內生成圖像的提示，描繪名為「任」的流浪劍客弟子在黑白與深紅色的旅途場景中的動作。

#### 提示詞

```text
Show what happens in 1 minute. Ren — wandering sword disciple, black-and-crimson travel
```

### No. 1344: Sabrina Carpenter數位分身提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pinodi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個結構化的提示，描述Sabrina Carpenter的數位分身，並指定了具體的面部特徵。

#### 提示詞

```text
{
  "subject": {
    "identity": {
      "biometric_reference": "Sabrina Carpenter digital twin",
      "facial_structure": "Soft heart-shaped face profile, petite jawline, distinct high https://t.co/dvd6DUfiEq"
```

### No. 1345: 字母Z提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Eco Vibes 🌍
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2075655695245148630.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2075655695245148630.mp4" controls muted playsinline width="720"></video>

#### 描述

一個用於生成字母Z的簡單提示。

#### 提示詞

```text
Z
```

### No. 1346: 黃金時段公寓中的時尚女性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** MykaAI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅寫實的電影式靜態畫面，描繪一位女性在由溫暖夕陽照亮的舒適公寓中。

#### 提示詞

```text
Photorealistic cinematic still of a stylish young woman in a cozy, feminine apartment during golden hour. Warm sunset light streams through sheer white curtains, filling the room with soft pink and golden tones.
```

### No. 1347: 超寫實高級時尚編輯肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作超寫實、高級時尚編輯特寫肖像的提示。

#### 提示詞

```text
Ultra-realistic high-fashion editorial close-up portrait of
```

### No. 1348: 帶有環繞鏡頭與反射效果的產品廣告

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** getimg.ai
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2075683226681831794.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2075683226681831794.mp4" controls muted playsinline width="720"></video>

#### 描述

一個用於創作高級廣告影片的提示，其特點是緩慢環繞的鏡頭、移動的反射效果以及柔和的大氣粒子。

#### 提示詞

```text
camera slowly orbits the product, reflections move across the surface, soft particles in the air, premium ad feel
```

### No. 1349: 擁有白皙皮膚和雀斑的年輕女性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成擁有白皙皮膚和雀斑的年輕女性圖像的提示。

#### 提示詞

```text
A young woman with fair skin and freckles on her face
```

### No. 1350: 萬聖節南瓜燈上的優雅黑貓

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heather Green
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成萬聖節場景的提示，場景中有一隻眼睛發光的黑貓站在雕刻過的南瓜上。

#### 提示詞

```text
a sleek black cat with glowing amber eyes sits perched on top of a large carved jack o lantern, dramatic Halloween atmosphere, swirling ground fog, tall twisted dead trees
```

### No. 1351: 男性極特寫電影式肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作男性黑暗專業攝影棚肖像的提示，其特徵是輪廓分明，並由單一柔光箱打光。

#### 提示詞

```text
Extreme closeup cinematic portrait of an American white man with sharp jawline and defined facial features, shot in a pure pitch-black professional photography studio, single large octabox softbox
```

### No. 1352: 南印度女性肖像提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glowecho
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個描述年輕南印度女性詳細肖像的提示。

#### 提示詞

```text
{
  "subject": "A breathtaking young South Indian woman in her mid-20s, radiant warm medium skin tone with flawless smooth texture and subtle natural sheen, sharp elegant facial features, high cheekbones, full plump lips with https://t.co/sG4lhnNfkQ
```

### No. 1353: 公共空間的2x2網格圖

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gadgetify
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成以16:9長寬比描繪公共空間的2x2網格圖像的提示。

#### 提示詞

```text
2x2 grid, 16:9, do this for 4 public space
```

### No. 1354: 戲劇性電影式男模特兒攝影棚肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個為男模特兒創作的高級時尚肖像提示，其特徵是輪廓分明、頭髮後梳並帶有銀色亮點。

#### 提示詞

```text
A dramatic cinematic studio portrait of a handsome male model with sharp high-fashion features and high cheekbones. He has slicked-back, wet-look dark hair with silver highlights.
```

### No. 1355: 受電影啟發的電影式公路電影片段

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2075765549796340071.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2075765549796340071.mp4" controls muted playsinline width="720"></video>

#### 描述

一個用於生成以《游牧人生》等公路電影風格呈現、長度10秒的寫實影片片段的提示。

#### 提示詞

```text
Create a 10-second ultra-photorealistic cinematic road movie sequence inspired by *Nomadland*, *The Secret Life of Walter Mitty*, and *Into the Wild*. Use the provided female reference image as the protagonist. Preserve exact facial
```

### No. 1356: 專業年輕女性肖像描述

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NUSRAT
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個結構化的提示，描述一位具有優雅專業特徵和造型髮型的年輕女性。

#### 提示詞

```text
"subject": {
    "person": "Young woman with an elegant, professional appearance",
    "hair": "Dark brown, styled in a polished, wavy shoulder-length bob cut",
    "facial_features": "Defined eyebrows, warm brown eyes, soft natural makeup"
```

### No. 1357: 水下王國音樂表演

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 綴る（つづる）
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2075777124414406959.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2075777124414406959.mp4" controls muted playsinline width="720"></video>

#### 描述

一位身著奇幻服裝的男性表演者，在一個設計成水下城市、帶有古代遺跡和動畫氣泡的舞台布景上演唱。

#### 提示詞

```text
A male performer, of Asian ethnicity, with styled dark hair, wearing a dark teal sleeveless leather-like costume with silver metallic accents, stands center stage. He is singing and making dramatic gestures. The stage background depicts a vibrant underwater kingdom with ancient Romanesque ruins, a crescent moon visible through the deep blue water, and animated bubbles rising. The camera slowly zooms in from a medium full shot to a medium close-up of the performer, then slightly zooms out, maintaining a steady shot.
```

### No. 1358: 高級時尚海軍藍天鵝絨肖像系列

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成高級時尚肖像的提示，描繪一位自信的黑髮女子穿著海軍藍天鵝絨上衣。

#### 提示詞

```text
A series of striking, high-fashion portraits featuring a woman with long, wavy dark hair and a confident expression. She is elegantly dressed in a form-fitting, navy blue velvet mock-neck top, which complements
```

### No. 1359: 年輕印度女子肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glowecho
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個詳細的提示，用於生成一位具有特定面部特徵和膚色的年輕印度女子肖像。

#### 提示詞

```text
{
  "subject": "A beautiful young Indian woman in her mid-20s, South Asian features, fair-warm skin tone with a healthy glow, large expressive dark brown eyes with subtle eyeliner and long lashes, perfectly shaped eyebrows, soft"
```

### No. 1360: 奢華時尚編輯肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Miz
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張超寫實的肖像，描繪一位擁有銅紅色頭髮的迷人年輕女子，採用奢華時尚編輯風格。

#### 提示詞

```text
Ultra-realistic luxury fashion editorial portrait of a glamorous young woman with copper-red hair
```

### No. 1361: 好萊塢夜生活編輯肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Natty Windstorm
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張超寫實的肖像，描繪一位迷人的金髮女子身處好萊塢夜生活場景中。

#### 提示詞

```text
Ultra-realistic luxury nightlife editorial portrait of a glamorous young blonde woman sitting elegantly on a Hollywood
```

### No. 1362: 奢華屋頂時尚肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dockie
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張超寫實的肖像，描繪一位迷人的金髮女子在日落時分的屋頂上。

#### 提示詞

```text
Ultra-realistic luxury rooftop fashion portrait of a glamorous young blonde woman with platinum-blonde hair styled in an elegant
```

### No. 1363: 工業橋上長髮飄逸的女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Shahid Wani
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張寬廣的城市生活風格照片，一位自信的女子穿著藍色背心站在鋼橋上，帶有戲劇性的風吹效果。

#### 提示詞

```text
Wide urban lifestyle shot, woman in deep blue ribbed tank top standing on or near industrial steel bridge, long dark hair blown dramatically by wind, slim blue-tinted sunglasses, confident upward chin tilt, full steel lattice
```

### No. 1364: 森林中聖騎士對決暗影生物

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Cortex Visual ・ AI Movies
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一名聖騎士在被詛咒的森林中對抗一隻有著發紅光眼睛的暗影生物。

#### 提示詞

```text
A heavenly paladin stands in a muddy clearing inside the cursed forest with his longsword raised in a defensive stance. A terrifying shadow creature with glowing red eyes has landed
```

### No. 1365: 抽象非具象藝術風暴

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** enepty
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2075925751849955439.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2075925751849955439.mp4" controls muted playsinline width="720"></video>

#### 描述

一個用於生成純粹抽象表現主義藝術的提示，沒有任何可辨識的形式。

#### 提示詞

```text
Extremely abstract non-representational art, pure abstract expressionism, completely non-figurative, no humans, no silhouettes, no hands, no recognizable objects at all. The entire canvas is a chaotic turbulent storm of
```

### No. 1366: 暮光下的奇幻森林電影場景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sharon Riley
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2075927483757854860.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2075927483757854860.mp4" controls muted playsinline width="720"></video>

#### 描述

一個用於生成戲劇性奇幻影片序列的提示，場景設定在暮色中的雪松林，伴隨著發光的日落。

#### 提示詞

```text
A dramatic cinematic fantasy sequence in a snowy pine forest at twilight, illuminated by cold blue and purple dusk tones with a glowing pink sunset on the horizon. Snow falls gently through
```

### No. 1367: 身穿綠色毛衣的女子肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅高品質的女子肖像，她有著長長的棕色頭髮，身穿深綠色高領毛衣，在柔和的室內自然光下拍攝。

#### 提示詞

```text
A captivating, high-quality portrait of a stunning woman with long, wavy brown hair and expressive eyes, wearing a cozy, thick-knit dark forest green turtleneck sweater. She is captured in a soft, natural indoor
```

### No. 1368: 電影級寫實四分之三身肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dilshad Hussain
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作電影級寫實四分之三身肖像的提示，使用參考照片來確保面部特徵的準確性。

#### 提示詞

```text
A cinematic, photorealistic three-quarter body portrait captured at eye level, with the subject filling most of the vertical frame and cropped below the knees. Use the attached reference photo for facial identity and preserve
```

### No. 1369: 向法國致敬的優雅女性奢華藝術作品

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Smiling Khan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作細膩、方形構圖的奢華藝術作品的提示，內容為一位擁有陶瓷肌膚和飄逸深褐色秀髮的優雅女性，以戲劇性的側面輪廓呈現。

#### 提示詞

```text
Create a 1:1 ultra-detailed luxury France tribute artwork featuring a completely different elegant woman (not the reference model), shown in dramatic side profile with porcelain skin, long wavy brunette hair flowing softly behind
```

### No. 1370: 擁有深邃眼眸的恬靜女子肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Talia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成超級真實肖像的提示，內容為一位美麗的年輕女子，帶著溫柔的微笑，有著大大的深色眼睛和長長的波浪捲髮。

#### 提示詞

```text
Create an image: A high quality super realestic potrait of a beautiful young woman with a gentle, serene smile. She has large, expressive dark eyes and long, flowing, wavy
```

### No. 1371: 浮世繪風格的《魔戒》海報

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Michael Rabone
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成結合1920年代復古卡通美學的浮世繪風格《魔戒》電影海報的提示。

#### 提示詞

```text
Lord of the Rings movie poster in Ukiyo-e
Cuphead 1920s vintage cartoon style
```

### No. 1372: 史嘉蕾·喬韓森數位孿生肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pinodi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成史嘉蕾·喬韓森數位孿生肖像的提示，其臉型為經典的橢圓形結構。

#### 提示詞

```text
{
  "subject": {
    "identity": {
      "biometric_reference": "Scarlett Johansson digital twin",
      "facial_structure": "Classic oval face, defined"
    }
  }
}
```

### No. 1373: 暮色中帶有巨龍的雪幻森林

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mr Suhail Ai
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2075950277891616962.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2075950277891616962.mp4" controls muted playsinline width="720"></video>

#### 描述

一個電影般的奇幻場景，位於暮色中的雪松林，伴有藍色、紫色和粉色的光影以及飄落的雪花。

#### 提示詞

```text
A dramatic cinematic fantasy sequence in a snowy pine forest at twilight, illuminated by cold blue and purple dusk tones with a glowing pink sunset on the horizon. Snow falls gently through the air
```

### No. 1374: 南亞女性的超現實主義石墨素描

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Arina Ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成年輕南亞女性真實鉛筆素描肖像的提示，需根據參考圖像保留面部特徵。

#### 提示詞

```text
Use the uploaded image as the exact identity reference. Preserve the woman's face with perfect accuracy.

Create a premium ultra-realistic graphite pencil sketch in 9:16 format.

A breathtaking young South Asian woman walking
```

### No. 1375: 根據上傳圖像精確參考身份

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mr. Tariq
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個指示AI使用上傳圖像作為參考，以高準確度保留人物身份的提示。

#### 提示詞

```text
Use the uploaded image as the exact identity reference. Preserve the person's identity with extremely high accuracy. Keep the face 100% recognizable. Do not change the hairstyle, beard, facial structure, eyes, eyebrows, nose,
```

### No. 1376: 城市廣場上的超現實巨型產品紀念碑

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Maddox
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成超現實電影場景的提示，場景中一個巨大的產品作為公共紀念碑展示在現代都市裡。

#### 提示詞

```text
Surreal giant-scale product installation, a massive oversized [product from uploaded photo] displayed as a public monument on a raised platform in a modern city plaza, Burj Khalifa and glass skyscrapers visible in the
```

### No. 1377: 裂唇紙藝女性肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成精緻紙藝與浮雕雕塑藝術作品的提示，內容為優雅的女性肖像。

#### 提示詞

```text
A sophisticated, multi-layered paper-quilling and relief-sculpture art piece featuring an elegant female portrait with blonde braided hair, blue eyes, and split pink-and-white lips.
```

### No. 1378: 蓄鬍的醒目中年男子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成男子肖像的提示，其目光銳利，鬍鬚細節豐富。

#### 提示詞

```text
A striking middle-aged man with an intense, direct gaze looks slightly downward toward the lens, his strong jawline framed by a thick, meticulously groomed beard peppered with subtle hints of lighter brown and gray.
```

### No. 1379: 主角的動態散景特寫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成帶有散景效果的特寫肖像提示，融合了脆弱感與自信。

#### 提示詞

```text
A dynamic bokeh close-up of The Protagonist, framed tightly at the head and shoulders. The subject exudes a striking blend of fragility and confidence, maintaining an unwavering,
```

### No. 1380: 香港海灘上的年輕男子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** HK Student Safe 清水帳 🇭🇰🇨🇦
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成影片或圖像的提示，內容為一名18歲的香港青年，身穿濕透的白色背心和三角泳褲，身處海灘上。

#### 提示詞

```text
He is 18 and from Hong Kong. Background is a Hong Kong beach, no words. He wears wet white very very low neck tank top undershirt and white speedo.
```

### No. 1381: 網格中的四幕激烈科幻場景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gadgetify
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成四幕由AI推斷的激烈科幻場景的提示，這些場景以2x2網格排列，並以圖形剪影為主題。

#### 提示詞

```text
16:9, 2x2 grid, do this for 4 intense AI inferred scifi scenes
 input: $ subject // extract the subject as a graphic silhouette. s =
```

### No. 1382: 寫實室內女性自然肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** K
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成寫實、智慧手機風格肖像的提示，內容是一位年輕女性，背景為珊瑚紅色。

#### 提示詞

```text
A realistic candid indoor portrait, young woman standing in front of a plain coral red background, straight-on eye-level camera angle as if casually taken with a smartphone, intimate upper body framing, natural indoor lighting, soft
```

### No. 1383: 靜態鏡頭動畫提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** We The Future
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2076015130878652486.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2076015130878652486.mp4" controls muted playsinline width="720"></video>

#### 描述

一個使用Google Omni為靜態圖像添加靜態鏡頭動畫的提示。

#### 提示詞

```text
Static camera.
```

### No. 1384: 為AI影片指導細微細節

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** getimg.ai
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2076015918816092345.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2076015918816092345.mp4" controls muted playsinline width="720"></video>

#### 描述

一個專注於細微動作和效果的提示，例如布料動態、光線閃爍和鏡頭呼吸感。

#### 提示詞

```text
fabric moves slightly, background lights flicker, camera breathes, subject stays sharp
```

### No. 1385: 健身房中的健美年輕女性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成健美年輕女性圖像的提示。

#### 提示詞

```text
A fit young woman
```

### No. 1386: 瓷白鱗翅目超現實蛾類肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個超現實特寫肖像提示，特點是一隻巨大、超寫實的白色蛾子覆蓋了主體的臉部。

#### 提示詞

```text
Extreme close-up straight-on portrait of The Protagonist. Surreal high-budget practical photography. A colossal, hyper-realistic white moth rests directly over the face.
```

### No. 1387: 《惡靈古堡》殭屍大戰 vs 安靜咖啡時光

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Vireon
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個影片提示，對比了殭屍生存戰鬥與任務結束後的寧靜場景，融合了電影風格與《惡靈古堡》元素。

#### 提示詞

```text
An relentless fight for survival against zombies in the dark corridors of the R.P.D. vs. a quiet coffee break at home, enjoying the silence after the mission is accomplished. Natalie Portman ❌ Ada Wong. What if the world of cinema and the Resident Evil universe collided.
```

### No. 1388: 身著淡雅紗麗的優雅印度女性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Talia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成圖像的提示，內容是一位膚色白皙的年輕印度女性，身著淡雅花卉圖案紗麗和露背上衣，回頭張望。

#### 提示詞

```text
Fair Beautiful fair-skinned young Indian woman, elegant back pose, pastel floral saree, soft pink backless blouse with tie strings, sleek low bun, emerald jewelry, tiny black bindi, looking over
```

### No. 1389: 雕刻某物提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** mohere
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個指示人工智慧雕刻某物的極簡提示。

#### 提示詞

```text
Carve something
```

### No. 1390: 雨中的高地山谷中世紀村莊

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 0xAIGOAT.exe
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2076079089807499438.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2076079089807499438.mp4" controls muted playsinline width="720"></video>

#### 描述

一個用於生成影片場景的提示，內容是雨水落在窗戶上，窗外是霧氣籠罩的山谷與中世紀村莊。

#### 提示詞

```text
Cue up 0:16. Rain on a virtual window, foggy Highlands valley, medieval village in the distance.
```

### No. 1391: 膚色白皙、長捲髮的年輕女性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個描述膚色白皙、長捲髮年輕女性的提示。

#### 提示詞

```text
A young woman with fair skin and long wavy
```

### No. 1392: 男子舉啞鈴的電影感健身房鏡頭

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mr Das
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成電影感特寫鏡頭的提示，內容是一位肌肉發達的年輕男子在健身房專注地舉重。

#### 提示詞

```text
A cinematic close-up shot of a fit young man lifting heavy dumbbells in an intense gym session, shirtless, wearing black joggers and wrist wraps. His muscles are fully engaged—veins visible across his arms, sharply defined abs, chest, and
```

### No. 1393: 角色與巨型貓的電影感鏡頭

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aiza
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成電影感、寫實中景鏡頭的提示，特點是有一個人類角色和一隻巨型3D卡通貓。

#### 提示詞

```text
Full medium shot, cinematic realism, featuring the human character from the reference image image_0.png with maximum facial accuracy and identity consistency, standing confidently beside a giant, highly detailed 3D gray cartoon cat character
```

### No. 1394: 與巨型卡通貓的電影感鏡頭

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aiza
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成電影感中景鏡頭的提示，特點是有一個人類角色和一隻巨型3D卡通貓。

#### 提示詞

```text
Full medium shot, cinematic realism, featuring the human character from the reference image image_0.png with maximum facial accuracy and identity consistency, standing confidently beside a giant, highly detailed 3D gray cartoon cat character (in the
```

### No. 1395: 黑白極簡接觸印樣肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Maddox
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成黑白極簡工作室肖像的提示，對象為年輕人，排列成四格接觸印樣。

#### 提示詞

```text
Black-and-white minimalist studio contact sheet portrait of a young person with a short dark hairstyle, wearing a simple black crew-neck top. Four-frame composition in a clean grid layout, each frame showing a different
```

### No. 1396: 藝術畫作背景的電影感肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成電影感工作室肖像的提示，使用參考人臉，背景為大規模藝術畫作。

#### 提示詞

```text
Use the exact same face from the reference image and generate a stunning cinematic studio portrait where a breathtaking large-scale artistic painting dominates the background — the marriage of fine art photography and classical
```

### No. 1397: 電影感黑白時尚肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅高級時尚的垂直肖像，描繪一位身穿黑色高領毛衣和西裝外套的優雅年輕男子，以陰鬱的黑白色調美學呈現。

#### 提示詞

```text
A cinematic, high-fashion vertical portrait of an elegant and handsome young man, captured in a moody, black-and-white aesthetic. The subject is dressed in a sophisticated black turtleneck paired with a sharp, black blazer.
```

### No. 1398: 奢華老錢風時尚編輯場景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Weinberg
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成高級時尚廣告場景的提示，以歐洲商業區為背景，呈現靜謐奢華的美學風格。

#### 提示詞

```text
Luxury old-money editorial aesthetic, quiet luxury, timeless sophistication, minimalist elegance, European business district atmosphere, premium tailoring, understated wealth, high-fashion campaign, cinematic realism, modern classic menswear, refined
```

### No. 1399: 香水坊中的酸楚煉金術師肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅超寫實的中畫幅肖像，描繪一位憂鬱的天才，身處陽光普照、雜亂無章的植物香水坊中。

#### 提示詞

```text
{
  "vibe_title_en": "The Acidic Alchemist",
  "master_prompt": "A hyper-realistic, medium-format portrait of The Melancholic Prodigy situated in a chaotic, sun-drenched botanical perfumery. The subject fits the 'Three-Quarter"
}
```

### No. 1400: 南亞女性肖像提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glowecho
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於描繪一位具有精細面部特徵的年輕南亞女性的肖像提示。

#### 提示詞

```text
A stunning young South Asian woman in her mid-20s, with flawless warm fair skin, long straight dark brown hair with soft natural waves cascading over her shoulders, a few strands gently framing her face, sharp arched
```

### No. 1401: 倚靠欄杆的肌肉男肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成中等長度四分之三側面肖像的提示，描繪一位姿勢隨意的肌肉發達的年輕男子。

#### 提示詞

```text
A muscular young adult male stands in a medium three-quarter portrait, centered-left with his chest facing the camera and hips angled slightly right, leaning casually back against a railing. He wears a crisp, bright
```

### No. 1402: 黑白時尚編輯肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alex Prompts
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作特寫黑白時尚編輯肖像的提示。

#### 提示詞

```text
black and white photography, fashion editorial, a close up portrait of
```

### No. 1403: 寫實女性黑暗精靈工匠

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ullr | Majd
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成高度寫實的女性黑暗精靈工匠圖像的提示。

#### 提示詞

```text
Create a highly realistic female dark elf artificer.
```

### No. 1404: 咖啡館內女子的炭筆肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅描繪優雅年輕女子在溫馨咖啡館內的垂直炭筆肖像，手持點燃香菸，煙霧繚繞。

#### 提示詞

```text
A vertical charcoal portrait captures an elegant and young woman in a cozy, atmospheric cafe setting. She is depicted with a gentle, thoughtful expression, holding a lit cigarette while delicate wisps of smoke drift
```

### No. 1405: 科幻電影可愛立體書場景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gadgetify
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成四部著名科幻電影的可愛3D立體書場景2x2網格圖的提示。

#### 提示詞

```text
2x2 grid, 16:9, do this for 4 famous scifi movies: {INPUT: $ SUBJECT

A = {
  open storybook diorama,
  cute 3D character world,
  warm clay/vinyl miniature materials,
  labeled
```

### No. 1406: 三位優雅年輕女性特寫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成三位坐著的優雅年輕女性特寫圖像的提示。

#### 提示詞

```text
{
  "subject": {
    "description": "Close-up of a Three elegant young women sitting"
  }
}
```

### No. 1407: 坐在石階上的紅褐色頭髮女子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Talia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成一位長紅褐色頭髮女子在戶外自然、沉思姿勢的圖像提示。

#### 提示詞

```text
Create an image features a woman with long, auburn-tinted hair sitting outdoors on a stone ledge. She is captured in a candid moment, gazing thoughtfully upward with a serene expression. She wears a black long-sleeved tunic adorned with
```

### No. 1408: 花園露台桌旁的角色

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** LilyFernwild
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個描述兩位角色坐在小屋花園露台桌旁演奏音樂的場景提示。

#### 提示詞

```text
Scene: Lily and Blueberry sit at a patio table in the back garden patio of her cottage, playing music a looping
```

### No. 1409: 樹枝上變色龍特寫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heather Green
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成色彩鮮豔的變色龍特寫、視線高度影片的詳細提示。

#### 提示詞

```text
A close-up, eye-level shot shows a veiled chameleon perched on a branch. The chameleon is facing right, with its head slightly tilted upwards. Its body is a vibrant mix of green,
```

### No. 1410: 晨間山景與咖啡杯場景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** mini singh
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成桌上擺有咖啡杯、山脈與薄霧的寧靜場景提示。

#### 提示詞

```text
with warm golden sunlight breaking over majestic mountains, soft morning mist floating through lush green valleys, a glossy white coffee mug on a modern wooden table
```

### No. 1411: 晨間山景與咖啡杯場景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** mini singh
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成山脈、薄霧與現代咖啡杯的寧靜早晨場景提示。

#### 提示詞

```text
with warm golden sunlight breaking over majestic mountains, soft morning mist floating through lush green valleys, a glossy white coffee mug on a modern
```

### No. 1412: 奢華休閒生活風格編輯多格拼貼

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aiza
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成多格拼貼的提示，採用嚴格臉部鎖定以保留參考圖像中的面部特徵。

#### 提示詞

```text
Luxury Casual Lifestyle Editorial Multi-Panel Collage Prompt Strict Face Lock Version  Face Lock (Highest Priority) Use the uploaded image as the ONLY facial identity reference. Preserve 100% facial resemblance, facial structure, eye shape, eyebrows
```

### No. 1413: 奢華休閒生活風格編輯拼貼

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aiza
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成多格拼貼的提示，採用嚴格臉部鎖定以保留參考圖像中的面部特徵。

#### 提示詞

```text
Luxury Casual Lifestyle Editorial Multi-Panel Collage Prompt Strict Face Lock Version  Face Lock (Highest Priority) Use the uploaded image as the ONLY facial identity reference. Preserve 100% facial resemblance, facial structure, eye shape, eyebrows,
```

### No. 1414: 電影感雙重曝光時尚海報

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Arina Ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作具有雙重曝光效果的高級時尚海報提示，需保留特定女性肖像。

#### 提示詞

```text
Create a high-end cinematic double-exposure fashion poster using the uploaded reference photo, preserving the exact same female face, hairstyle, skin tone, facial
```

### No. 1415: 南亞女性肖像提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glowecho
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個描述一位年輕南亞女性，包含詳細面部與髮型特徵的JSON提示。

#### 提示詞

```text
{
  "subject": "A beautiful young South Asian woman in her mid-20s with a radiant, confident smile, long voluminous wavy dark brown hair cascading over her shoulders, warm glowing skin, subtle makeup with defined eyes, long lashes"
}
```

### No. 1416: 粉彩貼紙風格韓國女孩肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成首爾街頭風格、戴眼鏡的歡樂韓國女孩寫實肖像的提示。

#### 提示詞

```text
A realistic street-style portrait of a fictional Korean girl with a messy low bun, round wire glasses, and a cheerful side-eye smile, standing against a pale mint wall in Seoul on an overcast
```

### No. 1417: 探索 GlobalGPT AI 模型中心

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Paul Sims
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2077003882346213441.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2077003882346213441.mp4" controls muted playsinline width="720"></video>

#### 描述

此螢幕錄影展示用戶瀏覽 GlobalGPT 網站，突顯其多樣化的 AI 模型與圖像、影片生成工具，並呈現流暢的使用者介面轉場效果。

#### 提示詞

```text
A fluid screen recording of a user interacting with the GlobalGPT AI models and tools hub website. The camera smoothly scrolls down the homepage, displaying various AI model carousels and newly released features. It then navigates to the 'Models & Tools' section, applying filters for 'Image' and then 'Video' to reveal specialized AI generators, all presented with a clean, modern UI/UX design.
```

### No. 1418: 超現實慢速雲霄飛車照片

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alex Prompts
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個關於男子在刺激雲霄飛車上，以超現實、極度慢動作呈現的照片提示。

#### 提示詞

```text
A hyper-realistic photo at 10,000 FPS ultra slow-motion of a thrilling roller coaster ride. A man
```

### No. 1419: 用於構圖與身份識別的相片參考

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Smiling Khan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個指示 AI 使用上傳照片作為精確參考的提示，用於構圖、姿勢、表情，並保留人物的身份與外貌。

#### 提示詞

```text
Use the uploaded photo as the exact reference for the composition, pose, facial expressions, framing, camera angle, and overall arrangement. Preserve the couple's identity, clothing, hairstyle, and
```

### No. 1420: 陶瓷與爬蟲肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅超寫實特寫肖像，描繪主角如同一尊活體雕塑，表面覆蓋著正在乾燥的白色塗層。

#### 提示詞

```text
A hyper-realistic, avant-garde close-up portrait of The Protagonist transformed into a living sculpture. The subject's face is coated in a thin layer of drying white
```

### No. 1421: 電影級超寫實分鏡影片

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dogecoin Indonesia 🇮🇩
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成 10 秒電影級影片的提示，該影片基於一個六格超寫實分鏡圖。

#### 提示詞

```text
buat gambar cinematic ultrarealistis dengan 6 panel scene storyboard, yang menceritakan karakter sedang (kegiatan yang inginkan).

MAIN GOAL: Create a cinematic video from a multi-panel storyboard. 10s duration.
```

### No. 1422: 英俊男性攝影棚特寫肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成特寫肖像的提示，描繪一位留著鬍鬚和深色頭髮的英俊年輕男性，在具有溫暖戲劇性燈光的專業攝影棚中。

#### 提示詞

```text
A handsome young man with a neatly groomed beard and wavy dark hair is captured in a series of close-up portraits, all set within a professional studio environment characterized by dramatic, warm lighting.
```

### No. 1423: 韓系 Tomboy 女性時尚肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Trendy
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成圖像的提示，描繪一位自信、帶有韓系風格的 Tomboy 女性，身著精緻的街頭服飾。

#### 提示詞

```text
Create a beautiful Korean-inspired tomboy woman with black sunglasses, a short wavy bob haircut, an oversized ivory bomber jacket over a black fitted top, charcoal parachute pants, and white sneakers, confidently
```

### No. 1424: 黑色背景上的抽象枯樹剪影

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** enepty
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成抽象藝術作品的提示，該作品透過特定方法在黑色背景上創作出一棵無葉樹的剪影。

#### 提示詞

```text
A pure abstract aesthetic artwork set against a completely flat, solid pitch-black background. The central focus is the silhouette of an elegant, leafless barren tree. However, this tree is created EXCLUSIVELY through a
```

### No. 1425: 極低角度時尚肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Shahid Wani
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅戲劇性的時尚肖像，採用極低角度拍攝，特寫一位頭髮被風吹拂的年輕東亞女性。

#### 提示詞

```text
Fashion lifestyle portrait shot from extreme ground-level low angle looking dramatically upward, young East Asian woman with short wavy bob haircut, wind-blown hair with one strand crossing face while one eye makes sharp direct
```

### No. 1426: 銅色髮絲的溫馨夜間臥室自拍

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Miz
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成超寫實影像的提示，描繪一位擁有銅紅色頭髮的年輕女性在溫馨的夜間臥室場景中。

#### 提示詞

```text
Ultra-realistic cozy nighttime bedroom selfie of a young woman with long naturally wavy copper-red hair styled with soft
```

### No. 1427: 手指愛心手勢專業攝影棚肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Maddox
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作溫暖、專業的攝影棚肖像的提示，特寫一位做出手指愛心手勢的人物。

#### 提示詞

```text
Professional studio portrait, using the face and likeness from the uploaded photo, subject making a finger heart gesture with one hand raised near chest height, thumb and index finger forming a small heart shape, warm
```

### No. 1428: 超寫實奢華辦公室編輯肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Natty Windstorm
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成超寫實肖像的提示，描繪一位在奢華辦公室場景中、擁有鉑金色頭髮的女性。

#### 提示詞

```text
Ultra-realistic luxury office editorial portrait of a young platinum-blonde woman with soft shoulder-length beach waves and a center part, wearing
```

### No. 1429: 動態 AI 風格與場景轉場

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** each::labs
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2077039981239914810.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2077039981239914810.mp4" controls muted playsinline width="720"></video>

#### 描述

這部影片展示一位女性在寫實、動漫和娃娃風格之間無縫轉換，背景隨之變換，最終以醒目的氣球文字標誌揭示作結。

#### 提示詞

```text
A medium shot of a young woman in a pink baseball cap and black sweatshirt. She transitions from realistic to an anime drawing, then to a Barbie-like doll, and back to realistic, performing finger heart gestures and smiling. The background evolves from a cozy room to a modern office with a view of the Golden Gate Bridge. The 'each labs' logo appears as expanding 3D metallic silver and orange balloons, concluding on a red and blue gradient background with a subtle dot pattern. Static camera.
```

### No. 1430: 奢華夜生活時尚編輯肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dockie
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一幅超寫實肖像，描繪一位在奢華夜生活場景中、擁有鉑金色頭髮的迷人女性。

#### 提示詞

```text
Ultra-realistic luxury nightlife fashion editorial portrait of a glamorous young platinum-blonde woman with long voluminous beach
```

### No. 1431: 深紅禮服女性肖像系列

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成女性肖像的提示，該女性擁有黑髮和紅唇，身著深紅色禮服。

#### 提示詞

```text
A series of photographic portraits captured indoors, featuring a woman with long, wavy black hair and bold red lipstick, wearing a long-sleeved deep crimson wrap dress. She is seated on a white-clothed surface
```

### No. 1432: Sabrina Carpenter 肖像生成提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Pinodi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個結構化的提示，用於生成具有特定面部特徵的 Sabrina Carpenter 肖像。

#### 提示詞

```text
{
    "subject": {
        "identity": {
            "biometric_reference": "Sabrina Carpenter",
            "gender": "female",
            "facial_morphology": "heart-shaped face, soft"
        }
    }
}
```

### No. 1433: 三聯幅女性主題合成影像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NUSRAT
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成三聯幅合成影像的提示，該影像以女性主題在不同場景中呈現。

#### 提示詞

```text
"image_composition": "A three-panel composite image featuring the same female subject in different settings.",
  "subject_details": {
    "gender": "Female",
    "appearance": "Young adult with long, dark, wavy hair, warm skin tone, and a https://t.co/JZ1sw3Z25T
```

### No. 1434: 黃金時分的南印度女性肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glowecho
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位年輕南印度女性在日落時分坐於草坪上的寫實肖像。

#### 提示詞

```text
A stunning photorealistic portrait of a beautiful young South Indian woman in her mid-20s, sitting gracefully on a lush green lawn during golden hour sunset. She has warm tan
```

### No. 1435: 黃昏時分身穿黑色紗麗的印度女性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glowecho
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位年輕印度女性在奢華環境中的寫實肖像，採用電影感燈光。

#### 提示詞

```text
{
  "subject": "A stunning young Indian woman in her mid-20s, South Asian beauty with fair glowing skin, sharp symmetrical facial features, high cheekbones, large expressive almond-shaped dark eyes, full lips, long straight black hair with subtle highlights, wearing a modern black silk saree with gold embroidery, standing in a minimalist luxury penthouse with floor-to-ceiling windows overlooking a city skyline at dusk, soft cinematic lighting, photorealistic, 8K, ultra-detailed"
}
```

### No. 1436: 驚艷印度女性肖像提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sadie 🥀
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成美麗年輕印度女性肖像的提示，並指定了具體的面部特徵。

#### 提示詞

```text
{
  "subject": "A stunning young Indian woman in her mid-20s, South Asian beauty with fair glowing skin, sharp symmetrical facial features, high cheekbones, large expressive almond-shaped dark brown eyes with subtle eyeliner and long"}
```

### No. 1437: 身穿燕尾服的男子中景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成影片的提示，描繪一位身穿黑色燕尾服、打扮俐落的男子，以中景構圖置於畫面中央。

#### 提示詞

```text
A man stands centrally composed in a medium shot, his body angled in a 45 degree turn with level shoulders and a balanced weight distribution, dressed sharply in a black double breasted tuxedo over a crisp white shirt
```

### No. 1438: 將圖像升級為8K電影靜幀

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Andy Orsow
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個將圖像升級至8K UHD、為背景和皮膚降噪，並創造電影靜幀效果的提示。

#### 提示詞

```text
Faithfully upscale this image and increase its resolution to 8K UHD level with maximum detail and clarity. Denoise the background and his skin. No textured background. cinematic film still
```

### No. 1439: 帶有歡呼人群的AI新聞報導

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Christian Vivas
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2077075884259873118.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2077075884259873118.mp4" controls muted playsinline width="720"></video>

#### 描述

一位新聞主播報導新的AI模型，穿插城市街道上慶祝人群的場景以及街頭採訪畫面。

#### 提示詞

```text
A news broadcast video. A professional male news anchor with a beard, wearing a blue suit, sits at a desk in a modern studio featuring large screens displaying a world map and a prominent 'BREAKING NEWS' banner. He speaks directly to the camera, with a slight zoom-in. The video then cuts to an energetic, dynamic wide shot of a large, diverse crowd of people on a bustling, sunny city street, cheering, clapping, and raising their arms in celebration, with some hugging. This transitions briefly back to the news anchor, then to a female reporter holding a 'FOX' branded microphone, interviewing an excited young man on the same city street, with the jubilant crowd and small French flags visible in the background. The young man raises his fists enthusiastically while shouting.
```

### No. 1440: 植物哀歌雕塑肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個超寫實、低角度的雕塑式肖像，強調修長的頸部與紀念碑般的體態。

#### 提示詞

```text
A hyper-realistic, low-angle sculptural portrait of The Protagonist, framed from below to emphasize the elongation of the neck and the monumental stature
```

### No. 1441: 鎖定臉部的電影感復古肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Talia
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成電影感復古肖像的提示，描繪一位身穿翡翠綠絲綢庫爾蒂的女性，並嚴格指示需鎖定參考圖像中的臉部。

#### 提示詞

```text
Use uploaded reference face exactly, zero modification) FACE LOCK — ZERO MODIFICATION POLICY. Face must remain 100% identical. No AI alteration. ASPECT RATIO • 3:4. STYLE: Cinematic Vintage. SCENE: Woman in a heavy emerald green silk Kurti
```

### No. 1442: 身穿黑色西裝外套的超寫實律師肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Tomilola _Ruth❤️
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個生成超寫實圖像的提示，描繪一位身著律師服裝的人物，並參考上傳的圖像。

#### 提示詞

```text
with reference to the uploaded image create a hyper realistic image of me wearing a black blazers, black wide leg trousers under a fitted lawyer robe with white lace jabot, wearing white barrister
```

### No. 1443: AI推論非版權主題網格

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gadgetify
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成2x2網格的提示，內容為AI推論的非版權主題，並附有主題分析與細節提取。

#### 提示詞

```text
2x2 grid, 16:9, 4 ai inferred topics that are not copyrighted {input = $ subject # 1. analyze the subject. silhouette = extract_silhouette(input) internal_rhythm = detect_repeated_details(input)
```

### No. 1444: 迪斯可球上的青蛙特寫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Heather Green
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一隻鮮綠色青蛙在反光迪斯可球上的詳細特寫，背景為彩虹色。

#### 提示詞

```text
a highly detailed close up of a vibrant green frog perched atop a reflective disco ball, sharp focus on the frog’s textured skin and glistening eyes, rainbow colored background
```

### No. 1445: 執著於皮膚細節的肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成超詳細工作室肖像的提示，重點聚焦於皮膚紋理。

#### 提示詞

```text
Use the exact same face from the reference image and generate the most technically obsessive skin-detail studio portrait ever attempted — where human skin becomes the subject, the art, and the
```

### No. 1446: 女性四場景拼貼

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NUSRAT
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個結構化提示，用於生成拼貼畫，展示同一位年輕女性在不同角色和環境中的樣貌。

#### 提示詞

```text
{
  "image_composition": "A collage of four distinct scenes featuring the same young woman in various roles and environments.",
  "image_1": {
    "setting": "Sunny ocean beach with mountains in the background",
    "subject_action": "Emerging"
  }
}
```

### No. 1447: 奢華指甲油廣告

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Zarlish
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個為奢華化妝品廣告設計的提示，呈現置於光滑黑色大理石上的寶石紅指甲油瓶。

#### 提示詞

```text
A luxury cosmetic advertisement featuring a premium nail polish bottle placed on a glossy black marble surface with flowing liquid polish in rich ruby red.
```

### No. 1448: 參考臉部的新娘肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個使用參考臉部生成新娘肖像的提示，著重優雅與雜誌品質。

#### 提示詞

```text
Use the exact same face from the reference image and generate a breathtaking bridal portrait of a young woman in a stunning wedding dress — elegant, emotional, and magazine worthy. She wears a full luxury bridal gown
```

### No. 1449: 參考臉部之電影感時尚海報

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Tajammal Hussain
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個使用特定臉部參考來創作高端電影感時尚海報拼貼的提示。

#### 提示詞

```text
Using uploaded face 100% realistic. Create a high-end cinematic fashion poster collage featuring the same young South Asian man from the reference photo, keeping his face highly accurate, natural, and consistent
```

### No. 1450: 女性籃球運動員時尚海報

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Smiling Khan
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作以女性籃球運動員為主題的電影感運動時尚海報的提示。

#### 提示詞

```text
Ultra-premium sports editorial poster collage of a powerful female basketball athlete in a red and white uniform, cinematic Nike-style campaign aesthetic, glossy indoor basketball court reflections, dramatic studio lighting, bold
```

### No. 1451: 熱帶海灘上的銅紅色頭髮肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Natty Windstorm
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位年輕女性在熱帶海灘上的超寫實肖像，她有著波浪狀的銅紅色頭髮。

#### 提示詞

```text
Ultra-realistic tropical beach lifestyle portrait of a young woman with long naturally wavy copper-red hair blowing gently in the ocean
```

### No. 1452: 脆弱的泡泡概念

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Atelier SG
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2077397107376341353.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2077397107376341353.mp4" controls muted playsinline width="720"></video>

#### 描述

一個詩意的提示，描述一個孤獨、脆弱的泡泡。

#### 提示詞

```text
A bubble that doesn't know it's the only fragile thing left.
```

### No. 1453: 擁有藍綠色眼眸的南亞女性肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glowecho
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

描述一位年輕女性的提示，她具有南亞特徵、淺橄欖色肌膚與引人注目的藍綠色眼眸。

#### 提示詞

```text
{
  "subject": "A stunning young woman in her mid-20s with South Asian/Indian features, fair-to-light olive skin, striking light blue-green eyes with defined eyeliner and long lashes, full lips with soft"
```

### No. 1454: 沈思光影中的女性肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位女性在安靜沈思中的肖像系列，來自百葉窗的光影創造出條紋圖案。

#### 提示詞

```text
This series of portraits captures a woman in a moment of deep, quiet contemplation, framed by the interplay of light and shadow filtering through window blinds. The striped patterns of light cast across
```

### No. 1455: 巨型產品砸穿藍寶堅尼擋風玻璃

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Maddox
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張超寫實的超現實廣告照片，描繪一個巨型產品砸碎藍寶堅尼的擋風玻璃。

#### 提示詞

```text
Hyper-realistic surreal advertising photograph of a giant oversized [product from uploaded photo] crashing through the windshield of a matte grey Lamborghini Huracán, shattering the glass dramatically. The car is parked on
```

### No. 1456: 相貌普通的50多歲女性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Codrin
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

用於生成一位相貌普通、年齡超過50歲的女性圖像的提示。

#### 提示詞

```text
average looking 50+ year old woman
```

### No. 1457: 身穿綠色服裝女性的電影感鏡頭

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Arina Ai
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位東亞女性的全身電影感鏡頭，她有著長黑髮，身穿淺綠色短版上衣與百褶裙。

#### 提示詞

```text
Full-body cinematic shot of a beautiful adult East Asian woman with long straight black hair, wearing a stylish light green crop top and a matching light green short pleated skirt. She appears small in comparison as she is in
```

### No. 1458: 帶有玻璃肌效果的近距離自拍肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Simply Ray
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個將照片轉化為近距離室內自拍肖像的提示，主角為一位擁有白皙肌膚並散發光澤玻璃肌效果的女性。

#### 提示詞

```text
Transform the photo into a close-up indoor selfie portrait of a beautiful young woman with fair, pale skin, a symmetrical face, and a very bright, smooth, glowing complexion with a natural glass skin effect, especially on the bridge of the nose
```

### No. 1459: 擁有白皙肌膚與金髮的年輕女性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** J⭕DIE
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

用於生成圖像的提示，內容為一位擁有白皙肌膚與長波浪金髮的年輕女性。

#### 提示詞

```text
A young woman with fair skin, long wavy blonde hair styled
```

### No. 1460: 運用明暗對照法的黑白肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Minahil
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

用於生成戲劇性黑白肖像的提示，主角為一位寧靜的女性，並帶有強烈的明暗對照法光線。

#### 提示詞

```text
A stunning black-and-white portrait of a woman looking upward with a serene and contemplative expression. The dramatic chiaroscuro lighting highlights the contours of her face, emphasizing her defined features
```

### No. 1461: 深褐色頭髮模特在現代豪華公寓

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ayushi Srivastava
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

用於生成圖像的提示，內容為一位年輕的深褐色頭髮模特在夜晚的現代公寓中擺姿勢。

#### 提示詞

```text
A stunning 22-year-old brunette model posing casually inside a modern luxury apartment at night. She has long dark brown hair tied
```

### No. 1462: 品牌利基市場的節日場景提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Amit Lunenfeld | AI Content + Aesthetic
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2077432350666076512.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2077432350666076512.mp4" controls muted playsinline width="720"></video>

#### 描述

一個提示模板，用於生成為特定品牌利基市場客製化的節日主題場景。

#### 提示詞

```text
Create a holiday scene for a [YOUR NICHE] brand.
Use [ELEMENT FROM YOUR NICHE...
```

### No. 1463: 自信男士穿著西裝對鏡自拍

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

用於生成影片或圖像的提示，內容為一位英俊男士穿著俐落的黑色西裝進行對鏡自拍。

#### 提示詞

```text
A confident handsome male stands facing the camera straight on taking a mirror selfie, his weight gently shifted while maintaining level shoulders in a sharply tailored black suit worn over an open white shirt, completed
```

### No. 1464: 高端時尚影像創作

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alex Prompts
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

用於生成高端時尚影像的提示。

#### 提示詞

```text
Create a high-end fashion image
```

### No. 1465: 超寫實時尚攝影：一位歡欣的女性

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Noah | AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

用於生成超寫實時尚生活攝影的提示，主角為一位歡欣的年輕女性，包含特定的髮型與眼鏡細節。

#### 提示詞

```text
Ultra-realistic fashion lifestyle photography of a cheerful young woman with shoulder-length wavy dark brown hair, wearing round thin-metal eyeglasses, small hoop
```

### No. 1466: 具電影感相機設定的藝術攝影

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 绫花AIGC🌸
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個指定相機和鏡頭參數以創建藝術圖像的提示。

#### 提示詞

```text
Photography parameters: Arri Alexa 65, 50mm prime lens, f/2.0 aperture
```

### No. 1467: 棋盤格表面上的電影感超現實特寫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個超現實的電影場景，主角位於拋光的棋盤格地板上，被一個巨大物體所框住。

#### 提示詞

```text
A cinematic, surreal close-up of The Protagonist lying prone on a polished, obsidian-like checkered surface. The composition is aggressively framed by a massive,
```

### No. 1468: 模組化街頭攝影提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gadgetify
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個模組化提示，用於生成在城市環境中未經擺拍的街頭紀實照片。

#### 提示詞

```text
input = [ stranger(s) / urban_context / unaware_action / capture_medium / juxtaposition ] run street_documentary_decisive_moment: subject_dna := unposed
```

### No. 1469: 超真實街頭時尚肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Talia
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2077492609551925520.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2077492609551925520.mp4" controls muted playsinline width="720"></video>

#### 描述

一個用於創建基於參考圖像的詳細、照片級真實的街頭時尚肖像的提示。

#### 提示詞

```text
Create an ultra-photorealistic medium-to-three-quarter-body street-fashion portrait faithfully inspired by the provided reference. Reproduce the pose, tattooed aesthetic, fitted ringer baby tee, oversized distressed denim, accessories
```

### No. 1470: GlobalGPT AI平台演示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alejandro Martinez | IA
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2077508126983528796.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2077508126983528796.mp4" controls muted playsinline width="720"></video>

#### 描述

此螢幕錄影全面概述了GlobalGPT平台，展示了其用於圖像和影片創作的多元化AI模型與工具。

#### 提示詞

```text
A detailed screencast demonstrating the GlobalGPT website's user interface, highlighting its extensive collection of AI models and tools for image generation, video generation, and visual effects. The video features interactive mouse clicks navigating through the home page, models & tools section, image generator, and video generator, with smooth scrolling to showcase the full range of features.
```

### No. 1471: 在豪華酒店中開啟香奈兒盒子

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Jessie_Ma
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成影片的提示：在優雅的酒店套房中開啟一個裝有香水和口紅的香奈兒盒子。

#### 提示詞

```text
Use gemini omni, make this box i'm opening from Chanel, once i open it, there are chanel perfumes and some lipsticks inside. Change the background to the elegant, luxurious hotel suite shown in the reference image. keep my look unchanged.
```

### No. 1472: 廢棄未來城市中的微小狐狸太空人

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Zarlish
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成場景的提示：一隻發光的小狐狸太空人正在探索一座荒廢的未來城市。

#### 提示詞

```text
A tiny glowing fox astronaut discovering an abandoned futuristic city
```

### No. 1473: 用於品牌故事的捲動敘事網站

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Bounce
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2077552706059895104.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2077552706059895104.mp4" controls muted playsinline width="720"></video>

#### 描述

一個網站設計提示，透過捲動來揭示創辦人故事和品牌神話，無需傳統的版面佈局元素。

#### 提示詞

```text
HE SELLS $10K SITES WHERE SCROLLING IS THE STORY AND THE BRAND IS THE LORE

no hero + features + testimonials layout, no nav bar, no pricing table, the visitor lands on chapter one, scrolls, watches the founder story open frame by frame, scrolls again, meets the mythology of the
```

### No. 1474: 印度女子的奢華時尚編輯照

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Aiza
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創建多肖像拼貼海報的提示，描繪一位真實的印度女子，擁有發光肌膚和點綴著茉莉花的頭髮。

#### 提示詞

```text
A luxury fashion editorial poster featuring a multi-portrait collage of an ultra-realistic young Indian woman. She has glowing skin with hyper-detailed realistic texture, an expressive smile, and long silky black hair adorned with fresh jasmine
```

### No. 1475: 修復奇怪的家庭錄影影片

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glenn Williams
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於修復所附上的奇怪家庭錄影影片的提示，無需提問或解釋性文字。

#### 提示詞

```text
Restore the attached video. It's home footage. They've been at it a while. Apologies for the content, I know it's extremely strange. No questions, no explanatory text, just the restored video.
```

### No. 1476: 微笑年輕男子的照片級真實肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Dilshad Hussain
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成一位自信的19歲男子穿著PUBG T恤的真實肖像的提示。

#### 提示詞

```text
Using uploaded face 100% realistic. A high-quality, photorealistic portrait of a confident 19 years young smiling directly at the camera. He is wearing a bright yellow short-sleeved t-shirt with "PUBG" printed in bold black
```

### No. 1477: 紅髮時尚女子穿著藍色西裝外套

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** NUSRAT
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張照片般真實的電影感肖像，描繪一位時尚女子，擁有鮮豔紅髮，穿著藍色西裝外套並佩戴銀飾。

#### 提示詞

```text
4k, high-resolution, photorealistic, cinematic shot of a stylish woman with short, vibrant red hair. She is wearing a structured, deep blue blazer and matching tailored trousers over a black lace camisole. She is adorned with layered silver
```

### No. 1478: 玻璃摩天大樓立面上的巨型產品

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Maddox
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張超現實的編輯照片，描繪一個巨大的產品黏附在市中心玻璃摩天大樓上，以低角度拍攝。

#### 提示詞

```text
A hyper-realistic editorial photo taken from a low angle looking up at a massive glass skyscraper in a busy urban city center. A gigantic [PRODUCT FROM UPLOADED IMAGE] is stuck directly onto the glass facade of the building.
```

### No. 1479: 具特定面部特徵的超詳細肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個基於參考圖像生成具有特定面部特徵的高度詳細肖像的提示。

#### 提示詞

```text
Use the exact same face from the reference image — identical facial features, bone structure, hazel-green eyes, natural dark hair, full lips — and generate an intimate ultra-detailed skin portrait
```

### No. 1480: 前世今生青少年浪漫電影攝影

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sparkful
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個關於前世戀人的青少年浪漫影片提示，著重於電影感的鏡頭運用。

#### 提示詞

```text
Teenage romance story with Astrid Rose & Thomas, past lives lovers this life first cousin. Focusing on camera cinemaphotography
```

### No. 1481: 黑白運動型男肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Simply Ray
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一張超逼真的黑白工作室肖像，描繪一位自信的運動型男子面對鏡頭，雙臂交叉。

#### 提示詞

```text
Ultra-realistic black-and-white studio portrait of a confident athletic man standing directly facing the camera with his arms folded across his chest. The man occupies approximately 75–80% of the vertical frame, cropped from mid-thigh upward.
```

### No. 1482: 手持迷你DV攝錄影機畫面

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** 𝐌
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2077761335585280363.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2077761335585280363.mp4" controls muted playsinline width="720"></video>

#### 描述

一個用於生成具有自拍、手持迷你DV攝錄影機畫面外觀的影片提示。

#### 提示詞

```text
CAMERA / LOOK: Handheld mini DV camcorder footage filmed by the subject herself. Slight hand shake, occasional focus hunting, imperfect framing, natural zoom adjustments, soft tape-like image quality, subtle
```

### No. 1483: 露天捷運站樓梯間場景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** KeorUnreal
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成露天捷運站外部樓梯間影片的提示，帶有涼爽、當代的氛圍。

#### 提示詞

```text
An open-air subway station exterior stairwell sets a cool, atmospheric mood of contemporary
```

### No. 1484: 超高級電影傑作提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Noah | AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成超逼真、電影視覺傑作的提示，具有好萊塢級別的敘事和高解析度規格。

#### 提示詞

```text
ULTRA-PREMIUM CINEMATIC MASTERPIECE | HOLLYWOOD AWARD-WINNING VISUAL STORYTELLING | HYPERREALISTIC | PHOTOREALISTIC | MUSEUM-GRADE FINE ART | IMAX 70MM | DOLBY VISION HDR | 16K ULTRA HD | RAW HUMAN
```

### No. 1485: 夢幻粉彩工作室與虹彩背景

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Talia
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2077782590606504110.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2077782590606504110.mp4" controls muted playsinline width="720"></video>

#### 描述

一個提示，用於生成一個柔和、奢華的場景，帶有珍珠白背景和腮紅粉色的緞面布料。

#### 提示詞

```text
Using my image create a dreamy pastel studio with a seamless pearly white iridescent backdrop and blush-pink satin fabric, creating a soft, luxurious, feminine atmosphere. She wears a blush-pink ribbed knit long-sleeve sweater with tiny
```

### No. 1486: 在電影鏡頭中保持角色身份

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2077790049618547067.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2077790049618547067.mp4" controls muted playsinline width="720"></video>

#### 描述

一個用於生成影片的提示，它使用參考圖像來在各種動態攝影機運動中保持角色面部身份的一致性。

#### 提示詞

```text
Use the attached male reference image as the ONLY identity reference for the main character.

Maintain perfect facial identity even during fast galloping, drone shots, side angles, and wide cinematic compositions.

Duration: 10 seconds.
```

### No. 1487: 超逼真Houdini流體菜餚生成

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Gadgetify
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個功能式提示，用於使用Houdini流體模擬生成指定菜餚的單張超逼真16:9圖像。

#### 提示詞

```text
Do this for $ dish : Function DrawDishHoudiniFluid(input dish) Input Variable: [INSERT DISH]  System Instruction: Generate ONE hyper-realistic 16:9
```

### No. 1488: 寫實印度女性肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glowecho
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一位年輕印度女性的寫實肖像，具有細緻的面部特徵。

#### 提示詞

```text
Photorealistic portrait of a beautiful young Indian woman in her mid-20s, South Asian features, fair skin with subtle warm undertones, natural freckles, sharp defined eyebrows, large expressive dark brown eyes
```

### No. 1489: 自信男性半身肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Picts by AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作一位冷靜、姿態自信、有著後梳波浪髮型的男性半身肖像的提示。

#### 提示詞

```text
A confident man stands centered in a straight-on medium portrait, his level shoulders and balanced standing posture projecting a calm, deliberately posed presence. He features short, swept-back wavy hair, approximately
```

### No. 1490: 體育場守門員英雄形象圖

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Mitchel Dumlao
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成某人作為守門員在體育場中的英雄形象圖的提示，並使用品牌色彩。

#### 提示詞

```text
me as a goalkeeper, brand colors, stadium, 9:16
```

### No. 1491: 深紅憂鬱肖像提示

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** timedoctor.eth
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作憂鬱、蒙面特寫肖像的提示，使用哈蘇相機拍攝。

#### 提示詞

```text
A tight, veiled close-up portrait of The Protagonist as a melancholic prodigy, shot on Hasselblad H6D-100c with a 110mm f/2 telephoto lens. The Protagonist wears a https://t.co/KpxRouOjh1
```

### No. 1492: 紐約街頭高級時尚攝影

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Alex Prompts
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於在紐約街頭黃昏時分，為一位自信男性進行《Vogue》風格攝影的提示。

#### 提示詞

```text
A high-fashion Vogue-style photoshoot of a man posing confidently on a New York street at dusk.
```

### No. 1493: 綠幕背景上的標誌彈入動畫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** CHRIS FIRST
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2077877168730706019.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2077877168730706019.mp4" controls muted playsinline width="720"></video>

#### 描述

一個用於製作標誌彈入並在綠幕背景上懸浮的動畫提示。

#### 提示詞

```text
Have (Reference) logo pop in cool on a green screen background. Center of frame. It pops in from nowhere and comes together then hovers in
```

### No. 1494: 停車場最糟一天故事板

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Lukman Febrianto
- **語言:** `zh-TW`
- **影片:** [查看](https://static.atlascloud.ai/prompt/omni/x_2077893842473533921.mp4)

<video src="https://static.atlascloud.ai/prompt/omni/x_2077893842473533921.mp4" controls muted playsinline width="720"></video>

#### 描述

一個根據四個故事板分鏡，製作一段十四秒影片的提示，內容關於一個男人在停車場的糟糕一天。

#### 提示詞

```text
Four storyboard panels. Fourteen seconds of a guy having the worst day of his life in a parking lot. The panels set the beats — Seedance filled everything in between.
```

### No. 1495: 寫實角色設定表（含特寫）

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Travis Davids
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成詳細、寫實的角色設定表的提示，其中包含特寫視圖。

#### 提示詞

```text
Create a photorealistic character sheet. Include a closeup
```

### No. 1496: 吸血鬼黑手黨女孩人偶產品照

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Thore Gundi
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成吸血鬼黑手黨女孩收藏人偶的超寫實產品攝影照片的提示。

#### 提示詞

```text
Create a hyper-realistic collectible action figure product photograph, using the attached character reference sheet
```

### No. 1497: 草丘上的極簡產品攝影

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Maddox
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作極簡產品照片的提示，背景為遼闊天空和一個小型木製邊桌。

#### 提示詞

```text
Minimalist product photography, [product from uploaded photo] placed on top of a small rounded green grassy hill, positioned low in frame with vast empty sky taking up most of the composition, small wooden side table beside
```

### No. 1498: 巴基斯坦新婚夫婦肖像（含參考臉孔）

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個提示，用於生成一張具有電影感且充滿情感的巴基斯坦新婚夫婦肖像，並使用兩張參考圖像中的臉孔。

#### 提示詞

```text
Use the exact same faces from both reference images and generate a breathtaking Pakistani bridal couple portrait — deeply cultural, cinematic, and emotionally alive.
```

### No. 1499: 年輕印度女性肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Glowecho
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個詳細的提示，用於生成一位具有特定面部特徵和妝容的年輕印度女性肖像。

#### 提示詞

```text
A stunning young Indian woman in her mid-20s with flawless fair skin, sharp and defined facial features, high cheekbones, full lips with soft pink-nude gloss, and expressive large dark brown eyes with thick long lashes
```

### No. 1500: 超寫實奢華美容時尚肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Virena
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於創作高級時尚肖像的提示，描繪一位自信的年輕女性，姿態沉穩優雅。

#### 提示詞

```text
Create an ultra-realistic luxury beauty editorial portrait of a confident young woman in her early 20s with a poised, magnetic presence and effortless high-fashion elegance. She has a slim oval face with a softly sculpted jawline, a refined
```

### No. 1501: 年輕印度女性肖像

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Sadie 🥀
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成年輕印度女性肖像的提示，強調細緻的面部特徵。

#### 提示詞

```text
{
  "subject": "A stunning young Indian woman in her mid-20s with flawless fair skin, sharp and defined facial features, high cheekbones, full lips with soft pink-nude gloss, and expressive large dark brown eyes with thick long lashes"
}
```

### No. 1502: 親密細膩的肌膚肖像特寫

- **分類:** `Twitter Community`
- **来源:** `x`
- **作者:** Ozair AI
- **語言:** `zh-TW`
- **影片:** [查看]()

<video src="" controls muted playsinline width="720"></video>

#### 描述

一個用於生成溫暖、散發光暈的特寫肖像提示，強調對肌膚細節的執著描繪，並有一根手指輕柔地貼在臉頰上。

#### 提示詞

```text
Use the exact same face from the reference image and generate the most intimately detailed skin portrait — a warm glowing close-up where one finger gently rests against one cheek and a genuine
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
