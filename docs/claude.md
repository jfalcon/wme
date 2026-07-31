# Claude Code

This document outlines project usage with the Claude harness. This is meant for the developer's
edification and does not need to be loaded into Claude's context as it already knows this
information.

## What Goes Where

In the `.claude/` folder:

| Path | Commit to git? | Purpose |
| ---- | --------------- | ------- |
| `.claude/skills/` | Yes | Project skills, shared across the team |
| `.claude/commands/` | Yes | Project slash commands, shared across the team |
| `.claude/agents/` | Yes | Project subagent definitions, shared across the team |
| `.claude/settings.json` | Yes | Shared project settings and permissions |
| `.claude/settings.local.json` | No | Personal overrides, machine-specific |

## Skills

Skills live one folder per skill: `.claude/skills/<skill-name>/SKILL.md`, plus any supporting
scripts or reference files that skill needs.

Run one directly with `/<skill-name>` (e.g. `/security`), or it auto-triggers when a task matches
its `description`.

## Looping

`/loop` runs a prompt or slash command repeatedly, on a schedule, without you driving every
iteration. There are two modes:

* **Fixed-interval** — `/loop 5m /some-prompt` fires on a strict cadence (every 5 minutes here),
  regardless of what happened last time.
* **Dynamic (self-paced)** — `/loop` with no interval and no prompt. Claude runs a check
  immediately, then picks its own delay before the next check based on what it just observed
  (e.g. wait longer on a quiet branch, check sooner if CI is mid-run), and reschedules itself via
  `ScheduleWakeup` instead of a fixed timer.

### Starting one

```text
/loop                     # dynamic, autonomous default — Claude decides what "checking in" means
/loop <prompt>            # inline prompt with self-paced checks if interval is not in the prompt
/loop 5m                  # dynamic prompt, fixed 5-minute cadence
/loop 10m /code-review    # runs /code-review every 10 minutes
/loop 5m <prompt>         # inline prompt with optional exit condition ran every 5 minutes
```

The bare `/loop` (no prompt) is the "autonomous" mode: each wake-up, Claude re-reads the
conversation and looks for unfinished work to continue — an in-progress PR, a dangling question,
a commitment it made and didn't follow through on. It is meant to be a steward of work already in
motion, not a way to invent new tasks.

### Stopping one

Loops don't run forever by accident — each iteration explicitly decides whether to continue.
Ways it stops:

* Claude decides the task is done or there's nothing actionable left, three quiet checks in a row.
* You ask it to stop, at which point it calls `ScheduleWakeup` with `stop: true` and tears down
  any `Monitor` it armed.
