
D("silverdagger41.com", REG_NONE, DnsProvider(DSP_CLOUDFLARE),
	DefaultTTL(1),
	CF_PROXY_DEFAULT_OFF,
	CF_MANAGE_COMMENTS,

	// Ignore ACME (e.g. Let's Encrypt) validation records
	IGNORE("_acme-challenge", "TXT"),
	IGNORE("_acme-challenge.**", "TXT"),

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
  	// Also non-receiving
  	MX("@", 0, "."),
);
