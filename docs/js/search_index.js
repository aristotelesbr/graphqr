var search_data = {"index":{"searchIndex":["graphqr","applyscopes","authorized","configuration","fields","basefield","pagination","paginationextension","resolvers","pagyresolver","types","paginationpageinfotype","permittedfieldsextension","policies","authorizegraphql","punditprovider","queryfield","scopeitems","after_resolve()","allowed?()","apply()","apply_scopes()","authorize_graphql()","authorized?()","authorized_records()","call_resolver()","config()","configuration()","configure()","configure()","cursor_from_node()","edge_nodes()","edges()","new()","new()","new()","nodes()","page_info()","pagination_type()","paginator()","paginator()","paginator=()","permitted_field?()","policy_provider()","policy_provider()","policy_provider()","policy_provider=()","query_field()","resolve()","resolve()","scope_items()","use_authorization()","use_authorization()","use_pagination()","use_pagination()","use_pagy?()","use_pundit?()","code_of_conduct","gemfile","gemfile.lock","license","readme","rakefile","setup","graphqr.gemspec"],"longSearchIndex":["graphqr","graphqr::applyscopes","graphqr::authorized","graphqr::configuration","graphqr::fields","graphqr::fields::basefield","graphqr::pagination","graphqr::pagination::paginationextension","graphqr::pagination::resolvers","graphqr::pagination::resolvers::pagyresolver","graphqr::pagination::types","graphqr::pagination::types::paginationpageinfotype","graphqr::permittedfieldsextension","graphqr::policies","graphqr::policies::authorizegraphql","graphqr::policies::punditprovider","graphqr::queryfield","graphqr::scopeitems","graphqr::pagination::paginationextension#after_resolve()","graphqr::policies::punditprovider#allowed?()","graphqr::pagination::paginationextension#apply()","graphqr::applyscopes#apply_scopes()","graphqr::policies::authorizegraphql#authorize_graphql()","graphqr::authorized#authorized?()","graphqr::policies::punditprovider#authorized_records()","graphqr::pagination::paginationextension#call_resolver()","graphqr::config()","graphqr::configuration()","graphqr::configure()","graphqr::configuration#configure()","graphqr::pagination::resolvers::pagyresolver#cursor_from_node()","graphqr::pagination::resolvers::pagyresolver#edge_nodes()","graphqr::pagination::resolvers::pagyresolver#edges()","graphqr::fields::basefield::new()","graphqr::pagination::resolvers::pagyresolver::new()","graphqr::policies::punditprovider::new()","graphqr::pagination::resolvers::pagyresolver#nodes()","graphqr::pagination::resolvers::pagyresolver#page_info()","graphqr::pagination#pagination_type()","graphqr::paginator()","graphqr::configuration#paginator()","graphqr::configuration#paginator=()","graphqr::policies::punditprovider#permitted_field?()","graphqr::policy_provider()","graphqr::configuration#policy_provider()","graphqr::policies::authorizegraphql#policy_provider()","graphqr::configuration#policy_provider=()","graphqr::queryfield#query_field()","graphqr::pagination::paginationextension#resolve()","graphqr::permittedfieldsextension#resolve()","graphqr::scopeitems#scope_items()","graphqr::use_authorization()","graphqr::configuration#use_authorization()","graphqr::use_pagination()","graphqr::configuration#use_pagination()","graphqr::use_pagy?()","graphqr::use_pundit?()","","","","","","","",""],"info":[["GraphQR","","GraphQR.html","","<p>This module represents all the extensions we made to the graphql-ruby library\nit contains helpers and ...\n"],["GraphQR::ApplyScopes","","GraphQR/ApplyScopes.html","","<p>The ApplyScopes module defines a way of applying model scopes in the GraphQL universe\nit is based on ...\n"],["GraphQR::Authorized","","GraphQR/Authorized.html","","<p>This module is the authorization extension created with our PolicyProvider.\n<p>To use it add <code>extend GraphQR::Authorized</code> …\n"],["GraphQR::Configuration","","GraphQR/Configuration.html","","<p>Module responsible for global configuration of the gem\n"],["GraphQR::Fields","","GraphQR/Fields.html","","<p>This module represents all the extensions we made to the basic GraphQL::Schema::Field class\nit contains ...\n"],["GraphQR::Fields::BaseField","","GraphQR/Fields/BaseField.html","","<p>The BaseField class rewrites the field initialization, adding some options that could be helpful:\n<p>paginate …\n"],["GraphQR::Pagination","","GraphQR/Pagination.html","","<p>This module adds the GraphQL pagination types.\n<p>When a field is paginated, the field <code>page_info</code> is always …\n"],["GraphQR::Pagination::PaginationExtension","","GraphQR/Pagination/PaginationExtension.html","","<p>The PaginationExtension is used on the <code>GraphQR::Fields::BaseField</code>.\n<p>It adds the <code>per</code> and <code>page</code> arguments …\n"],["GraphQR::Pagination::Resolvers","","GraphQR/Pagination/Resolvers.html","",""],["GraphQR::Pagination::Resolvers::PagyResolver","","GraphQR/Pagination/Resolvers/PagyResolver.html","","<p>This is a resolver that uses <code>Pagy::Backend</code> and maps it to the GraphQL pagination structure.\n"],["GraphQR::Pagination::Types","","GraphQR/Pagination/Types.html","",""],["GraphQR::Pagination::Types::PaginationPageInfoType","","GraphQR/Pagination/Types/PaginationPageInfoType.html","","<p>This defines the information about pagination in a connection.\n"],["GraphQR::PermittedFieldsExtension","","GraphQR/PermittedFieldsExtension.html","","<p>This is an extension used on the <code>GraphQR::Fields::BaseField</code>.\n<p>It is responsible for authorizing each field …\n"],["GraphQR::Policies","","GraphQR/Policies.html","",""],["GraphQR::Policies::AuthorizeGraphQL","","GraphQR/Policies/AuthorizeGraphQL.html","","<p>The AuthorizeGraphQL module defines a way of running the PolicyProvider authorization with a specific …\n"],["GraphQR::Policies::PunditProvider","","GraphQR/Policies/PunditProvider.html","","<p>This is a wrapper around Pundit provided to keep all PolicyProviders with the same methods.\n<p>If you want …\n"],["GraphQR::QueryField","","GraphQR/QueryField.html","","<p>This extension adds the <code>query_field</code> method.\nA helper to create simple queries faster and easier\n<p>To use …\n"],["GraphQR::ScopeItems","","GraphQR/ScopeItems.html","","<p>This extension adds the PolicyProvider scope to the fields.\nWhen using the extension, ActiveRecord::Relation ...\n"],["after_resolve","GraphQR::Pagination::PaginationExtension","GraphQR/Pagination/PaginationExtension.html#method-i-after_resolve","(value:, arguments:, **_kwargs)",""],["allowed?","GraphQR::Policies::PunditProvider","GraphQR/Policies/PunditProvider.html#method-i-allowed-3F","(action:, record:, policy_class: nil)",""],["apply","GraphQR::Pagination::PaginationExtension","GraphQR/Pagination/PaginationExtension.html#method-i-apply","()",""],["apply_scopes","GraphQR::ApplyScopes","GraphQR/ApplyScopes.html#method-i-apply_scopes","(target, scopes)","<p>This method is a parallel to the one offerend by the <code>has_scope</code> gem.\nA big difference in this case is ...\n"],["authorize_graphql","GraphQR::Policies::AuthorizeGraphQL","GraphQR/Policies/AuthorizeGraphQL.html#method-i-authorize_graphql","(record, action, policy_class: nil)","<p>This method is a wrapper around the Pundit authorize, receiving the same arguments.\nThe only difference ...\n"],["authorized?","GraphQR::Authorized","GraphQR/Authorized.html#method-i-authorized-3F","(object, context)","<p>The <code>authorized?</code>method always runs before resolving an object.\n<p>Our implementation adds a check on the  …\n"],["authorized_records","GraphQR::Policies::PunditProvider","GraphQR/Policies/PunditProvider.html#method-i-authorized_records","(records:)",""],["call_resolver","GraphQR::Pagination::PaginationExtension","GraphQR/Pagination/PaginationExtension.html#method-i-call_resolver","(value, arguments)",""],["config","GraphQR","GraphQR.html#method-c-config","()",""],["configuration","GraphQR","GraphQR.html#method-c-configuration","()",""],["configure","GraphQR","GraphQR.html#method-c-configure","()",""],["configure","GraphQR::Configuration","GraphQR/Configuration.html#method-i-configure","()",""],["cursor_from_node","GraphQR::Pagination::Resolvers::PagyResolver","GraphQR/Pagination/Resolvers/PagyResolver.html#method-i-cursor_from_node","(item)",""],["edge_nodes","GraphQR::Pagination::Resolvers::PagyResolver","GraphQR/Pagination/Resolvers/PagyResolver.html#method-i-edge_nodes","()",""],["edges","GraphQR::Pagination::Resolvers::PagyResolver","GraphQR/Pagination/Resolvers/PagyResolver.html#method-i-edges","()",""],["new","GraphQR::Fields::BaseField","GraphQR/Fields/BaseField.html#method-c-new","(*args, paginate: false, **kwargs, &block)",""],["new","GraphQR::Pagination::Resolvers::PagyResolver","GraphQR/Pagination/Resolvers/PagyResolver.html#method-c-new","(records, arguments)",""],["new","GraphQR::Policies::PunditProvider","GraphQR/Policies/PunditProvider.html#method-c-new","(policy_context:)",""],["nodes","GraphQR::Pagination::Resolvers::PagyResolver","GraphQR/Pagination/Resolvers/PagyResolver.html#method-i-nodes","()",""],["page_info","GraphQR::Pagination::Resolvers::PagyResolver","GraphQR/Pagination/Resolvers/PagyResolver.html#method-i-page_info","()",""],["pagination_type","GraphQR::Pagination","GraphQR/Pagination.html#method-i-pagination_type","()",""],["paginator","GraphQR","GraphQR.html#method-c-paginator","()",""],["paginator","GraphQR::Configuration","GraphQR/Configuration.html#method-i-paginator","()","<p>Returns the selected paginator.\nIf no paginator is selected, it tries to find the one used\n"],["paginator=","GraphQR::Configuration","GraphQR/Configuration.html#method-i-paginator-3D","(paginator)","<p>Sets the preferred paginator\nTODO: support more than Pagy\n"],["permitted_field?","GraphQR::Policies::PunditProvider","GraphQR/Policies/PunditProvider.html#method-i-permitted_field-3F","(record:, field_name:)",""],["policy_provider","GraphQR","GraphQR.html#method-c-policy_provider","()",""],["policy_provider","GraphQR::Configuration","GraphQR/Configuration.html#method-i-policy_provider","()","<p>Returns the selected policy_provider.\nIf no policy_provider is selected, it tries to find the one used ...\n"],["policy_provider","GraphQR::Policies::AuthorizeGraphQL","GraphQR/Policies/AuthorizeGraphQL.html#method-i-policy_provider","()",""],["policy_provider=","GraphQR::Configuration","GraphQR/Configuration.html#method-i-policy_provider-3D","(policy_provider)","<p>Sets the preferred policy_provider\nTODO: support CanCan\n"],["query_field","GraphQR::QueryField","GraphQR/QueryField.html#method-i-query_field","(field_name, active_record_class, type_class:, scope_class: nil, **kwargs, &block)","<p>The <code>query_field</code> method is a helper to create fields and resolver without effort.\n<p>Arguments\n<p><code>field_name</code>  …\n"],["resolve","GraphQR::Pagination::PaginationExtension","GraphQR/Pagination/PaginationExtension.html#method-i-resolve","(object:, arguments:, **_kwargs)","<p>Remove pagination args before passing it to a user method\n"],["resolve","GraphQR::PermittedFieldsExtension","GraphQR/PermittedFieldsExtension.html#method-i-resolve","(object:, arguments:, context:)",""],["scope_items","GraphQR::ScopeItems","GraphQR/ScopeItems.html#method-i-scope_items","(items, context)","<p>The method checks whether the items are a ActiveRecord::Relation or not.\nIf they are, it runs the PolicyProvider ...\n"],["use_authorization","GraphQR","GraphQR.html#method-c-use_authorization","()",""],["use_authorization","GraphQR::Configuration","GraphQR/Configuration.html#method-i-use_authorization","()",""],["use_pagination","GraphQR","GraphQR.html#method-c-use_pagination","()",""],["use_pagination","GraphQR::Configuration","GraphQR/Configuration.html#method-i-use_pagination","()",""],["use_pagy?","GraphQR","GraphQR.html#method-c-use_pagy-3F","()",""],["use_pundit?","GraphQR","GraphQR.html#method-c-use_pundit-3F","()",""],["CODE_OF_CONDUCT","","CODE_OF_CONDUCT_md.html","","<p>Contributor Covenant Code of Conduct\n<p>Our Pledge\n<p>In the interest of fostering an open and welcoming environment, …\n"],["Gemfile","","Gemfile.html","","<p># frozen_string_literal: true\n<p>source &#39;rubygems.org&#39;\n<p>git_source(:github) { |repo_name| “github.com/#{repo_name …\n"],["Gemfile.lock","","Gemfile_lock.html","","<p>PATH\n\n<pre>remote: .\nspecs:\n  graphqr (0.0.5)\n    graphql (&gt;= 1.9.0, &lt; 2)</pre>\n<p>GEM\n"],["LICENSE","","LICENSE_txt.html","","<p>The MIT License (MIT)\n<p>Copyright © 2019 Manuel Puyol\n<p>Permission is hereby granted, free of charge, to …\n"],["README","","README_md.html","","<p><img src=\"https://badge.fury.io/rb/graphqr.svg\">\n<img src=\"https://travis-ci.com/QultureRocks/graphqr.svg?branch=master\"> ...\n"],["Rakefile","","Rakefile.html","","<p># frozen_string_literal: true\n<p>require &#39;bundler/gem_tasks&#39; require &#39;rspec/core/rake_task&#39; …\n"],["setup","","bin/setup.html","","<p>#!/usr/bin/env bash set -euo pipefail IFS=$&#39;nt&#39; set -vx\n<p>bundle install\n<p># Do any other automated …\n"],["graphqr.gemspec","","graphqr_gemspec.html","","<p># frozen_string_literal: true\n<p>lib = File.expand_path(&#39;lib&#39;, __dir__) $LOAD_PATH.unshift(lib) unless …\n"]]}}