# Security and Credential Standard

Prefer existing authenticated connectors, configured CLI sessions, environment credentials, then temporary credentials supplied through a protected secret interface.

Never place credentials in source, URLs, Git remotes, configuration, logs, proof, screenshots, archives, or final output. Use process-scoped, non-echoing authentication and remove temporary helpers immediately. Stop when ownership or access is ambiguous.
