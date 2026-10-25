---
title: "Connecting AI to your business tools: what MCP changes"
image: ../../assets/blog/what-is-mcp-image.jpg
imageAlt: "A large blue socket in a stone wall with several very different cords, a rope, a hose, a phone cord and a ribbon, all ending in the same plug."
cover: ../../assets/blog/what-is-mcp.png
description: "What the Model Context Protocol does for AI connections, and the access decisions a shared standard does not make for you."
pubDate: 2026-10-28
relatedPages: ["/ai-integration-services", "/ai-agent-development", "/api-development"]
category: ai
---

A member of staff wants to ask an AI assistant which orders are still unshipped. The answer lives in the order system, so someone needs to connect the two. If the company later changes AI tools, will that connection have to be built again?

MCP, the Model Context Protocol, is a shared standard intended to make those connections reusable across AI applications that support it. It gives systems a common way to expose data and actions. The business still has to decide which of those actions an assistant should be allowed to take.

## What problem does MCP solve?

Before MCP, connecting an AI assistant to your calendar, your CRM or your database meant writing an integration for that assistant specifically. Connecting the same database to a second AI tool meant writing it again, in that tool's format. Each pairing needed its own integration work.

MCP replaces that with one common format. The software that holds the data or performs the action runs an MCP server. The AI application runs an MCP client. Any client can talk to any server, so a company that builds one MCP server for its product is reachable from every AI tool that speaks the protocol.

## How MCP works, in plain terms

According to the [MCP architecture overview](https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture), an MCP server can offer an AI application three kinds of things:

- Tools: actions the AI can call, such as "look up an order," "create a ticket" or "run this database query."
- Resources: information the AI can read for context, such as a file, a database schema or a customer record.
- Prompts: ready-made templates that help the AI use the server well.

The AI application asks each connected server what it offers, shows those tools to the model, and when the model decides to use one, the application sends the request to the right server and passes the result back. Servers can run on your own computer or as a remote service over the internet, with sign-in handled through OAuth, the same mechanism behind most "sign in with Google" buttons.

The specification is versioned by date. The current version is dated 28 July 2026, and the spec is published openly at [modelcontextprotocol.io](https://modelcontextprotocol.io/specification/latest).

## Who controls MCP?

Anthropic created MCP and released it in late 2024. In December 2025 it [donated the protocol](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation) to the Agentic AI Foundation, a fund run under the Linux Foundation and co-founded by Anthropic, Block and OpenAI. The standard isn't owned by one AI vendor, so a business can support it without tying itself to that vendor.

## What MCP means for your business

### If you sell software

Your customers will increasingly expect to use your product from inside their AI assistant. An MCP server is how you offer that. It usually sits on top of an API you already have, so the quality of that API sets the quality of the MCP server. If your API is thin or inconsistent, investigate that before assuming an MCP connection will make it easier to use.

### If you want AI connected to your internal systems

Say a distribution company wants staff to ask an assistant "which orders from last week are still unshipped?" and get an answer from the real order system. An MCP server in front of that system makes it available to whichever AI tool the company uses, and lets them switch tools later without rebuilding the connection. Check the connection with the AI applications people actually plan to use, including their sign-in and permissions.

### If you're building an agent

Agents need tools to do anything useful, and MCP is becoming the common way to hand them over. The design questions don't change: what the agent may do alone, what needs approval and what gets logged. Assign those decisions to an owner before exposing write tools.

## What to watch out for

Connecting an AI to a system gives it whatever access that connection allows, so the security questions are the ordinary ones, asked more carefully. The MCP project publishes [security best practices](https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices) that stress asking for the narrowest permissions possible and getting explicit consent before running anything on a user's machine.

When reviewing an MCP setup, we check:

- Least privilege. A server that only needs to read orders shouldn't be able to cancel them. Expose read tools first and add write tools one at a time.
- Where the server came from. A local MCP server is a program running on your computer with your permissions. Install them the way you'd install any software, from sources you trust.
- What the AI reads. Content that arrives through a tool, such as an email or a web page, can carry hidden instructions. We wrote about that risk in [prompt injection explained](/blog/prompt-injection-explained).

## Should you build an MCP server?

Requests from customers or staff to use the system through an AI assistant are a reason to investigate an MCP server. On top of a good API, it can be a modest project. Without that demand, focus first on the API the connection would depend on.
