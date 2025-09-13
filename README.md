# Simple Task Manager (PWA)

*A lightweight, installable task manager with a built-in calendar, daily time budgets, per-task time allocation, and alert notifications.*

## Overview

This project is a simple yet powerful Task Manager focused on everyday productivity:

* **Task Calendar**: Plan visually by month/week/day.
* **Daily Time Control**: Define a **time budget per day** and see remaining capacity.
* **Per-Task Time Allocation**: Estimate and log time against each task.
* **Notifications & Alerts**: Get reminders for due dates and time-budget thresholds.
* **Installable PWA**: Works offline, syncs when back online, and can be installed on desktop/mobile.

## Features

* Task CRUD (create, edit, complete, archive)
* Calendar views (Month / Week / Day) with drag-and-drop scheduling
* Daily time budget with visual indicators
* Per-task: estimate, actuals, and overrun warnings
* Web Push / in-app notifications for due tasks and time alerts
* PWA: offline cache, install prompt, service worker, and app manifest
* Search & filters (status, date, priority, tags)
* Keyboard shortcuts for quick productivity
* Optional auth (local/JWT/OAuth)—replace with your preferred method
* Light/Dark theme

---

## Usage

1. **Create Tasks** with title, description, priority, tags, estimate, and due date.
2. **Assign Time** per task (estimate) and **log actuals** as you work.
3. **Plan in the Calendar**: drag tasks into time slots or specific dates.
4. **Set Daily Time Budget** (e.g., 6h/day). The app shows remaining capacity.
5. **Enable Notifications** when prompted to receive due-date and over-budget alerts.
6. **Install as PWA**: Use the browser’s *Install App* option for a native-like experience.
7. **Go Offline**: Continue using the app. Data syncs when back online.

---

## PWA

* **Service Worker**: Caches shell & API fallbacks for offline use.
* **Web App Manifest**: Icons, name, theme, display mode.
* **Installability**: Triggers install prompt.
* **Offline**: Read tasks and create offline mutations queued for sync.

---

## Roadmap

* [ ] Repeating tasks & templates
* [ ] iCal export / import
* [ ] Advanced reports (burndown, weekly summaries)
* [ ] Team mode (assign to users, shared calendars)
* [ ] Mobile-first time tracker UI

---

## License

MIT © Enoi Barrera Guzman