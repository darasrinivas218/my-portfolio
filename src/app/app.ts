import { Component, HostListener, OnInit, computed, signal } from '@angular/core';
import {
  EDUCATION, EXPERIENCE, GITHUB_USERNAME, PROFILE, PROJECTS, SKILLS, STATS,
} from './portfolio.data';

interface Repo {
  name: string; description: string | null; html_url: string; language: string | null;
  stargazers_count: number; forks_count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly profile = PROFILE;
  protected readonly stats = STATS;
  protected readonly skills = SKILLS;
  protected readonly experience = EXPERIENCE;
  protected readonly projects = PROJECTS;
  protected readonly education = EDUCATION;
  protected readonly year = new Date().getFullYear();

  protected readonly heroTags = ['.NET 8', 'Angular', 'Azure & AWS', 'Kafka', 'PostgreSQL'];
  protected readonly pillars = [
    { n: '01', title: 'Architecture & leadership', text: 'Solution design, code review and mentoring grounded in SOLID principles and clean architecture.' },
    { n: '02', title: 'Legacy modernization', text: 'Mainframe COBOL/JCL to idiomatic C#/.NET with verified functional equivalence.' },
    { n: '03', title: 'Cloud, data & AI', text: 'Kafka telemetry, EF Core performance work, and Azure OpenAI, LangChain/LangGraph and RAG features in Angular apps.' },
  ];
  protected readonly showAll = signal(false);
  protected readonly visibleJobs = computed(() =>
    this.showAll() ? this.experience : this.experience.slice(0, 3));

  protected readonly nav =['about', 'skills', 'experience', 'projects', 'github', 'contact'];
  protected readonly active = signal('about');
  protected readonly dark = signal(true);
  protected readonly menuOpen = signal(false);
  protected readonly selected = signal(0);
  protected readonly repos = signal<Repo[]>([]);
  protected readonly githubUser = GITHUB_USERNAME;

  ngOnInit() {
    const saved = this.read('theme-v2');
    this.setTheme(saved === 'dark');
    if (GITHUB_USERNAME) this.loadRepos();
  }

  protected toggleTheme() { this.setTheme(!this.dark()); }

  private setTheme(dark: boolean) {
    this.dark.set(dark);
    document.documentElement.dataset['theme'] = dark ? 'dark' : 'light';
    try { localStorage.setItem('theme-v2', dark ? 'dark' : 'light'); } catch { /* storage unavailable */ }
  }

  private read(key: string) {
    try { return localStorage.getItem(key); } catch { return null; }
  }

  @HostListener('window:scroll')
  protected onScroll() {
    const y = window.scrollY + 140;
    for (const id of [...this.nav].reverse()) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= y) { this.active.set(id); break; }
    }
  }

  protected go(id: string) {
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  protected copy(text: string, btn: HTMLElement) {
    navigator.clipboard?.writeText(text).then(() => {
      const old = btn.textContent;
      btn.textContent = 'Copied ✓';
      setTimeout(() => (btn.textContent = old), 1400);
    });
  }

  private async loadRepos() {
    try {
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
      if (res.ok) this.repos.set(await res.json());
    } catch { /* offline or rate-limited: placeholder remains */ }
  }
}
