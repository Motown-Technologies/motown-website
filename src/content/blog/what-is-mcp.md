---
title: "MCP explained: what the Model Context Protocol is for"
image: ../../assets/blog/what-is-mcp-image.jpg
imageAlt: "A large blue socket in a stone wall with several very different cords, a rope, a hose, a phone cord and a ribbon, all ending in the same plug."
cover: ../../assets/blog/what-is-mcp.png
description: "What MCP is, why ChatGPT, Claude and other AI tools now support it, and what it means if you want AI connected to your own systems."
pubDate: 2026-10-28
relatedPages: ["/ai-integration-services", "/ai-agent-development", "/api-development"]
category: ai
---

MCP, the Model Context Protocol, is a shared standard for connecting AI applications to other software. A system that offers an MCP connection once can be used from any AI tool that supports MCP, instead of needing a separate integration for each one.

That's why you're seeing "connectors" appear everywhere. Claude, ChatGPT, Visual Studio Code and Cursor are among the AI tools listed as supporting it on the [official MCP site](https://modelcontextprotocol.io/docs/getting-started/intro), which describes it as a USB-C port for AI applications.

## What problem does MCP solve?

Before MCP, connecting an AI assistant to your calendar, your CRM or your database meant writing an integration for that assistant specifically. Connecting the same database to a second AI tool meant writing it again, in that tool's format. Every pairing of AI tool and business system was its own small project.

MCP replaces that with one common format. The software that holds the data or performs the action runs an MCP server. The AI application runs an MCP client. Any client can talk to any server, so a company that builds one MCP server for its product is reachable from every AI tool that speaks the protocol.

## How MCP works, in plain terms

According to the [MCP architecture overview](https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture), an MCP server can offer an AI application three kinds of things:

- Tools: actions the AI can call, such as "look up an order," "create a ticket" or "run this database query."
- Resources: information the AI can read for context, such as a file, a database schema or a customer record.
- Prompts: ready-made templates that help the AI use the server well.

The AI application asks each connected server what it offers, shows those tools to the model, and when the model decides to use one, the application sends the request to the right server and passes the result back. Servers can run on your own computer or as a remote service over the internet, with sign-in handled through OAuth, the same mechanism behind most "sign in with Google" buttons.

The specification is versioned by date. The current version is dated 28 July 2026, and the spec is published openly at [modelcontextprotocol.io](https://modelcontextprotocol.io/specification/latest).

## Who controls MCP?

Anthropic created MCP and released it in late 2024. In December 2025 it [donated the protocol](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation) to the Agentic AI Foundation, a fund run under the Linux Foundation and co-founded by Anthropic, Block and OpenAI. For a business deciding whether to build on it, that matters: the standard isn't owned by one AI vendor, so supporting it doesn't tie you to one.

## What MCP means for your business

### If you sell software

Your customers will increasingly expect to use your product from inside their AI assistant. An MCP server is how you offer that. It usually sits on top of an API you already have, so the quality of that API sets the quality of the MCP server. If your API is thin or inconsistent, that's the place to start, and it's work we do as [API development](/api-development).

### If you want AI connected to your internal systems

Say a distribution company wants staff to ask an assistant "which orders from last week are still unshipped?" and get an answer from the real order system. An MCP server in front of that system makes it available to whichever AI tool the company uses, and lets them switch tools later without rebuilding the connection. That portability is the same reason we put a single internal layer between a product and its AI providers in our [AI integration](/ai-integration-services) work.

### If you're building an agent

Agents need tools to do anything useful, and MCP is becoming the common way to hand them over. The design questions don't change: what the agent may do alone, what needs approval and what gets logged. Our [AI agent development](/ai-agent-development) page covers how we decide those.

## What to watch out for

Connecting an AI to a system gives it whatever access that connection allows, so the security questions are the ordinary ones, asked more carefully. The MCP project publishes [security best practices](https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices) that stress asking for the narrowest permissions possible and getting explicit consent before running anything on a user's machine.

Three things we check on any MCP setup:

- Least privilege. A server that only needs to read orders shouldn't be able to cancel them. Expose read tools first and add write tools one at a time.
- Where the server came from. A local MCP server is a program running on your computer with your permissions. Install them the way you'd install any software, from sources you trust.
- What the AI reads. Content that arrives through a tool, such as an email or a web page, can carry hidden instructions. We wrote about that risk in [prompt injection explained](/blog/prompt-injection-explained).

## Should you build an MCP server?

If customers or staff are already asking to use your system from an AI assistant, probably yes, and it's often a modest project on top of a good API. If nobody is asking yet, make sure your API is solid first, because that's what an MCP server is built on.

If you're weighing up an MCP server or an AI connection to your own systems, [tell us what you're connecting](/contact).
