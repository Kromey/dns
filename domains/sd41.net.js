
D("sd41.net", REG_NONE, DnsProvider(DSP_CLOUDFLARE),
	DefaultTTL(1),
	CF_PROXY_DEFAULT_OFF,
	CF_MANAGE_COMMENTS, // opt into comments syncing
	A("beta", "72.14.189.224"),
	A("kromey", "72.14.189.224", CF_PROXY_ON),
	A("static", "72.14.189.224", CF_PROXY_ON),

	MX("mail2", 10, "mx5.mapipro.com."),

  	// Short-lived names for DNS resolution testing
  	A("*.test", "127.0.0.7", TTL(60), CF_PROXY_OFF),

	SPF_BUILDER({
		label: "@",
		ttl: 60,
		parts: [
			"v=spf1",
			"include:_spf.mx.cloudflare.net",
			"~all",
		],
	}),
	DMARC_BUILDER({
		policy: "reject",
		subdomainPolicy: "reject",
		alignmentSPF: "strict",
		alignmentDKIM: "strict",
		failureOptions: "1",
		rua: [
			"mailto:47e429cba44c47c98bb232c71afd65af@dmarc-reports.cloudflare.net",
			"mailto:re+hugtratqvdn@dmarc.postmarkapp.com",
		],
		ruf: [
			"mailto:dmarc@sd41.net",
		],
	}),
	DKIM_BUILDER({
		selector: "sif1",
		keytype: "rsa",
		pubkey: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDK7AuX4aJjeCqnlypQTvzKoS3eFYRKdsiGC395oZrn1ziPrqfgoY6rPNLmc14N3y5VO/Nl27RnD+FsgtCxbICEjvmfFpxnprY6X4EziAhyyGU3dxku8HsuPDFAs8fuvra4PjrxLYL/2l1Eo8iVGb2L0qdBnCxWK7dDrt4v5+P/uwIDAQAB",
	}),

	// Some simple test records
	SRV("_sip._tcp", 5, 9, 12345, "sif.kromey.us.", CF_COMMENT("Testing Umr"), TTL(60)),
	TXT("txt", "This record has a 15m TTL", TTL(900)),
);

