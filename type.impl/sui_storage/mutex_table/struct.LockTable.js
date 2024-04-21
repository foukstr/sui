(function() {var type_impls = {
"sui_storage":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LockTable%3CK,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_storage/mutex_table.rs.html#98-274\">source</a><a href=\"#impl-LockTable%3CK,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static, L: <a class=\"trait\" href=\"sui_storage/mutex_table/trait.Lock.html\" title=\"trait sui_storage::mutex_table::Lock\">Lock</a> + 'static&gt; <a class=\"struct\" href=\"sui_storage/mutex_table/struct.LockTable.html\" title=\"struct sui_storage::mutex_table::LockTable\">LockTable</a>&lt;K, L&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new_with_cleanup\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_storage/mutex_table.rs.html#99-139\">source</a><h4 class=\"code-header\">pub fn <a href=\"sui_storage/mutex_table/struct.LockTable.html#tymethod.new_with_cleanup\" class=\"fn\">new_with_cleanup</a>(\n    num_shards: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.usize.html\">usize</a>,\n    cleanup_period: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>,\n    cleanup_initial_delay: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>,\n    cleanup_entries_threshold: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.usize.html\">usize</a>\n) -&gt; Self</h4></section><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_storage/mutex_table.rs.html#141-148\">source</a><h4 class=\"code-header\">pub fn <a href=\"sui_storage/mutex_table/struct.LockTable.html#tymethod.new\" class=\"fn\">new</a>(num_shards: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.usize.html\">usize</a>) -&gt; Self</h4></section><section id=\"method.size\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_storage/mutex_table.rs.html#150-152\">source</a><h4 class=\"code-header\">pub fn <a href=\"sui_storage/mutex_table/struct.LockTable.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.usize.html\">usize</a></h4></section><section id=\"method.cleanup\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_storage/mutex_table.rs.html#154-174\">source</a><h4 class=\"code-header\">pub fn <a href=\"sui_storage/mutex_table/struct.LockTable.html#tymethod.cleanup\" class=\"fn\">cleanup</a>(lock_table: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;RwLock&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/collections/hash/map/struct.HashMap.html\" title=\"struct std::collections::hash::map::HashMap\">HashMap</a>&lt;K, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;L&gt;&gt;&gt;&gt;&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.usize.html\">usize</a></h4></section><section id=\"method.acquire_locks\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_storage/mutex_table.rs.html#190-204\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_storage/mutex_table/struct.LockTable.html#tymethod.acquire_locks\" class=\"fn\">acquire_locks</a>&lt;I&gt;(&amp;self, object_iter: I) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;L::<a class=\"associatedtype\" href=\"sui_storage/mutex_table/trait.Lock.html#associatedtype.Guard\" title=\"type sui_storage::mutex_table::Lock::Guard\">Guard</a>&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = K&gt;,\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,</div></h4></section><section id=\"method.acquire_read_locks\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_storage/mutex_table.rs.html#206-217\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_storage/mutex_table/struct.LockTable.html#tymethod.acquire_read_locks\" class=\"fn\">acquire_read_locks</a>(&amp;self, objects: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;K&gt;) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;L::<a class=\"associatedtype\" href=\"sui_storage/mutex_table/trait.Lock.html#associatedtype.ReadGuard\" title=\"type sui_storage::mutex_table::Lock::ReadGuard\">ReadGuard</a>&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,</div></h4></section><section id=\"method.get_lock\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_storage/mutex_table.rs.html#219-240\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_storage/mutex_table/struct.LockTable.html#tymethod.get_lock\" class=\"fn\">get_lock</a>(&amp;self, k: K) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;L&gt;</h4></section><section id=\"method.acquire_lock\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_storage/mutex_table.rs.html#242-244\">source</a><h4 class=\"code-header\">pub async fn <a href=\"sui_storage/mutex_table/struct.LockTable.html#tymethod.acquire_lock\" class=\"fn\">acquire_lock</a>(&amp;self, k: K) -&gt; L::<a class=\"associatedtype\" href=\"sui_storage/mutex_table/trait.Lock.html#associatedtype.Guard\" title=\"type sui_storage::mutex_table::Lock::Guard\">Guard</a></h4></section><section id=\"method.try_acquire_lock\" class=\"method\"><a class=\"src rightside\" href=\"src/sui_storage/mutex_table.rs.html#246-273\">source</a><h4 class=\"code-header\">pub fn <a href=\"sui_storage/mutex_table/struct.LockTable.html#tymethod.try_acquire_lock\" class=\"fn\">try_acquire_lock</a>(&amp;self, k: K) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;L::<a class=\"associatedtype\" href=\"sui_storage/mutex_table/trait.Lock.html#associatedtype.Guard\" title=\"type sui_storage::mutex_table::Lock::Guard\">Guard</a>, <a class=\"enum\" href=\"sui_storage/mutex_table/enum.TryAcquireLockError.html\" title=\"enum sui_storage::mutex_table::TryAcquireLockError\">TryAcquireLockError</a>&gt;</h4></section></div></details>",0,"sui_storage::mutex_table::MutexTable","sui_storage::mutex_table::RwLockTable"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-LockTable%3CK,+L%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sui_storage/mutex_table.rs.html#276-280\">source</a><a href=\"#impl-Drop-for-LockTable%3CK,+L%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>, L: <a class=\"trait\" href=\"sui_storage/mutex_table/trait.Lock.html\" title=\"trait sui_storage::mutex_table::Lock\">Lock</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sui_storage/mutex_table/struct.LockTable.html\" title=\"struct sui_storage::mutex_table::LockTable\">LockTable</a>&lt;K, L&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sui_storage/mutex_table.rs.html#277-279\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.77.2/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","sui_storage::mutex_table::MutexTable","sui_storage::mutex_table::RwLockTable"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()