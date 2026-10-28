// Set to the candidate's GitHub username to load live public repositories.
// Left empty, the GitHub section shows a placeholder instead.
export const GITHUB_USERNAME = '';

export const PROFILE = {
  name: 'Srinivasulu Dara',
  title: 'Senior .NET Full Stack Developer',
  tagline:
    'I design and ship enterprise-grade .NET and Angular platforms, from mainframe modernization to real-time cloud monitoring.',
  location: 'United States',
  email: 'Dara.srinivas218@gmail.com',
  phone: '+1 720 626 7573',
  linkedin: 'https://linkedin.com/in/srinivasulu-dara',
  github: GITHUB_USERNAME ? `https://github.com/${GITHUB_USERNAME}` : '',
  about: [
    'Senior full stack engineer with 10 years of experience building enterprise web and desktop applications on the Microsoft stack. I lead development teams, architect scalable solutions, and mentor engineers on SOLID principles, clean architecture and testable design.',
    'My recent work spans a large-scale COBOL-to-C#/.NET modernization, Kafka-based telemetry platforms, and Angular/React front ends with AI-assisted features built on OpenAI and Azure Cognitive Services.',
  ],
};

export const STATS = [
  { value: '10+', label: 'Years of experience' },
  { value: '1.5M', label: 'Lines of COBOL modernized' },
  { value: '168', label: 'Tables in migrated schema' },
  { value: '7', label: 'Enterprise engagements' },
];

export interface SkillGroup { name: string; icon: string; items: string[]; }
export const SKILLS: SkillGroup[] = [
  { name: 'Languages', icon: '', items: ['C#', 'Python', 'TypeScript', 'JavaScript', 'T-SQL', 'PL/SQL', 'HTML5', 'CSS3', 'XML/XSLT'] },
  { name: 'Backend & .NET', icon: '', items: ['.NET 8', 'ASP.NET Core', 'Web API', 'ASP.NET MVC', 'EF Core', 'LINQ', 'ADO.NET', 'gRPC', 'GraphQL', 'WCF', 'SOAP', 'Kafka'] },
  { name: 'Frontend & Desktop', icon: '', items: ['Angular 8–22', 'React', 'Redux', 'Blazor', 'RxJS', 'Material UI', 'PrimeNG', 'Bootstrap', 'jQuery', 'WPF', 'Windows Forms'] },
  { name: 'AI & Generative AI', icon: '', items: ['Azure OpenAI', 'OpenAI APIs', 'LangChain', 'LangGraph', 'LLMs', 'RAG', 'Vector databases', 'AI agents', 'Multi-agent orchestration', 'Agentic workflows', 'Prompt engineering', 'GitHub Copilot'] },
  { name: 'Architecture & Security', icon: '', items: ['Microservices', 'API Gateway', 'Event-driven design', 'REST APIs', 'SOA', 'Clean architecture', 'SOLID', 'Design patterns', 'OAuth 2.0', 'JWT', 'Azure AD', 'RBAC'] },
  { name: 'Data', icon: '', items: ['SQL Server', 'PostgreSQL', 'Oracle', 'Azure SQL', 'Cosmos DB', 'MongoDB', 'Databricks', 'Delta Lake', 'Spark', 'Elasticsearch', 'Kibana'] },
  { name: 'Cloud & DevOps', icon: '', items: ['Azure', 'App Service', 'Azure Functions', 'Azure Storage', 'Azure DevOps', 'AKS', 'AWS', 'Docker', 'Terraform', 'Jenkins', 'Bamboo', 'GitHub Actions', 'CodePipeline'] },
  { name: 'Testing & Observability', icon: '', items: ['xUnit', 'NUnit', 'Jest', 'Jasmine/Karma', 'Cypress', 'Playwright', 'JMeter', 'SonarQube', 'Splunk'] },
  { name: 'Tools & Process', icon: '', items: ['Visual Studio', 'Git', 'GitHub', 'Bitbucket', 'TFS', 'Subversion', 'Jira', 'Confluence', 'Swagger', 'Postman', 'IIS', 'Agile/Scrum'] },
];

export interface Job {
  company: string; role: string; project: string; period: string; location: string;
  highlights: string[]; tech: string[]; current?: boolean;
}
export const EXPERIENCE: Job[] = [
  {
    company: 'S3 Partners', role: 'Senior Developer · Ionic Technologies LLC', project: 'Black App',
    period: 'Aug 2025 – Present', location: 'New York, USA', current: true,
    highlights: [
      'Led modernization of a mission-critical benefits platform: ~1.5M lines of COBOL and 160K lines of JCL into production-grade C#/.NET with functional equivalence to the legacy system.',
      'Defined the EF Core + PostgreSQL (Npgsql) data-access approach; removed N+1 patterns and tuned nightly batch workloads with projections, AsNoTracking, compiled queries and batching.',
      'Mapped packed-decimal and fixed-width semantics to PostgreSQL types with exact decimal arithmetic and rounding rules for benefit calculations.',
      'Built xUnit/NUnit regression suites comparing modernized output to legacy baselines; enforced SonarQube and CI/CD quality gates via AWS CodeBuild/CodePipeline.',
      'Contributed to a COBOL-field-to-PostgreSQL data dictionary across 168 tables and 4,000+ fields.',
    ],
    tech: ['.NET 8', 'ASP.NET Core', 'Angular', 'EF Core', 'PostgreSQL', 'AWS', 'Docker', 'SonarQube'],
  },
  {
    company: 'Kantar', role: 'Senior .NET Developer · Cognizant', project: 'UAMC',
    period: 'Feb 2025 – Aug 2025', location: 'New York, USA',
    highlights: [
      'Led end-to-end delivery: architecture decisions, sprint priorities, code reviews and technical guidance.',
      'Built .NET Core and React dashboards monitoring PMAX, Kubernetes, NetApp and VMAX storage environments.',
      'Designed .NET microservices and Kafka telemetry flows for real-time monitoring, alerting and analytics.',
      'Automated delivery with GitHub, Jenkins, Terraform and Bamboo; secured AWS/Azure workloads with IAM, WAF and encryption.',
    ],
    tech: ['.NET Core', 'React', 'Angular', 'Kafka', 'Kubernetes', 'Terraform', 'Cypress', 'Splunk'],
  },
  {
    company: 'Daimler Truck Innovation Center', role: 'Senior Full Stack .NET Developer · Cognizant', project: 'X-RAD',
    period: 'Jan 2024 – Feb 2025', location: 'Bangalore, India',
    highlights: [
      'Built RESTful ASP.NET Core services consumed by Angular, with lazy loading, modular structure and RxJS optimizations.',
      'Created reusable shared-library components with PrimeNG, improving cross-project reuse.',
      'Created Jenkins CI/CD pipelines with SonarQube quality checks; migrated Oracle scripts to SQL Server.',
    ],
    tech: ['ASP.NET Core', 'Angular', 'PrimeNG', 'EF', 'SQL Server', 'Jenkins', 'NUnit'],
  },
  {
    company: 'Wells Fargo', role: 'Senior Full Stack .NET Developer · Cognizant', project: '1W2',
    period: '2023 – 2024', location: 'Bangalore, India',
    highlights: [
      'Designed a WPF desktop application using MVVM and the Repository pattern, backed by Web API services.',
      'Tuned SQL performance, implemented role-based security, and load-tested APIs with JMeter.',
    ],
    tech: ['WPF', 'MVVM', 'Web API', 'EF', 'SQL Server', 'JMeter'],
  },
  {
    company: 'Johnson Controls', role: 'Senior Full Stack .NET Developer · Cognizant', project: 'Open Blue Companion',
    period: 'Sep 2021 – Jan 2023', location: 'Bangalore, India',
    highlights: [
      'Built accessible (WCAG) Angular components for a shared design system used across enterprise applications.',
      'Implemented RBAC in Angular, Azure AD authentication, and Playwright browser-level tests.',
      'Automated SharePoint-to-Azure Blob file transfer with Power Automate.',
    ],
    tech: ['ASP.NET Core', 'Angular', 'Azure AD', 'EF Core', 'Playwright', 'Azure'],
  },
  {
    company: 'Infosys', role: 'Senior Full Stack .NET Developer', project: 'InfyMeWeb',
    period: 'Aug 2018 – Sep 2021', location: 'Bangalore, India',
    highlights: [
      'Delivered the C# backend and SPA front ends using ASP.NET MVC, AngularJS/Angular and React.',
      'Authored SQL Reporting Services reports, stored procedures and LINQ-based data layers.',
    ],
    tech: ['ASP.NET MVC', 'Web API', 'Angular', 'ADO.NET', 'LINQ', 'SSRS'],
  },
  {
    company: 'Royal Sundaram General Insurance', role: '.NET Developer · Inube Software Solutions', project: 'Legal content platform',
    period: 'Nov 2016 – Aug 2018', location: 'Bangalore, India',
    highlights: [
      'Led Scrum cycles for legal content delivery across U.S. states and international jurisdictions.',
      'Exposed secure Web API feeds with rate limiting, throttling and caching; built XSLT-based content transformation.',
    ],
    tech: ['ASP.NET MVC 5', 'Web API 2', 'AngularJS', 'XSLT', 'EF', 'SQL Server', 'TFS'],
  },
];

export interface Project {
  title: string; summary: string; impact: string[]; tech: string[];
  file: string; code: string;
}
export const PROJECTS: Project[] = [
  {
    title: 'COBOL → .NET Benefits Platform',
    summary: 'Mainframe modernization with exact functional equivalence to the legacy system.',
    impact: ['1.5M LOC COBOL + 160K LOC JCL converted', '168-table PostgreSQL schema', 'Regression-verified against legacy baselines'],
    tech: ['C#', '.NET 8', 'EF Core', 'PostgreSQL'],
    file: 'BenefitCalculator.cs',
    code: `public sealed class BenefitCalculator(IRateTable rates)
{
    // COBOL COMP-3 semantics: exact decimal math, explicit rounding
    public decimal Calculate(Household h)
    {
        var gross = h.Income.Sum(i => i.MonthlyAmount);
        var net   = gross - rates.StandardDeduction(h.Size);
        var share = Math.Max(0m, rates.MaxAllotment(h.Size) - net * 0.30m);

        return Math.Round(share, 0, MidpointRounding.AwayFromZero);
    }
}`,
  },
  {
    title: 'High-Volume EF Core Data Access',
    summary: 'Tuned nightly batch workloads by eliminating N+1 queries and tracking overhead.',
    impact: ['Projection-based reads', 'Compiled queries + batching', 'Resilient Npgsql connections'],
    tech: ['EF Core', 'Npgsql', 'LINQ'],
    file: 'EligibilityQueries.cs',
    code: `private static readonly Func<AppDbContext, DateOnly, IAsyncEnumerable<CaseDto>> Due =
    EF.CompileAsyncQuery((AppDbContext db, DateOnly d) =>
        db.Cases
          .AsNoTracking()
          .Where(c => c.RecertDate <= d)
          .Select(c => new CaseDto(c.Id, c.RecertDate, c.Members.Count)));

public IAsyncEnumerable<CaseDto> GetDueAsync(DateOnly day) => Due(db, day);`,
  },
  {
    title: 'Real-Time Storage Telemetry',
    summary: 'Kafka-driven monitoring for capacity, IOPS and anomaly events across data centers.',
    impact: ['.NET microservices on Docker/AKS', 'Alerting + analytics streams', 'React & Angular dashboards'],
    tech: ['Kafka', '.NET', 'Kubernetes', 'React'],
    file: 'MetricsConsumer.cs',
    code: `while (!stoppingToken.IsCancellationRequested)
{
    var msg = consumer.Consume(stoppingToken);
    var metric = JsonSerializer.Deserialize<StorageMetric>(msg.Message.Value)!;

    if (metric.Utilization > 0.90)
        await alerts.RaiseAsync(AlertKind.CapacityCritical, metric);

    await store.AppendAsync(metric, stoppingToken);
    consumer.Commit(msg);
}`,
  },
  {
    title: 'Angular Design System & AI UX',
    summary: 'Reusable accessible components plus AI-assisted search and chat experiences.',
    impact: ['WCAG-aligned shared library', 'RBAC-driven UI', 'OpenAI / Azure Cognitive integrations'],
    tech: ['Angular', 'TypeScript', 'RxJS', 'OpenAI'],
    file: 'has-role.directive.ts',
    code: `@Directive({ selector: '[hasRole]' })
export class HasRoleDirective {
  private auth = inject(AuthService);
  private tpl  = inject(TemplateRef);
  private vcr  = inject(ViewContainerRef);

  @Input() set hasRole(roles: string[]) {
    this.vcr.clear();
    if (this.auth.hasAny(roles)) this.vcr.createEmbeddedView(this.tpl);
  }
}`,
  },
  {
    title: 'CI/CD & Quality Gates',
    summary: 'Pipelines that build, test and scan every change before it ships.',
    impact: ['SonarQube quality gates', 'Automated regression suites', 'Multi-environment deploys'],
    tech: ['GitHub Actions', 'Jenkins', 'SonarQube'],
    file: 'ci.yml',
    code: `name: ci
on: [pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-dotnet@v4
        with: { dotnet-version: 8.0.x }
      - run: dotnet test --collect:"XPlat Code Coverage"`,
  },
];

export const EDUCATION = {
  degree: 'Bachelor of Technology — Electrical and Electronics Engineering',
  period: '2011 – 2015',
};
