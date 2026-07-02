# Scanner de Perfil Face ID — Anderson Apple Repair

Funil gamificado (quiz interativo) para o curso de reparos avançados de iPhone da Anderson Apple Repair. Site estático, sem backend, construído com React + TypeScript + Vite + Tailwind CSS.

## Fluxo

Hero → Pré-frame → Quiz (15 etapas, rota Iniciante ou Técnico) → Loading de diagnóstico → Resultado personalizado → VSL → Oferta desbloqueável → FAQ.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` com caminhos relativos (`base: "./"`), pronta para upload em qualquer hospedagem estática (Hostinger, etc). Não há backend, banco de dados ou dependência de API externa.
