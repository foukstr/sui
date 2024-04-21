(function() {var type_impls = {
"sui_types":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TrustedEnvelope%3CT,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/message_envelope.rs.html#438-446\">source</a><a href=\"#impl-TrustedEnvelope%3CT,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"sui_types/message_envelope/trait.Message.html\" title=\"trait sui_types::message_envelope::Message\">Message</a>, S&gt; <a class=\"struct\" href=\"sui_types/message_envelope/struct.TrustedEnvelope.html\" title=\"struct sui_types::message_envelope::TrustedEnvelope\">TrustedEnvelope</a>&lt;T, S&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.into_inner\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_types/message_envelope.rs.html#439-441\">source</a><h4 class=\"code-header\">pub fn <a href=\"sui_types/message_envelope/struct.TrustedEnvelope.html#tymethod.into_inner\" class=\"fn\">into_inner</a>(self) -&gt; <a class=\"struct\" href=\"sui_types/message_envelope/struct.Envelope.html\" title=\"struct sui_types::message_envelope::Envelope\">Envelope</a>&lt;T, S&gt;</h4></section><section id=\"method.inner\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_types/message_envelope.rs.html#443-445\">source</a><h4 class=\"code-header\">pub fn <a href=\"sui_types/message_envelope/struct.TrustedEnvelope.html#tymethod.inner\" class=\"fn\">inner</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"sui_types/message_envelope/struct.Envelope.html\" title=\"struct sui_types::message_envelope::Envelope\">Envelope</a>&lt;T, S&gt;</h4></section></div></details>",0,"sui_types::effects::TrustedSignedTransactionEffects","sui_types::executable_transaction::TrustedExecutableTransaction","sui_types::messages_checkpoint::TrustedCheckpoint","sui_types::transaction::TrustedTransaction","sui_types::transaction::TrustedCertificate"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-TrustedEnvelope%3CT,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/message_envelope.rs.html#426\">source</a><a href=\"#impl-Clone-for-TrustedEnvelope%3CT,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"sui_types/message_envelope/trait.Message.html\" title=\"trait sui_types::message_envelope::Message\">Message</a>, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sui_types/message_envelope/struct.TrustedEnvelope.html\" title=\"struct sui_types::message_envelope::TrustedEnvelope\">TrustedEnvelope</a>&lt;T, S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/message_envelope.rs.html#426\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sui_types/message_envelope/struct.TrustedEnvelope.html\" title=\"struct sui_types::message_envelope::TrustedEnvelope\">TrustedEnvelope</a>&lt;T, S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sui_types::effects::TrustedSignedTransactionEffects","sui_types::executable_transaction::TrustedExecutableTransaction","sui_types::messages_checkpoint::TrustedCheckpoint","sui_types::transaction::TrustedTransaction","sui_types::transaction::TrustedCertificate"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-TrustedEnvelope%3CT,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/message_envelope.rs.html#426\">source</a><a href=\"#impl-Serialize-for-TrustedEnvelope%3CT,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, S&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"sui_types/message_envelope/struct.TrustedEnvelope.html\" title=\"struct sui_types::message_envelope::TrustedEnvelope\">TrustedEnvelope</a>&lt;T, S&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"sui_types/message_envelope/trait.Message.html\" title=\"trait sui_types::message_envelope::Message\">Message</a>,\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/message_envelope.rs.html#426\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(&amp;self, __serializer: __S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;__S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, __S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","sui_types::effects::TrustedSignedTransactionEffects","sui_types::executable_transaction::TrustedExecutableTransaction","sui_types::messages_checkpoint::TrustedCheckpoint","sui_types::transaction::TrustedTransaction","sui_types::transaction::TrustedCertificate"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-TrustedEnvelope%3CT,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/message_envelope.rs.html#426\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-TrustedEnvelope%3CT,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, T, S&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"sui_types/message_envelope/struct.TrustedEnvelope.html\" title=\"struct sui_types::message_envelope::TrustedEnvelope\">TrustedEnvelope</a>&lt;T, S&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; + <a class=\"trait\" href=\"sui_types/message_envelope/trait.Message.html\" title=\"trait sui_types::message_envelope::Message\">Message</a>,\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/message_envelope.rs.html#426\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(__deserializer: __D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, __D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","sui_types::effects::TrustedSignedTransactionEffects","sui_types::executable_transaction::TrustedExecutableTransaction","sui_types::messages_checkpoint::TrustedCheckpoint","sui_types::transaction::TrustedTransaction","sui_types::transaction::TrustedCertificate"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-TrustedEnvelope%3CT,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_types/message_envelope.rs.html#429-436\">source</a><a href=\"#impl-Debug-for-TrustedEnvelope%3CT,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"sui_types/message_envelope/struct.TrustedEnvelope.html\" title=\"struct sui_types::message_envelope::TrustedEnvelope\">TrustedEnvelope</a>&lt;T, S&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"sui_types/message_envelope/trait.Message.html\" title=\"trait sui_types::message_envelope::Message\">Message</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_types/message_envelope.rs.html#433-435\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sui_types::effects::TrustedSignedTransactionEffects","sui_types::executable_transaction::TrustedExecutableTransaction","sui_types::messages_checkpoint::TrustedCheckpoint","sui_types::transaction::TrustedTransaction","sui_types::transaction::TrustedCertificate"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()