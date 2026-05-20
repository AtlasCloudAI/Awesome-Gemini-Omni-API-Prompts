# Awesome Gemini Omni Prompts

![Awesome Gemini Omni Logo](./logo.png)

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Stars](https://img.shields.io/github/stars/AtlasCloudAI/Awesome-Gemini-Omni-API-Prompts?style=flat-square)](https://github.com/AtlasCloudAI/Awesome-Gemini-Omni-API-Prompts/stargazers)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](LICENSE)

A curated collection of high-quality prompts and patterns for **Gemini Omni** — Google's native multimodal video model announced at Google I/O 2026. This repository is updated in real time every day, designed to help creators find inspiration faster.

Whether you're building a video generation app, exploring the Gemini API, or chasing cleaner prompt patterns, you'll find ready-to-use prompts here that unlock Gemini Omni's full potential.

> **API Usage:** All prompts are designed for the [Gemini API](https://www.atlascloud.ai/models/list?provider=GOOGLE) using model `gemini-omni` (or `gemini-omni-flash` for faster, cheaper generations).

```python
from google import genai

client = genai.Client()
operation = client.models.generate_videos(
    model="gemini-omni",
    prompt="<paste any prompt from this list>",
    config={"aspect_ratio": "16:9", "duration_seconds": 8, "resolution": "1080p"},
)
while not operation.done:
    operation = client.operations.get(operation)
video = operation.response.generated_videos[0]
video.video.save("output.mp4")
```

---

## Why Gemini Omni?

Gemini Omni is a leap beyond specialized video models because it is a true omni-modal system — one model that ingests text, images, audio, and video, and outputs video grounded in real-world knowledge. Key capabilities:

- **Native multimodality** — Mix text, reference images, audio tracks, and source clips in a single prompt
- **Character consistency** — Faces, outfits, and props stay coherent across scenes, lighting, and actions
- **Reference-based editing** — Apply a style image, transfer motion from a clip, or swap an environment with plain language
- **Conversational remixing** — Iterate with chat-style follow-ups like "make the last 3 seconds slower" or "swap the city for Tokyo at night"
- **Audio-grounded lip-sync** — Provide a voice track and Omni animates accurate mouth shapes and timing
- **Physics-aware** — Better grasp of gravity, momentum, fluids, and cloth than older diffusion-only video models

---

## Table of Contents

- [Transform & Stylization](#transform--stylization)
- [Action & Motion](#action--motion)
- [Camera & Perspective](#camera--perspective)
- [Text & Sequences](#text--sequences)
- [Multi-Input & Reference](#multi-input--reference)
- [Resources & API Docs](#resources--api-docs)
- [Contributing](#contributing)

---

## Transform & Stylization

Prompts featuring visual transformations, style changes, and metamorphosis effects.

### Mirror: Liquid Metal Ripple

**Source:** DeepMind Official

**Prompt:**
```
When the person touches the mirror, make the mirror ripple beautifully like liquid, 
and the person's arm turns into reflective mirror material
```

**Notes:**
- DeepMind public page exposed the edited output video, but did not expose a separate downloadable input video URL for this example.

---

### Mirror: Line Art Transformation

**Source:** DeepMind Official

**Prompt:**
```
When the person touches the mirror, the person transforms into a detailed monochrome line art drawing
```

---

### Mirror: Puppet Transformation

**Source:** DeepMind Official

**Prompt:**
```
When the person touches the mirror, the person suddenly transforms into a cute felted stuffed puppet 
version with large googley eyes and glasses
```

---

### Mirror: Holograph Transformation

**Source:** DeepMind Official

**Prompt:**
```
When the person touches the mirror, the person instantly transform into a vintage monochrome transparent 3d line art hologram, 
inside of a monochrome 3d holodeck maintaining the structure and details of the room and environment
```

---

### Mirror: Voxel World

**Source:** DeepMind Official

**Prompt:**
```
When the person touches the mirror, the entire environment turns into 3d voxel art
```

---

## Action & Motion

Prompts focusing on movement, physics, and dynamic action sequences.

### Animal Toy Sound Interaction

**Source:** DeepMind Official

**Prompt:**
```
When the finger in <video> touches the animal toy play the sound the animal makes
```

**Notes:**
- The public page exposed only the edited result for this video-edit example; no standalone input clip URL was published.

---

### Apartments Lights Sync to Music

**Source:** DeepMind Official | Updated in Prompt Guide

**Prompt:**
```
The lights of the apartments start turning on in sync with the music.
```

---

### Hand Hole Super Zoom & Magnification

**Source:** DeepMind Official

**Prompt:**
```
Make it look like the weird shape of my hand hole super zooms and magnifies the ground it's looking at in sharper quality.
```

**Notes:**
- The public page exposed only the edited result for this video-edit example; no standalone input clip URL was published.

---

### Marble Chain Reaction

**Source:** DeepMind Official

**Prompt:**
```
A marble rolling fast on a chain reaction style track, continuous smooth shot
```

---

### Bee to Fireflies Transformation

**Source:** DeepMind Prompt Guide

**Prompt:**
```
Change the bee into a small swarm of fireflies.
```

---

### Butterfly to Bee Transformation

**Source:** DeepMind Prompt Guide

**Prompt:**
```
Change the butterfly to a bee.
```

---

### Small Ships to Stingrays

**Source:** DeepMind Prompt Guide

**Prompt:**
```
Change the small ships to stingrays.
```

---

### Astronaut to Sea Anemone

**Source:** DeepMind Prompt Guide

**Prompt:**
```
Change the astronaut to a sea anemone.
```

---

### Spaceships: White Origami

**Source:** DeepMind Prompt Guide

**Prompt:**
```
Change the ships to be made from white origami paper.
```

---

## Camera & Perspective

Prompts for camera movements, angles, and cinematic techniques.

### Violinist Input Base Shot

**Source:** Google Blog | DeepMind Sequence

**Prompt:**
```
A video of a violinist playing a song.
```

**Notes:**
- This clip is the base video in a multi-turn edit chain and acts as the input for the following violin examples.

---

### Violinist: Transport to New Environment

**Source:** DeepMind Official

**Prompt:**
```
Transport the violinist to the image environment
```

**Notes:**
- Uses the output of 009_violinist_input as this step's input.

---

### Violinist: Invisible Violin

**Source:** DeepMind Official

**Prompt:**
```
Make the violin invisible
```

**Notes:**
- Uses the output of 010_violinist_transport_environment as this step's input.

---

### Violinist: Over-the-Shoulder Angle

**Source:** DeepMind Official

**Prompt:**
```
Change the camera angle to be over the violinist's shoulder.
```

**Notes:**
- Uses the output of 011_violinist_invisible_violin as this step's input.

---

### Camera Tilt: Shoes to Medium Shot

**Source:** DeepMind Prompt Guide

**Prompt:**
```
Change the camera angle, a close-up on his shoes, quickly tilting up to medium shot, then widening.
```

**Notes:**
- The prompt-guide page exposed only the output clip for this camera edit example; no separate input clip URL was exposed.

---

## Text & Sequences

Prompts generating text, typography, and sequential storytelling.

### Word-by-Word Text Sync

**Source:** DeepMind Prompt Guide

**Prompt:**
```
word by word, one word on a the screen at a time: did, you, know, that, this, model, can, do, pretty, good, text!? 
each word appears with a different animated style, perfect pacing to a rhythm, sizzle reel.
```

**Notes:**
- The prompt-guide page exposed the output video, but did not expose a separate downloadable input clip for this text-rendering example.

---

### Skateboard Motion Effects

**Source:** DeepMind Prompt Guide

**Prompt:**
```
Edit this keeping everything the same. Add animated motion effects coming out of the skateboard.
```

**Notes:**
- The prompt-guide page exposed only the edited result here; no separate standalone input clip URL was exposed.

---

### Alphabet Items Sequence

**Source:** Google Blog | DeepMind Sequence

**Prompt:**
```
The video shows items of the alphabet. An unusual item starting with each letter is shown sitting on a table 
(like a Capybara for C, disco globe for D and Lava Lamp for L). All 26 letters must be represented by 26 items 
with matching lower thirds displaying the letter. Only one item and lower third at a time. Each lower third must 
look like a black marker written on a slip of paper in the bottom left. Rapid fire, roughly 9 frames per item at 24FPS. 
Last frame is a slip of paper "THE END". The whole video is accompanied by calm smooth music.
```

---

## Multi-Input & Reference

Prompts combining multiple inputs: video, image, and audio together.

### Birds Forming Shape with Audio

**Source:** DeepMind Prompt Guide

**Inputs:**
- Reference Video
- Reference Image
- Audio Track
- Text Overlay

**Prompt:**
```
The birds from <video> loosely form the imperfect shape of a bird based on <image>. 
They move to the music from <audio> and dissipate as they fly
```

---

### Storyboard: Show Me in This Story

**Source:** DeepMind Prompt Guide

**Inputs:**
- Storyboard Image 1
- Storyboard Image 2

**Prompt:**
```
Show me in this story. Follow the story exactly in order starting top left. Entire story in 10 seconds. Cinematic
```

---

## Resources & API Docs

### Official References
- [Gemini API Documentation](https://ai.google.dev/gemini-api/docs)
- [Google AI Studio](https://aistudio.google.com)
- [Vertex AI — Generative Media](https://cloud.google.com/vertex-ai/generative-ai/docs)
- [Gemini API Pricing](https://ai.google.dev/gemini-api/docs/pricing)
- [DeepMind Gemini Omni](https://deepmind.google/models/gemini-omni/)
- [DeepMind Prompt Guide](https://deepmind.google/models/gemini-omni/prompt-guide/)

### API Quick Reference

```python
from google import genai

client = genai.Client()

# Text-to-video
operation = client.models.generate_videos(
    model="gemini-omni",
    prompt="your prompt here",
    config={
        "aspect_ratio": "16:9",     # 16:9, 9:16, 1:1, 21:9, 4:3
        "duration_seconds": 8,       # 4–15s standard
        "resolution": "1080p",       # 720p, 1080p, 4k
        "fps": 24,                   # 24 or 30
        "negative_prompt": "blurry, low quality, watermark",
    },
)

# Image-to-video (reference)
operation = client.models.generate_videos(
    model="gemini-omni",
    prompt="animate the subject with subtle natural motion",
    image="reference.png",
    config={"aspect_ratio": "9:16", "duration_seconds": 6},
)

# Conversational edit (follow-up on prior generation)
operation = client.models.edit_video(
    model="gemini-omni",
    source_video_id=prev_video.id,
    prompt="make it slower and add golden hour lighting",
)
```

### Prompt Engineering Tips

1. **Lead with cinematography vocabulary** — Specify lens, camera move, and lighting for better results.
2. **Structure as Subject → Motion → Camera → Mood** — Keep each layer explicit; Gemini Omni follows multi-clause prompts reliably.
3. **Anchor identity with reference images** — For any character or product, attach a reference and write "use the attached image as the subject, preserve face/label/colorway exactly."
4. **Use explicit durations and timestamps** — `0–4s wide shot, 4–8s push-in, 8–12s close-up` gives Omni a cut list to follow.
5. **Specify aspect ratio in-prompt as a backup** — Even if you set it in config, mention `9:16 vertical` or `21:9 cinemascope` in the text.
6. **Negative cues work** — Add `no captions, no watermark, no morphing` to suppress common artifacts.
7. **For consistency across scenes** — Repeat the identity descriptor in each scene block rather than relying on coreference.
8. **For edits, isolate what's changing** — "Keep everything identical except…" outperforms re-describing the whole scene.

---

## Contributing

Contributions are welcome! Submit a Pull Request to add your best Gemini Omni prompts.

**Guidelines:**
- Include the full prompt text in a fenced code block.
- Note any required reference images, audio, or source videos.
- Categorize appropriately — open an issue first if you think a new section is warranted.
- Provide a source link (DeepMind, Google Blog, Prompt Guide, etc.) if the prompt isn't original.
- Example output clips are encouraged but not required.

---

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=AtlasCloudAI/Awesome-Gemini-Omni-API-Prompts&type=Date)](https://star-history.com/#AtlasCloudAI/Awesome-Gemini-Omni-API-Prompts&Date)

---

## License

This project is licensed under the Creative Commons Attribution 4.0 International License — see the [LICENSE](LICENSE) file for details.

*Community-maintained. Not affiliated with Google or DeepMind. Free & Open Source.*
