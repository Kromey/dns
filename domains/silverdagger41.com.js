
D("silverdagger41.com", REG_NONE, DnsProvider(DSP_CLOUDFLARE),
	DefaultTTL(1),
	CF_PROXY_DEFAULT_OFF,
	CF_MANAGE_COMMENTS,

	// Ignore ACME (e.g. Let's Encrypt) validation records
	IGNORE("_acme-challenge", "TXT"),
	IGNORE("_acme-challenge.**", "TXT"),

	A("@", IP("1.2.3.4"), CF_PROXY_ON),
	CNAME("www", "@"),

	// Enter the land of make-believe: Pretend we use Google for email
	MX("@", 1, "aspmx.l.google.com."),
	MX("@", 5, "alt1.aspmx.l.google.com."),
	MX("@", 5, "alt2.aspmx.l.google.com."),
	MX("@", 10, "alt3.aspmx.l.google.com."),
	MX("@", 10, "alt4.aspmx.l.google.com."),

	// This is a non-sending domain, ensure any email "from" us is rejected
	DMARC_BUILDER({
		policy: "reject",
		subdomainPolicy: "reject",
		alignmentDKIM: "strict",
		alignmentSPF: "strict",
	}),
	DKIM_BUILDER({
		selector: "*",
	}),
	SPF_BUILDER({
		label: "@",
		parts: [
			"v=spf1",
			"-all",
		],
	}),
);
