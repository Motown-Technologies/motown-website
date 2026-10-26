# LinkedIn: what-is-mcp

## Post 1: native text

Someone on your team wants to ask an AI assistant which of last week's orders haven't shipped, so it needs a connection to your order system. If you switch AI tools later, does that connection get built again?

Before MCP (Model Context Protocol), it usually did. Each assistant needed its own.

MCP is a shared standard for those connections. The system holding the data runs an MCP server, the AI app runs a client, and any client can talk to any server. Put one server in front of your order system and any AI tool that supports MCP can use it, so switching tools doesn't mean rebuilding it.

Anthropic created MCP in late 2024 and in December 2025 donated it to the Agentic AI Foundation, a fund under the Linux Foundation co-founded by Anthropic, Block and OpenAI. No single AI vendor owns it, so it doesn't tie you to one.

What the assistant may do is still your call, since it gets whatever access the connection allows. A server that only needs to read orders shouldn't be able to cancel them, so start read-only and add tools that change things one at a time. Install local servers only from sources you trust, because each runs on your computer with your permissions. An email or web page coming through a tool can carry hidden instructions.

Selling software? Your MCP server will usually sit on your API and is only as good as it. If yours is thin or inconsistent, start there.

## Post 2: carousel (~/Documents/Motown Carousels/what-is-mcp.pdf)

Document title: Checklist for reviewing an MCP connection

Use this before you connect an AI assistant to a system with real data in it. The standard makes the connection reusable, and these questions cover the access decisions that are still yours to make.

## First comment (both posts)

https://motowntech.com/go/what-is-mcp
