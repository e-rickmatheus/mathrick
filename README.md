# MATHRICK-LAB 🧪✨

> **MATHRICK: Laboratório Criativo** — Repositório oficial do site e laboratório de inovação, design e tecnologia web.

---

## 🚀 Tecnologias

- **[Astro](https://astro.build)** (v5+) — Framework ultrarrápido focado em performance e conteúdo.
- **[Tailwind CSS](https://tailwindcss.com)** (v4+) — Estilização moderna e reativa.
- **TypeScript** — Segurança de tipos e escalabilidade.
- **Deploy**: [Vercel](https://vercel.com) com integração contínua (CI/CD).

---

## 🛠️ Como rodar o projeto localmente

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse no navegador: `http://localhost:4321`

3. **Gerar build de produção**:
   ```bash
   npm run build
   ```

---

## 🐙 Como enviar para o GitHub

1. No terminal deste projeto, o repositório Git local já está inicializado.
2. Crie um repositório vazio no GitHub chamado **`MATHRICK-LAB`** (pode ser público ou privado):
   👉 [https://github.com/new](https://github.com/new)
3. Conecte o repositório remoto e envie o código (substitua `<SEU_USUARIO>` pelo seu usuário do GitHub):
   ```bash
   git remote add origin https://github.com/<SEU_USUARIO>/MATHRICK-LAB.git
   git branch -M main
   git push -u origin main
   ```

---

## ⚡ Como publicar na Vercel

1. Acesse o painel da [Vercel](https://vercel.com) e faça login com sua conta do GitHub.
2. Clique no botão **"Add New..."** ➔ **"Project"**.
3. Na lista de repositórios do GitHub, localize e clique em **Import** no repositório **`MATHRICK-LAB`**.
4. O Vercel detectará automaticamente o framework **Astro** com as configurações ideais de build:
   - **Framework Preset**: `Astro`
   - **Build Command**: `astro build`
   - **Output Directory**: `dist`
5. Clique em **Deploy**! Em menos de 1 minuto seu site estará no ar com HTTPS gratuito e atualizações automáticas a cada novo commit.
